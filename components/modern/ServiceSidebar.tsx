"use client";

import Link from "next/link";
import { useState } from "react";
import { SERVICES_NAV } from "@/lib/site-data";

export default function ServiceSidebar({ activeHref }: { activeHref: string }) {
    const [miniForm, setMiniForm] = useState({ name: "", email: "", message: "" });

    return (
        <aside className="sl-sidebar">
            <div className="sl-sidebar__block">
                <h6>Our Services</h6>
                <nav>
                    {SERVICES_NAV.map((s) => (
                        <Link
                            key={s.href}
                            href={s.href}
                            className={
                                s.href === activeHref
                                    ? "sl-sidebar__link is-active"
                                    : "sl-sidebar__link"
                            }
                        >
                            {s.name}
                            <span aria-hidden>→</span>
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="sl-sidebar__block">
                <h6>Quick Message</h6>
                <form
                    className="sl-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        window.location.href = `/contact?name=${encodeURIComponent(miniForm.name)}&email=${encodeURIComponent(miniForm.email)}&message=${encodeURIComponent(miniForm.message)}`;
                    }}
                >
                    <input
                        type="text"
                        placeholder="Your name *"
                        required
                        value={miniForm.name}
                        onChange={(e) =>
                            setMiniForm({ ...miniForm, name: e.target.value })
                        }
                    />
                    <input
                        type="email"
                        placeholder="Email *"
                        required
                        value={miniForm.email}
                        onChange={(e) =>
                            setMiniForm({ ...miniForm, email: e.target.value })
                        }
                    />
                    <textarea
                        rows={3}
                        placeholder="How can we help?"
                        value={miniForm.message}
                        onChange={(e) =>
                            setMiniForm({ ...miniForm, message: e.target.value })
                        }
                    />
                    <button type="submit" className="sl-btn sl-btn--primary w-100 justify-content-center">
                        Send
                    </button>
                </form>
            </div>

            <div className="sl-sidebar__cta">
                <p>Need help choosing a service?</p>
                <Link href="/contact" className="sl-btn sl-btn--outline w-100 justify-content-center">
                    Contact us
                </Link>
            </div>
        </aside>
    );
}
