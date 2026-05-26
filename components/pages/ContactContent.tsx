"use client";

import { useState } from "react";
import PageHero from "@/components/modern/PageHero";

export default function ContactContent() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const next: Record<string, string> = {};
        if (!form.name.trim()) next.name = "Name is required.";
        if (!form.email.trim()) next.email = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            next.email = "Invalid email.";
        if (!form.message.trim()) next.message = "Message is required.";
        return next;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const next = validate();
        if (Object.keys(next).length) {
            setErrors(next);
            return;
        }
        setSubmitting(true);
        setSuccess(null);
        try {
            setSuccess("Thank you! We'll get back to you within 24 hours.");
            setForm({ name: "", email: "", company: "", message: "" });
            setErrors({});
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <PageHero
                title="Contact Us"
                description="Get in touch — we'll respond within 24 hours."
            />
            <section className="sl-section">
                <div className="sl-section__container">
                    <div className="sl-cta">
                        <div className="sl-cta__grid">
                            <div>
                                <h3 className="sl-cta__form-title">Send a message</h3>
                                {success && (
                                    <p className="sl-form-success">{success}</p>
                                )}
                                <form className="sl-form" onSubmit={handleSubmit}>
                                    <label htmlFor="c-name">Full name *</label>
                                    <input
                                        id="c-name"
                                        name="name"
                                        value={form.name}
                                        onChange={(e) =>
                                            setForm({ ...form, name: e.target.value })
                                        }
                                    />
                                    {errors.name && (
                                        <span className="sl-form-error">{errors.name}</span>
                                    )}
                                    <label htmlFor="c-email">Email *</label>
                                    <input
                                        id="c-email"
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={(e) =>
                                            setForm({ ...form, email: e.target.value })
                                        }
                                    />
                                    {errors.email && (
                                        <span className="sl-form-error">{errors.email}</span>
                                    )}
                                    <label htmlFor="c-company">Company</label>
                                    <input
                                        id="c-company"
                                        name="company"
                                        value={form.company}
                                        onChange={(e) =>
                                            setForm({ ...form, company: e.target.value })
                                        }
                                    />
                                    <label htmlFor="c-message">Message *</label>
                                    <textarea
                                        id="c-message"
                                        name="message"
                                        rows={5}
                                        value={form.message}
                                        onChange={(e) =>
                                            setForm({ ...form, message: e.target.value })
                                        }
                                    />
                                    {errors.message && (
                                        <span className="sl-form-error">{errors.message}</span>
                                    )}
                                    <button
                                        type="submit"
                                        className="sl-btn sl-btn--primary"
                                        disabled={submitting}
                                    >
                                        {submitting ? "Sending…" : "Send message"}
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
                                        <span>+254 731 824 251</span>
                                    </div>
                                </a>
                                <a href="mailto:info@sierlab.com" className="sl-contact-item">
                                    <span className="sl-contact-item__icon">✉️</span>
                                    <div>
                                        <strong>Email</strong>
                                        <span>info@sierlab.com</span>
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
                                        <span>Mon – Fri, 8AM – 6PM</span>
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
