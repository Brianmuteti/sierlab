"use client";

import dynamic from "next/dynamic";
import type { FC } from "react";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Footer from "@/components/modern/Footer";
import Header from "@/components/modern/Header";
import WhatsAppFloat from "@/components/modern/WhatsAppFloat";

interface BootstrapComponentsProps {}

const BootstrapComponents = dynamic<BootstrapComponentsProps>(
    () => import("@/util/useBootstrap"),
    { ssr: false }
) as FC<BootstrapComponentsProps>;

interface LayoutProps {
    children?: React.ReactNode;
    breadcrumbTitle?: string;
}

export default function Layout({ children }: LayoutProps) {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = (): void => {
            setScroll(window.scrollY > 100);
        };
        handleScroll();
        document.addEventListener("scroll", handleScroll, { passive: true });
        return () => document.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <a href="#main-content" className="sl-skip-link">
                Skip to main content
            </a>
            <div id="top" />
            <BootstrapComponents />
            <Header scroll={scroll} />
            <main id="main-content">{children}</main>
            <Footer />
            <WhatsAppFloat />
            <BackToTop />
        </>
    );
}
