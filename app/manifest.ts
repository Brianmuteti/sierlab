import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: SITE_NAME,
        short_name: SITE_NAME,
        description:
            "Custom web apps, e-commerce, and API integrations for Kenyan businesses.",
        start_url: "/",
        display: "standalone",
        background_color: "#f4f7fb",
        theme_color: "#0099d6",
        icons: [
            {
                src: "/assets/imgs/template/favicon.svg",
                sizes: "any",
                type: "image/svg+xml",
            },
        ],
    };
}
