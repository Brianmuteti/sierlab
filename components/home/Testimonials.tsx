const TESTIMONIALS = [
    {
        avatar: "👩‍💼",
        name: "Sarah M.",
        role: "Operations Director, Nairobi",
        quote:
            "Sierlab built our inventory system from scratch. Tracking stock and sales is now effortless — exactly what we needed.",
    },
    {
        avatar: "👨‍💻",
        name: "James K.",
        role: "Founder, E-Commerce Startup",
        quote:
            "Our online store went live in weeks with M-Pesa checkout integrated. Professional team, clear communication throughout.",
    },
    {
        avatar: "👩‍⚕️",
        name: "Dr. Grace W.",
        role: "Clinic Director, Westlands",
        quote:
            "They digitized our patient scheduling and records. No more paper chaos — it's been a game changer for our clinic.",
    },
];

export default function Testimonials() {
    return (
        <section className="sl-section sl-section--alt">
            <div className="sl-section__container">
                <p className="sl-section__eyebrow">Client Testimonials</p>
                <h2 className="sl-section__title">What Our Clients Say</h2>
                <p className="sl-section__desc">
                    Real results from real businesses across Kenya.
                </p>

                <div className="sl-testimonials">
                    {TESTIMONIALS.map((t) => (
                        <div key={t.name} className="sl-testimonial">
                            <div className="sl-testimonial__stars">★★★★★</div>
                            <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                            <div className="sl-testimonial__author">
                                <div className="sl-testimonial__avatar">
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="sl-testimonial__name">
                                        {t.name}
                                    </div>
                                    <div className="sl-testimonial__role">
                                        {t.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
