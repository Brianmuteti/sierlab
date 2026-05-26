import Link from "next/link";
import PageHero from "@/components/modern/PageHero";
import CtaBanner from "@/components/modern/CtaBanner";
import { CASE_STUDIES } from "@/lib/site-data";

export default function WorkContent() {
    return (
        <>
            <PageHero
                title="Our Work"
                description="Selected projects — challenges solved and measurable outcomes for our clients."
            />
            <section className="sl-section">
                <div className="sl-section__container">
                    <div className="sl-case-studies">
                        {CASE_STUDIES.map((project) => (
                            <article
                                key={project.slug}
                                className="sl-case-study"
                                id={project.slug}
                            >
                                <div className="sl-case-study__header">
                                    <span className="sl-case-study__icon" aria-hidden>
                                        {project.icon}
                                    </span>
                                    <div>
                                        <p className="sl-section__eyebrow">
                                            {project.industry} · {project.client}
                                        </p>
                                        <h2 className="sl-case-study__title">{project.title}</h2>
                                        <p className="sl-case-study__summary">{project.summary}</p>
                                    </div>
                                </div>
                                <div className="sl-case-study__grid">
                                    <div>
                                        <h3>The challenge</h3>
                                        <p>{project.challenge}</p>
                                    </div>
                                    <div>
                                        <h3>Our solution</h3>
                                        <p>{project.solution}</p>
                                    </div>
                                </div>
                                <div className="sl-case-study__results">
                                    <h3>Results</h3>
                                    <ul>
                                        {project.results.map((r) => (
                                            <li key={r}>{r}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="sl-case-study__footer">
                                    <div className="sl-service-tags">
                                        {project.services.map((s) => (
                                            <li key={s}>{s}</li>
                                        ))}
                                    </div>
                                    <Link
                                        href={`/contact?service=${encodeURIComponent(project.title)}`}
                                        className="sl-btn sl-btn--outline"
                                    >
                                        Start a similar project
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <CtaBanner />
        </>
    );
}
