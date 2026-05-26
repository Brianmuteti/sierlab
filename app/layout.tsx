import "../public/assets/css/vendors/bootstrap.min.css";
import "../public/assets/css/vendors/swiper-bundle.min.css";
import "../public/assets/css/vendors/aos.css";
import "../public/assets/css/vendors/carouselTicker.css";
import "../public/assets/css/vendors/odometer.css";
import "../public/assets/css/vendors/magnific-popup.css";
import "../public/assets/fonts/bootstrap-icons/bootstrap-icons.min.css";
import "../public/assets/fonts/boxicons/boxicons.min.css";
import "../public/assets/fonts/remixicon/remixicon.css";
import "../public/assets/fonts/fontawesome/fontawesome.min.css";
import "../public/assets/fonts/fontawesome/solid.min.css";
import "../public/assets/fonts/fontawesome/regular.min.css";
import "../public/assets/css/main.css";
import "../public/assets/css/style.css";
import "../public/assets/css/sierlab-modern.css";

import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

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

// const rubik = Rubik({
//     weight: ["300", "400", "500", "700"],
//     subsets: ["latin"],
//     variable: "--tc-body-font-family",
//     display: "swap",
// });

export const metadata: Metadata = {
    title: "Sierlab | Custom Web Apps, E-Commerce & API Integrations in Kenya",
    description:
        "Sierlab builds custom web applications, e-commerce platforms, API integrations, and digital solutions for Kenyan and African businesses.",
    icons: {
        icon: "/assets/imgs/template/favicon.svg",
        shortcut: "/assets/imgs/template/favicon.svg",
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
                {children}
            </body>
        </html>
    );
}
