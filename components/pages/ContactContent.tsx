import Link from "next/link";
import { Suspense } from "react";
import PageHero from "@/components/modern/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import CalendlyEmbed from "@/components/contact/CalendlyEmbed";
import { CALENDLY_URL, CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/site-config";

function ContactFormFallback() {
    return <p className="sl-section__desc">Loading form…</p>;
}

export default function ContactContent() {
    return (
        <>
            <PageHero
                title="Contact Us"
                description="Book a call, send a message, or reach us on WhatsApp — we respond within 24 hours."
            />

            <section className="sl-section sl-section--alt" id="book">
                <div className="sl-section__container">
                    <p className="sl-section__eyebrow">Schedule</p>
                    <h2 className="sl-section__title">Book a discovery call</h2>
                    <p className="sl-section__desc">
                        Pick a time that works for you. We&apos;ll discuss your goals,
                        timeline, and how Sierlab can help — no obligation.
                    </p>
                    <CalendlyEmbed />
                    {!CALENDLY_URL && (
                        <div className="d-flex flex-wrap gap-3 mt-3">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="sl-btn sl-btn--whatsapp"
                            >
                                Chat on WhatsApp
                            </a>
                            <Link href={`mailto:${CONTACT_EMAIL}`} className="sl-btn sl-btn--outline">
                                Email us
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            <section className="sl-section" id="message">
                <div className="sl-section__container">
                    <p className="sl-section__eyebrow">Message</p>
                    <h2 className="sl-section__title">Send us a note</h2>
                    <div className="sl-cta">
                        <div className="sl-cta__grid">
                            <div>
                                <h3 className="sl-cta__form-title">Contact form</h3>
                                <Suspense fallback={<ContactFormFallback />}>
                                    <ContactForm source="contact-page" />
                                </Suspense>
                            </div>
                            <div className="sl-contact-info">
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="sl-contact-item"
                                >
                                    <span className="sl-contact-item__icon">💬</span>
                                    <div>
                                        <strong>WhatsApp</strong>
                                        <span>+254 731 824 251</span>
                                    </div>
                                </a>
                                <a
                                    href={`mailto:${CONTACT_EMAIL}`}
                                    className="sl-contact-item"
                                >
                                    <span className="sl-contact-item__icon">✉️</span>
                                    <div>
                                        <strong>Email</strong>
                                        <span>{CONTACT_EMAIL}</span>
                                    </div>
                                </a>
                                <div className="sl-contact-item">
                                    <span className="sl-contact-item__icon">📍</span>
                                    <div>
                                        <strong>Office</strong>
                                        <span>
                                            Lumumba Drive, Roysambu, Nairobi 🇰🇪
                                        </span>
                                    </div>
                                </div>
                                <div className="sl-contact-item">
                                    <span className="sl-contact-item__icon">🕐</span>
                                    <div>
                                        <strong>Hours</strong>
                                        <span>Mon – Fri, 8AM – 6PM EAT</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
