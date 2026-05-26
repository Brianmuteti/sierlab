import Link from "next/link";

export default function ContactCTA() {
    return (
        <section className="sl-section" id="contact">
            <div className="sl-section__container">
                <p className="sl-section__eyebrow">Talk to Us Today</p>
                <h2 className="sl-section__title">
                    Ready to Transform Your Business?
                </h2>
                <p className="sl-section__desc">
                    Fill out the form below or contact us directly. We&apos;ll get
                    back to you within 24 hours.
                </p>

                <div className="sl-cta">
                    <div className="sl-cta__grid">
                        <div>
                            <h3 className="sl-cta__form-title">
                                Send Us a Message
                            </h3>
                            <form
                                className="sl-form"
                                action="/contact"
                                method="get"
                            >
                                <label htmlFor="name">Your Name *</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                />
                                <label htmlFor="email">Email *</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="you@company.com"
                                />
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    placeholder="Tell us about your project..."
                                />
                                <button
                                    type="submit"
                                    className="sl-btn sl-btn--primary"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div className="sl-contact-info">
                            <a
                                href="https://wa.me/254731824251"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="sl-contact-item"
                            >
                                <span className="sl-contact-item__icon">💬</span>
                                <div>
                                    <strong>WhatsApp</strong>
                                    <span>+254 731 824 251 — Chat instantly</span>
                                </div>
                            </a>
                            <a
                                href="mailto:info@sierlab.com"
                                className="sl-contact-item"
                            >
                                <span className="sl-contact-item__icon">✉️</span>
                                <div>
                                    <strong>Email</strong>
                                    <span>info@sierlab.com</span>
                                </div>
                            </a>
                            <div className="sl-contact-item">
                                <span className="sl-contact-item__icon">📍</span>
                                <div>
                                    <strong>Location</strong>
                                    <span>
                                        Lumumba Drive, Roysambu — Nairobi, Kenya 🇰🇪
                                    </span>
                                </div>
                            </div>
                            <div className="sl-contact-item">
                                <span className="sl-contact-item__icon">🕐</span>
                                <div>
                                    <strong>Business Hours</strong>
                                    <span>Mon – Fri, 8AM – 6PM</span>
                                </div>
                            </div>
                            <Link
                                href="/contact"
                                className="sl-btn sl-btn--outline w-100 justify-content-center"
                            >
                                Full contact page →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
