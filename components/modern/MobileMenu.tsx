"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

type NavItem = { href: string; label: string };

export default function MobileMenu({
    isOpen,
    onClose,
    nav,
}: {
    isOpen: boolean;
    onClose: () => void;
    nav: NavItem[];
}) {
    const pathname = usePathname();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) onClose();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <>
            <div
                className={`sl-mobile-overlay ${isOpen ? "is-open" : ""}`}
                onClick={onClose}
                role="presentation"
            />
            <div className={`sl-mobile-panel ${isOpen ? "is-open" : ""}`}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <img
                        src="/assets/imgs/pages/startup/logo.png"
                        alt="Sierlab"
                        height={32}
                    />
                    <button
                        type="button"
                        className="sl-burger"
                        aria-label="Close menu"
                        onClick={onClose}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
                {nav.map((item) => (
                    <Link key={item.href} href={item.href}>
                        {item.label}
                    </Link>
                ))}
                <Link
                    href="/contact"
                    className="sl-btn sl-btn--primary w-100 justify-content-center mt-4"
                >
                    Let&apos;s talk
                </Link>
            </div>
        </>
    );
}
