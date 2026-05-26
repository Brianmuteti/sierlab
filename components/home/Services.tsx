import Link from "next/link";
import { getServicesForHome } from "@/lib/site-data";

export default function Services() {
    const services = getServicesForHome();

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
                    {services.map((s) => (
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
