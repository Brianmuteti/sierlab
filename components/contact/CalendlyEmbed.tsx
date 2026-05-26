"use client";

import Script from "next/script";
import { useState } from "react";
import { CALENDLY_URL } from "@/lib/site-config";

export default function CalendlyEmbed() {
    const [scriptReady, setScriptReady] = useState(false);

    if (!CALENDLY_URL) {
        return (
            <div className="sl-calendly-fallback">
                <p className="sl-section__desc">
                    Online booking is not configured yet. Email us at{" "}
                    <a href="mailto:info@sierlab.com">info@sierlab.com</a> or message on
                    WhatsApp to schedule a discovery call.
                </p>
            </div>
        );
    }

    return (
        <div className="sl-calendly-wrap">
            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
                onLoad={() => setScriptReady(true)}
            />
            <div
                className="calendly-inline-widget"
                data-url={CALENDLY_URL}
                style={{ minWidth: "280px", height: "700px", width: "100%" }}
            />
            {!scriptReady && (
                <p className="sl-calendly-loading">Loading scheduler…</p>
            )}
        </div>
    );
}
