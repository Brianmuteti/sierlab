import { NextResponse } from "next/server";

interface ContactBody {
    name?: string;
    email?: string;
    company?: string;
    message?: string;
    service?: string;
    source?: string;
}

function validate(body: ContactBody) {
    const errors: Record<string, string> = {};
    if (!body.name?.trim()) errors.name = "Name is required.";
    if (!body.email?.trim()) errors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email))
        errors.email = "Invalid email.";
    if (!body.message?.trim()) errors.message = "Message is required.";
    return errors;
}

async function sendViaResend(body: ContactBody) {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    if (!apiKey || !to) return false;

    const from = process.env.CONTACT_FROM_EMAIL ?? "Sierlab Contact <onboarding@resend.dev>";
    const subject = body.service
        ? `New inquiry: ${body.service}`
        : "New contact form message";

    const html = `
      <h2>Contact form</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      ${body.company ? `<p><strong>Company:</strong> ${body.company}</p>` : ""}
      ${body.service ? `<p><strong>Service:</strong> ${body.service}</p>` : ""}
      ${body.source ? `<p><strong>Source:</strong> ${body.source}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${String(body.message).replace(/\n/g, "<br>")}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ from, to: [to], subject, html }),
    });

    return res.ok;
}

async function sendViaWeb3Forms(body: ContactBody) {
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) return false;

    const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            access_key: accessKey,
            name: body.name,
            email: body.email,
            company: body.company,
            message: body.message,
            service: body.service,
            source: body.source,
            subject: body.service
                ? `Sierlab inquiry: ${body.service}`
                : "Sierlab contact form",
        }),
    });

    const data = await res.json();
    return res.ok && data.success;
}

async function sendViaWebhook(body: ContactBody) {
    const url = process.env.CONTACT_WEBHOOK_URL;
    if (!url) return false;

    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            ...body,
            receivedAt: new Date().toISOString(),
        }),
    });

    return res.ok;
}

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as ContactBody;
        const errors = validate(body);
        if (Object.keys(errors).length > 0) {
            return NextResponse.json({ ok: false, errors }, { status: 400 });
        }

        const delivered =
            (await sendViaResend(body)) ||
            (await sendViaWeb3Forms(body)) ||
            (await sendViaWebhook(body));

        if (!delivered && process.env.NODE_ENV === "development") {
            console.info("[contact] Message received (no email provider configured):", body);
            return NextResponse.json({
                ok: true,
                delivered: false,
                message:
                    "Message logged in development. Set RESEND_API_KEY, WEB3FORMS_ACCESS_KEY, or CONTACT_WEBHOOK_URL for delivery.",
            });
        }

        if (!delivered) {
            return NextResponse.json(
                {
                    ok: false,
                    message:
                        "Message could not be delivered. Please email info@sierlab.com directly.",
                },
                { status: 503 }
            );
        }

        return NextResponse.json({ ok: true, delivered: true });
    } catch {
        return NextResponse.json(
            { ok: false, message: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
