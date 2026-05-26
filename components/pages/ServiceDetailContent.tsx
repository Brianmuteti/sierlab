import Link from "next/link";
import ServiceSidebar from "@/components/modern/ServiceSidebar";
import CtaBanner from "@/components/modern/CtaBanner";
import PageHero from "@/components/modern/PageHero";
import type { ServiceDetail } from "@/lib/site-data";
import { getRelatedServices } from "@/lib/site-data";
import { contactUrl } from "@/lib/contact-url";

export default function ServiceDetailContent({ service }: { service: ServiceDetail }) {
    const related = getRelatedServices(service.slug);

    return (
        <>
            <PageHero
                title={service.title}
                description={service.tagline}
                eyebrow="Services"
                breadcrumbTrail={[
                    { label: "Services", href: "/services" },
                    { label: service.title },
                ]}
            />

            <section className="sl-section sl-service-detail">
                <div className="sl-section__container">
                    <div className="sl-service-detail__highlights">
                        {service.highlights.map((h) => (
                            <div key={h.label} className="sl-service-highlight">
                                <span className="sl-service-highlight__value">{h.value}</span>
                                <span className="sl-service-highlight__label">{h.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="sl-page-layout">
                        <ServiceSidebar activeHref={service.slug} />

                        <article className="sl-page-main sl-service-detail__main">
                            <header className="sl-service-overview">
                                <div className="sl-service-overview__icon" aria-hidden>
                                    {service.icon}
                                </div>
                                <div className="sl-service-overview__body">
                                    {service.badge && (
                                        <span className="sl-card__badge">{service.badge}</span>
                                    )}
                                    <p className="sl-service-overview__subtitle">
                                        {service.subtitle}
                                    </p>
                                    <p className="sl-service-overview__desc">
                                        {service.description}
                                    </p>
                                    <div className="sl-service-overview__actions">
                                        <Link
                                            href={contactUrl({ service: service.title })}
                                            className="sl-btn sl-btn--primary"
                                        >
                                            Get a free quote
                                        </Link>
                                        <Link href="/pricing" className="sl-btn sl-btn--outline">
                                            View pricing
                                        </Link>
                                    </div>
                                </div>
                            </header>

                            <section className="sl-service-section">
                                <p className="sl-section__eyebrow">Capabilities</p>
                                <h2 className="sl-service-section__title">What&apos;s included</h2>
                                <div className="sl-feature-blocks sl-feature-blocks--service">
                                    {service.features.map((block) => (
                                        <div key={block.title} className="sl-feature-block">
                                            <div className="sl-feature-block__head">
                                                <span
                                                    className="sl-feature-block__icon"
                                                    aria-hidden
                                                >
                                                    {block.icon}
                                                </span>
                                                <h3>{block.title}</h3>
                                            </div>
                                            <ul>
                                                {block.items.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="sl-service-section">
                                <p className="sl-section__eyebrow">Ideal for</p>
                                <h2 className="sl-service-section__title">
                                    Built for teams like yours
                                </h2>
                                <ul className="sl-service-tags">
                                    {service.idealFor.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </section>

                            <section className="sl-service-section">
                                <p className="sl-section__eyebrow">Our process</p>
                                <h2 className="sl-service-section__title">
                                    How we deliver
                                </h2>
                                <ol className="sl-service-process">
                                    {service.process.map((step) => (
                                        <li key={step.step} className="sl-service-process__step">
                                            <span className="sl-service-process__num">
                                                {step.step}
                                            </span>
                                            <div>
                                                <h3>{step.title}</h3>
                                                <p>{step.text}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </section>

                            <section className="sl-service-section">
                                <p className="sl-section__eyebrow">Outcomes</p>
                                <h2 className="sl-service-section__title">
                                    Why choose Sierlab
                                </h2>
                                <ul className="sl-service-benefits">
                                    {service.benefits.map((b) => (
                                        <li key={b}>
                                            <span className="sl-service-benefits__check" aria-hidden>
                                                ✓
                                            </span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section className="sl-service-section">
                                <p className="sl-section__eyebrow">Tech stack</p>
                                <h2 className="sl-service-section__title">Tools we use</h2>
                                <ul className="sl-service-tech">
                                    {service.technologies.map((tech) => (
                                        <li key={tech}>{tech}</li>
                                    ))}
                                </ul>
                            </section>

                            <section className="sl-service-section">
                                <p className="sl-section__eyebrow">FAQ</p>
                                <h2 className="sl-service-section__title">Common questions</h2>
                                <dl className="sl-service-faq">
                                    {service.faqs.map((faq) => (
                                        <div key={faq.q} className="sl-service-faq__item">
                                            <dt>{faq.q}</dt>
                                            <dd>{faq.a}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </section>

                            <div className="sl-service-inline-cta">
                                <h3>Ready to start your {service.title.toLowerCase()} project?</h3>
                                <p>
                                    Tell us about your goals — we&apos;ll reply with a clear scope
                                    and timeline, usually within one business day.
                                </p>
                                <div className="sl-page-main__actions">
                                    <Link
                                        href={contactUrl({ service: service.title })}
                                        className="sl-btn sl-btn--primary"
                                    >
                                        Request a quote
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
                        </article>
                    </div>
                </div>
            </section>

            <section className="sl-section sl-section--alt">
                <div className="sl-section__container">
                    <p className="sl-section__eyebrow">Explore more</p>
                    <h2 className="sl-section__title">Related services</h2>
                    <div className="sl-cards sl-cards--3">
                        {related.map((s) => (
                            <article key={s.slug} className="sl-card sl-card--compact">
                                <div className="sl-card__icon">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p className="sl-card__subtitle">{s.subtitle}</p>
                                <p>{s.tagline}</p>
                                <Link href={s.slug} className="sl-btn sl-btn--outline">
                                    Learn more
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBanner />
        </>
    );
}
