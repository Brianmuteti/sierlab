export function contactUrl(params?: {
    service?: string;
    message?: string;
}) {
    const q = new URLSearchParams();
    if (params?.service) q.set("service", params.service);
    if (params?.message) q.set("message", params.message);
    const query = q.toString();
    return query ? `/contact?${query}` : "/contact";
}
