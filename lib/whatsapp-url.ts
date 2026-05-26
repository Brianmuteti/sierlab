import { WHATSAPP_URL } from "@/lib/site-config";
import { SERVICE_DETAILS, type ServiceSlug } from "@/lib/site-data";

const DEFAULT_MESSAGE = "Hi Sierlab, I'd like to learn more about your services.";

const PAGE_MESSAGES: Record<string, string> = {
    "/": "Hi Sierlab, I'd like to learn about your digital solutions.",
    "/contact": "Hi Sierlab, I'd like to get in touch about a project.",
    "/services": "Hi Sierlab, I'd like to discuss which service fits my business.",
    "/pricing": "Hi Sierlab, I'd like a quote for your services.",
    "/work": "Hi Sierlab, I saw your work and would like to start a similar project.",
    "/about": "Hi Sierlab, I'd like to know more about your team and process.",
    "/integrations": "Hi Sierlab, I need help with API or payment integrations.",
    "/blog": "Hi Sierlab, I have a question about your services.",
    "/career": "Hi Sierlab, I'm interested in career opportunities with you.",
};

export function whatsappMessageForPath(pathname: string): string {
    const service = SERVICE_DETAILS[pathname as ServiceSlug];
    if (service) {
        return `Hi Sierlab, I'm interested in ${service.title}.`;
    }
    return PAGE_MESSAGES[pathname] ?? DEFAULT_MESSAGE;
}

export function whatsappUrlForPath(pathname: string): string {
    const base = WHATSAPP_URL.split("?")[0];
    const text = whatsappMessageForPath(pathname);
    return `${base}?text=${encodeURIComponent(text)}`;
}
