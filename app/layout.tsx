import "../public/assets/css/vendors/bootstrap.min.css";
import "../public/assets/css/vendors/swiper-bundle.min.css";
import "../public/assets/fonts/bootstrap-icons/bootstrap-icons.min.css";
import "../public/assets/css/main.css";
import "../public/assets/css/style.css";
import "../public/assets/css/sierlab-modern.css";

import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { CookieConsentProvider } from "@/components/analytics/CookieConsentProvider";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/seo";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-body",
    display: "swap",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
    variable: "--font-display",
    display: "swap",
});

export const metadata: Metadata = {
    ...createPageMetadata({
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        path: "",
    }),
    metadataBase: new URL(SITE_URL),
    title: {
        default: `${SITE_NAME} | Custom Web Apps, E-Commerce & API Integrations in Kenya`,
        template: `%s | ${SITE_NAME}`,
    },
    icons: {
        icon: "/assets/imgs/template/favicon.svg",
        shortcut: "/assets/imgs/template/favicon.svg",
        apple: "/assets/imgs/template/favicon.svg",
    },
};

export const viewport: Viewport = {
    themeColor: "#f4f7fb",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`sierlab-modern ${inter.variable} ${spaceGrotesk.variable}`}>
                <JsonLd />
                <CookieConsentProvider>{children}</CookieConsentProvider>
            </body>
        </html>
    );
}
