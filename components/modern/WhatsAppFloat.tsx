"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { whatsappUrlForPath } from "@/lib/whatsapp-url";

export default function WhatsAppFloat() {
    const pathname = usePathname();
    const href = useMemo(() => whatsappUrlForPath(pathname), [pathname]);

    return (
        <a
            href={href}
            className="sl-whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Sierlab on WhatsApp"
            title="Chat on WhatsApp"
        >
            <i className="bi bi-whatsapp" aria-hidden />
            <span className="sl-whatsapp-float__label">WhatsApp</span>
        </a>
    );
}
