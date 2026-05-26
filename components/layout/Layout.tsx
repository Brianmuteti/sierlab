"use client";

import dynamic from "next/dynamic";
import type { FC } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
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
    const mainRef = useRef<HTMLElement>(null);

    const skipToMain = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const main = mainRef.current;
        if (!main) return;

        const navOffset =
            parseInt(
                getComputedStyle(document.documentElement).getPropertyValue(
                    "--sl-nav-h"
                ),
                10
            ) || 72;

        const top = main.getBoundingClientRect().top + window.scrollY - navOffset;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
        main.focus({ preventScroll: true });
    }, []);

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
            <a href="#main-content" className="sl-skip-link" onClick={skipToMain}>
                Skip to main content
            </a>
            <div id="top" />
            <BootstrapComponents />
            <Header scroll={scroll} />
            <main id="main-content" ref={mainRef} tabIndex={-1}>
                {children}
            </main>
            <Footer />
            <WhatsAppFloat />
            <BackToTop />
        </>
    );
}
