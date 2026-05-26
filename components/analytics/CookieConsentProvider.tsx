"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";
import Link from "next/link";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import {
    type CookieConsentValue,
    getStoredConsent,
    setStoredConsent,
} from "@/lib/cookie-consent";

interface CookieConsentContextValue {
    consent: CookieConsentValue | null;
    accept: () => void;
    decline: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function useCookieConsent() {
    const ctx = useContext(CookieConsentContext);
    if (!ctx) {
        throw new Error("useCookieConsent must be used within CookieConsentProvider");
    }
    return ctx;
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
    const [consent, setConsent] = useState<CookieConsentValue | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setConsent(getStoredConsent());
        setMounted(true);

        const onChange = (e: Event) => {
            const detail = (e as CustomEvent<CookieConsentValue>).detail;
            setConsent(detail);
        };
        window.addEventListener("cookie-consent-change", onChange);
        return () => window.removeEventListener("cookie-consent-change", onChange);
    }, []);

    const accept = useCallback(() => {
        setStoredConsent("accepted");
        setConsent("accepted");
    }, []);

    const decline = useCallback(() => {
        setStoredConsent("declined");
        setConsent("declined");
    }, []);

    const showBanner = mounted && consent === null;
    const gaEnabled = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

    return (
        <CookieConsentContext.Provider value={{ consent, accept, decline }}>
            {children}
            {consent === "accepted" && gaEnabled ? <GoogleAnalytics /> : null}
            {showBanner && (
                <div
                    className="sl-cookie-banner"
                    role="dialog"
                    aria-labelledby="cookie-banner-title"
                    aria-live="polite"
                >
                    <div className="sl-cookie-banner__inner">
                        <p id="cookie-banner-title" className="sl-cookie-banner__title">
                            We use cookies
                        </p>
                        <p className="sl-cookie-banner__text">
                            We use optional analytics cookies to understand how visitors use
                            our site. You can accept or decline — essential site features
                            work either way.{" "}
                            <Link href="/privacy">Privacy policy</Link>
                        </p>
                        <div className="sl-cookie-banner__actions">
                            <button
                                type="button"
                                className="sl-btn sl-btn--outline"
                                onClick={decline}
                            >
                                Decline
                            </button>
                            <button
                                type="button"
                                className="sl-btn sl-btn--primary"
                                onClick={accept}
                            >
                                Accept analytics
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </CookieConsentContext.Provider>
    );
}
