import Link from "next/link";
import PageHero from "@/components/modern/PageHero";
import CtaBanner from "@/components/modern/CtaBanner";
import { CAREER_JOBS } from "@/lib/site-data";
import { CONTACT_EMAIL } from "@/lib/site-config";

export default function CareerContent() {
    return (
        <>
            <PageHero
                title="Careers"
                description="Join our Nairobi team and build digital products that matter across Kenya and Africa."
            />
            <section className="sl-section">
                <div className="sl-section__container">
                    <p className="sl-section__eyebrow">Why Sierlab</p>
                    <h2 className="sl-section__title">Grow with a product-focused team</h2>
                    <p className="sl-section__desc">
                        We&apos;re a small, ambitious studio working on custom apps, e-commerce,
                        and integrations for real businesses — not slide decks.
                    </p>
                    <div className="sl-values-grid">
                        {[
                            {
                                icon: "🚀",
                                title: "Real projects",
                                text: "Ship production code for clients across retail, health, and fintech.",
                            },
                            {
                                icon: "🌍",
                                title: "Hybrid friendly",
                                text: "Collaborate from our Roysambu office or remotely with clear rituals.",
                            },
                            {
                                icon: "📚",
                                title: "Learn constantly",
                                text: "Modern stack, code reviews, and room to specialize in what you love.",
                            },
                        ].map((item) => (
                            <div key={item.title} className="sl-card">
                                <div className="sl-card__icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="sl-section sl-section--alt">
                <div className="sl-section__container">
                    <p className="sl-section__eyebrow">Open roles</p>
                    <h2 className="sl-section__title">Current opportunities</h2>
                    <div className="sl-jobs-list">
                        {CAREER_JOBS.map((job) => (
                            <article key={job.title} className="sl-job-card">
                                <div>
                                    <h3>{job.title}</h3>
                                    <p className="sl-job-card__type">{job.type}</p>
                                    <p>{job.description}</p>
                                </div>
                                <a
                                    href={`mailto:${CONTACT_EMAIL}?subject=Application: ${encodeURIComponent(job.title)}`}
                                    className="sl-btn sl-btn--outline"
                                >
                                    Apply now
                                </a>
                            </article>
                        ))}
                    </div>
                    <p className="sl-section__desc mt-4">
                        Don&apos;t see your role? Send your CV to{" "}
                        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> — we&apos;re
                        always open to meeting talented people.
                    </p>
                </div>
            </section>

            <CtaBanner />
        </>
    );
}
