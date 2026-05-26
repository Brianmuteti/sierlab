import Link from "next/link";

const SERVICES = [
    {
        icon: "💻",
        badge: "Core Service",
        title: "Custom Web Applications",
        subtitle: "Management & Business Systems",
        desc: "Reliable MIS and business systems built with React, Next.js, and Node.js — crafted around your workflow.",
        features: [
            "HR & payroll systems",
            "Inventory management",
            "Multi-branch support",
            "Real-time dashboards",
            "Role-based access",
            "API-ready architecture",
        ],
        href: "/custom-web-applications",
    },
    {
        icon: "🛒",
        badge: "Popular",
        title: "E-Commerce Development",
        subtitle: "Online Store Platforms",
        desc: "Launch your online store with product management, order tracking, and integrated payment gateways.",
        features: [
            "Custom storefront design",
            "M-Pesa & card checkout",
            "Order & delivery tracking",
            "Product catalog",
            "SEO-optimized",
            "Mobile responsive",
        ],
        href: "/ecommerce-development",
    },
    {
        icon: "🎨",
        badge: "Design",
        title: "Website & Landing Pages",
        subtitle: "High-Performance Sites",
        desc: "Beautiful, fast websites and landing pages that convert visitors into customers.",
        features: [
            "Modern UI/UX design",
            "Mobile-first layouts",
            "Fast load times",
            "CMS integration",
            "Analytics setup",
            "Brand-aligned visuals",
        ],
        href: "/website-design",
    },
    {
        icon: "🔗",
        badge: "Integrations",
        title: "API Integration Services",
        subtitle: "Payments & Third-Party APIs",
        desc: "Connect your software to M-Pesa, banks, Stripe, and any REST API — fast and reliably.",
        features: [
            "M-Pesa Daraja API",
            "Stripe & PayPal",
            "Bank payment APIs",
            "Webhook development",
            "Third-party connectors",
            "Full documentation",
        ],
        href: "/api-integration-services",
    },
    {
        icon: "📈",
        title: "SEO Optimization",
        subtitle: "Grow Your Visibility",
        desc: "Technical SEO, content strategy, and performance tuning to rank higher and attract more leads.",
        features: [
            "Technical SEO audit",
            "On-page optimization",
            "Core Web Vitals",
            "Local SEO (Kenya)",
            "Analytics & reporting",
            "Content strategy",
        ],
        href: "/seo-optimization",
    },
    {
        icon: "🛡️",
        title: "Cybersecurity Consulting",
        subtitle: "Protect Your Business",
        desc: "Security assessments, compliance guidance, and IT consultancy to keep your systems safe.",
        features: [
            "Security assessments",
            "Penetration testing",
            "Policy & compliance",
            "Incident response",
            "Staff training",
            "Ongoing monitoring",
        ],
        href: "/cybersecurity-consulting",
    },
];

export default function Services() {
    return (
        <section className="sl-section" id="services">
            <div className="sl-section__container">
                <p className="sl-section__eyebrow">Our Services</p>
                <h2 className="sl-section__title">Solutions We Build</h2>
                <p className="sl-section__desc">
                    Battle-tested services for Kenyan and African businesses —
                    from concept to deployment in weeks, not months.
                </p>

                <div className="sl-cards sl-cards--3">
                    {SERVICES.map((s) => (
                        <article key={s.title} className="sl-card">
                            {s.badge && (
                                <span className="sl-card__badge">{s.badge}</span>
                            )}
                            <div className="sl-card__icon">{s.icon}</div>
                            <h3>{s.title}</h3>
                            <p className="sl-card__subtitle">{s.subtitle}</p>
                            <p>{s.desc}</p>
                            <ul className="sl-card__features">
                                {s.features.map((f) => (
                                    <li key={f}>{f}</li>
                                ))}
                            </ul>
                            <Link href={s.href} className="sl-btn sl-btn--outline">
                                Learn more
                            </Link>
                        </article>
                    ))}
                </div>

                <div className="sl-banner">
                    <h3>Need a Custom Solution?</h3>
                    <p>
                        Don&apos;t see exactly what you need? We build bespoke
                        software tailored to your unique requirements.
                    </p>
                    <div className="d-flex flex-wrap gap-3 justify-content-center">
                        <Link href="/contact" className="sl-btn sl-btn--primary">
                            Request Custom Build
                        </Link>
                        <a
                            href="https://wa.me/254731824251"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sl-btn sl-btn--whatsapp"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
