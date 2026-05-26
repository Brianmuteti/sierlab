export type CookieConsentValue = "accepted" | "declined";

export const COOKIE_CONSENT_KEY = "sierlab-cookie-consent";

export function getStoredConsent(): CookieConsentValue | null {
    if (typeof window === "undefined") return null;
    const value = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (value === "accepted" || value === "declined") return value;
    return null;
}

export function setStoredConsent(value: CookieConsentValue) {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: value }));
}

export function hasAnalyticsConsent(): boolean {
    return getStoredConsent() === "accepted";
}
