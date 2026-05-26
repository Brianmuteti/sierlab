import Link from "next/link";
import PageHero from "@/components/modern/PageHero";
import CtaBanner from "@/components/modern/CtaBanner";
import { SERVICE_DETAILS } from "@/lib/site-data";

const SERVICE_LIST = Object.values(SERVICE_DETAILS);

export default function ServicesContent() {
    return (
        <>
            <PageHero
                title="Our Services"
                description="Innovative, results-driven solutions tailored to help your business thrive — from development to security."
            />
            <section className="sl-section">
                <div className="sl-section__container">
                    <div className="sl-services-intro">
                        <p className="sl-section__eyebrow">What we offer</p>
                        <h2 className="sl-section__title">End-to-end digital solutions</h2>
                        <p className="sl-section__desc">
                            From concept to deployment, we cover every aspect of your
                            digital journey.
                        </p>
                    </div>
                    <div className="sl-cards sl-cards--3">
                        {SERVICE_LIST.map((s) => (
                            <article key={s.slug} className="sl-card">
                                <h3>{s.title}</h3>
                                <p className="sl-card__subtitle">{s.tagline}</p>
                                <p>{s.description}</p>
                                <ul className="sl-card__features">
                                    {s.benefits.map((b) => (
                                        <li key={b}>{b}</li>
                                    ))}
                                </ul>
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
