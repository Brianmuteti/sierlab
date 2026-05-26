import { TESTIMONIALS } from "@/lib/site-data";

export default function Testimonials() {
    return (
        <section className="sl-section sl-section--alt">
            <div className="sl-section__container">
                <p className="sl-section__eyebrow">Client Testimonials</p>
                <h2 className="sl-section__title">What Our Clients Say</h2>
                <p className="sl-section__desc">
                    Real results from businesses across Kenya.
                </p>

                <div className="sl-testimonials">
                    {TESTIMONIALS.map((t) => (
                        <div key={t.name} className="sl-testimonial">
                            <div className="sl-testimonial__stars">★★★★★</div>
                            <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                            <div className="sl-testimonial__author">
                                <span className="sl-testimonial__avatar" aria-hidden>
                                    {t.initials}
                                </span>
                                <div>
                                    <strong>{t.name}</strong>
                                    <span>{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
