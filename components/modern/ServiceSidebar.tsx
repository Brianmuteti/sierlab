"use client";

import Link from "next/link";
import { Suspense } from "react";
import ContactForm from "@/components/forms/ContactForm";
import { SERVICES_NAV } from "@/lib/site-data";
import { SERVICE_DETAILS, type ServiceSlug } from "@/lib/site-data";

export default function ServiceSidebar({ activeHref }: { activeHref: string }) {
    const activeService = SERVICE_DETAILS[activeHref as ServiceSlug];

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
                <Suspense fallback={<p className="sl-section__desc">Loading…</p>}>
                    <ContactForm
                        source="service-sidebar"
                        compact
                        showCompany={false}
                        submitLabel="Send"
                        defaultService={activeService?.title}
                    />
                </Suspense>
            </div>

            <div className="sl-sidebar__cta">
                <p>Need help choosing a service?</p>
                <Link
                    href={
                        activeService
                            ? `/contact?service=${encodeURIComponent(activeService.title)}`
                            : "/contact"
                    }
                    className="sl-btn sl-btn--outline w-100 justify-content-center"
                >
                    Contact us
                </Link>
            </div>
        </aside>
    );
}
