"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const NAV = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/integrations", label: "Integrations" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "News" },
    { href: "/contact", label: "Contact" },
];

export default function Header({ scroll }: { scroll: boolean }) {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <header className={`sl-header ${scroll ? "is-scrolled" : ""}`}>
                <div className="sl-header__inner">
                    <Link href="/" className="sl-header__brand">
                        <Image
                            src="/assets/imgs/pages/startup/logo.png"
                            alt="Sierlab"
                            width={140}
                            height={36}
                            priority
                        />
                    </Link>

                    <nav>
                        <ul className="sl-nav">
                            {NAV.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={
                                            pathname === item.href
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="d-flex align-items-center gap-3">
                        <Link
                            href="/contact"
                            className="sl-btn sl-btn--primary d-none d-md-inline-flex"
                        >
                            Let&apos;s talk
                        </Link>
                        <button
                            type="button"
                            className="sl-burger"
                            aria-label="Open menu"
                            onClick={() => setMobileOpen(true)}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </div>
            </header>

            <MobileMenu
                isOpen={mobileOpen}
                onClose={() => setMobileOpen(false)}
                nav={NAV}
            />
        </>
    );
}
