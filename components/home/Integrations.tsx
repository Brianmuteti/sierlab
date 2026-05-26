import Link from "next/link";

const INTEGRATIONS = [
    {
        icon: "💚",
        title: "M-Pesa Integration",
        desc: "STK Push, C2B, B2C, paybill, till number, and transaction callbacks — seamless out of the box.",
    },
    {
        icon: "🏦",
        title: "Bank Payment APIs",
        desc: "KCB, Equity, Co-op, NCBA, Stanbic and more for real-time bank-to-system payments.",
    },
    {
        icon: "💳",
        title: "Card Payments",
        desc: "Visa, Mastercard via Stripe, Flutterwave with 3D Secure and recurring billing support.",
    },
    {
        icon: "🌍",
        title: "PayPal Integration",
        desc: "Accept international payments with checkout, IPN webhooks, and multi-currency support.",
    },
    {
        icon: "⚡",
        title: "Stripe & More",
        desc: "Stripe, Twilio, HubSpot, Slack, Zapier — we connect your stack to any modern API.",
    },
    {
        icon: "🔗",
        title: "Custom API Integration",
        desc: "REST & SOAP APIs, webhooks, ERP/CRM connectors, and full API documentation.",
    },
];

export default function Integrations() {
    return (
        <section className="sl-section sl-section--alt">
            <div className="sl-section__container">
                <p className="sl-section__eyebrow">Payment & API Integrations</p>
                <h2 className="sl-section__title">What We Integrate</h2>
                <p className="sl-section__desc">
                    We connect your software to any payment gateway or third-party
                    API — fast and reliably.
                </p>

                <div className="sl-integration-grid">
                    {INTEGRATIONS.map((item) => (
                        <div key={item.title} className="sl-integration-card">
                            <span style={{ fontSize: "1.75rem" }}>{item.icon}</span>
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-4">
                    <Link href="/integrations" className="sl-btn sl-btn--primary">
                        View All Integrations
                    </Link>
                </div>
            </div>
        </section>
    );
}
