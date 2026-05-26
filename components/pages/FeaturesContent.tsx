import Link from "next/link";
import PageHero from "@/components/modern/PageHero";
import CtaBanner from "@/components/modern/CtaBanner";
import { PLATFORM_FEATURES } from "@/lib/site-data";

export default function FeaturesContent() {
    return (
        <>
            <PageHero
                title="Platform Features"
                description="What you get when you build with Sierlab — from performance to payments."
            />
            <section className="sl-section">
                <div className="sl-section__container">
                    <p className="sl-section__eyebrow">Capabilities</p>
                    <h2 className="sl-section__title">Built for Kenyan businesses</h2>
                    <p className="sl-section__desc">
                        Every engagement includes engineering practices and product thinking
                        that scale with your growth.
                    </p>
                    <div className="sl-cards sl-cards--3">
                        {PLATFORM_FEATURES.map((f) => (
                            <article key={f.title} className="sl-card">
                                <div className="sl-card__icon">{f.icon}</div>
                                <h3>{f.title}</h3>
                                <p>{f.text}</p>
                            </article>
                        ))}
                    </div>
                    <div className="sl-banner mt-5">
                        <h3>See it in action</h3>
                        <p>
                            Explore our case studies and service pages to see how these
                            features come together on real projects.
                        </p>
                        <div className="d-flex flex-wrap gap-3 justify-content-center">
                            <Link href="/work" className="sl-btn sl-btn--primary">
                                View our work
                            </Link>
                            <Link href="/services" className="sl-btn sl-btn--outline">
                                All services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <CtaBanner />
        </>
    );
}
