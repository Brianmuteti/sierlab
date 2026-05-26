"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export interface ContactFormProps {
    source?: string;
    compact?: boolean;
    showCompany?: boolean;
    submitLabel?: string;
    className?: string;
    defaultService?: string;
}

export default function ContactForm({
    source = "website",
    compact = false,
    showCompany = true,
    submitLabel = "Send message",
    className = "sl-form",
    defaultService = "",
}: ContactFormProps) {
    const searchParams = useSearchParams();
    const serviceParam = searchParams.get("service") ?? "";
    const nameParam = searchParams.get("name") ?? "";
    const emailParam = searchParams.get("email") ?? "";
    const messageParam = searchParams.get("message") ?? "";

    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        setForm((prev) => ({
            ...prev,
            name: nameParam || prev.name,
            email: emailParam || prev.email,
            service: serviceParam || defaultService || prev.service,
            message: messageParam || prev.message,
        }));
    }, [nameParam, emailParam, serviceParam, messageParam, defaultService]);

    const validate = () => {
        const next: Record<string, string> = {};
        if (!form.name.trim()) next.name = "Name is required.";
        if (!form.email.trim()) next.email = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            next.email = "Invalid email.";
        if (!form.message.trim()) next.message = "Message is required.";
        return next;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const next = validate();
        if (Object.keys(next).length) {
            setErrors(next);
            return;
        }

        setSubmitting(true);
        setSuccess(null);
        setErrors({});

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    source,
                }),
            });
            const data = await res.json();

            if (!res.ok || !data.ok) {
                setErrors({
                    form:
                        data.message ??
                        "Could not send your message. Try WhatsApp or email us directly.",
                });
                return;
            }

            setSuccess(
                data.delivered === false
                    ? "Thanks! Your message was received — we'll follow up within 24 hours."
                    : "Thank you! We'll get back to you within 24 hours."
            );
            setForm({
                name: "",
                email: "",
                company: "",
                service: serviceParam,
                message: "",
            });
        } catch {
            setErrors({
                form: "Network error. Please try again or contact us on WhatsApp.",
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div>
            {success && <p className="sl-form-success">{success}</p>}
            {errors.form && <p className="sl-form-error">{errors.form}</p>}
            <form className={className} onSubmit={handleSubmit} noValidate>
                <label htmlFor={`cf-name-${source}`}>Full name *</label>
                <input
                    id={`cf-name-${source}`}
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {errors.name && <span className="sl-form-error">{errors.name}</span>}

                <label htmlFor={`cf-email-${source}`}>Email *</label>
                <input
                    id={`cf-email-${source}`}
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                {errors.email && <span className="sl-form-error">{errors.email}</span>}

                {showCompany && (
                    <>
                        <label htmlFor={`cf-company-${source}`}>Company</label>
                        <input
                            id={`cf-company-${source}`}
                            name="company"
                            autoComplete="organization"
                            value={form.company}
                            onChange={(e) =>
                                setForm({ ...form, company: e.target.value })
                            }
                        />
                    </>
                )}

                {!compact && (
                    <>
                        <label htmlFor={`cf-service-${source}`}>Service interest</label>
                        <input
                            id={`cf-service-${source}`}
                            name="service"
                            placeholder="e.g. E-Commerce, API Integration"
                            value={form.service}
                            onChange={(e) =>
                                setForm({ ...form, service: e.target.value })
                            }
                        />
                    </>
                )}

                <label htmlFor={`cf-message-${source}`}>Message *</label>
                <textarea
                    id={`cf-message-${source}`}
                    name="message"
                    rows={compact ? 3 : 5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                {errors.message && (
                    <span className="sl-form-error">{errors.message}</span>
                )}

                <button
                    type="submit"
                    className="sl-btn sl-btn--primary w-100 justify-content-center"
                    disabled={submitting}
                >
                    {submitting ? "Sending…" : submitLabel}
                </button>
            </form>
        </div>
    );
}
