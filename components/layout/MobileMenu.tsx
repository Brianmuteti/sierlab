"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
    isMobileMenu: boolean;
    handleMobileMenu: () => void;
}

export default function MobileMenu({
    isMobileMenu,
    handleMobileMenu,
}: MobileMenuProps) {
    const [isAccordion, setIsAccordion] = useState<number | null>(null);
    const pathname = usePathname();

    const handleAccordion = (key: number) => {
        setIsAccordion((prevState) => (prevState === key ? null : key));
    };

    useEffect(() => {
        if (isMobileMenu) {
            handleMobileMenu();
        }
    }, [pathname]);

    return (
        <>
            {isMobileMenu && (
                <div
                    className="mobile-menu-overlay"
                    onClick={handleMobileMenu}
                />
            )}

            <div
                className={`mobile-header-active mobile-header-wrapper-style ${
                    isMobileMenu ? "sidebar-visible" : ""
                }`}
            >
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-logo">
                        <img
                            src="/assets/imgs/pages/startup/logo.png"
                            alt="Sierlab Logo"
                            width="200"
                            // height="150"
                        />
                        <div
                            className={`burger-icon burger-icon-white border rounded-circle ${
                                isMobileMenu ? "burger-close" : ""
                            }`}
                            onClick={handleMobileMenu}
                        >
                            <span className="burger-icon-top" />
                            <span className="burger-icon-mid" />
                            <span className="burger-icon-bottom" />
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav>
                                    <ul className="mobile-menu ps-0">
                                        <li>
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link href="/about">About Us</Link>
                                        </li>
                                        <li>
                                            <Link href="/pricing">Pricing</Link>
                                        </li>
                                        <li className="has-children">
                                            <span
                                                className="menu-expand"
                                                onClick={() =>
                                                    handleAccordion(1)
                                                }
                                            >
                                                <i className="arrow-small-down" />
                                            </span>
                                            <Link href="#">Services</Link>
                                            <ul
                                                className="sub-menu"
                                                style={{
                                                    display: `${
                                                        isAccordion == 1
                                                            ? "block"
                                                            : "none"
                                                    }`,
                                                }}
                                            >
                                                <li>
                                                    <Link href="/services">
                                                        Services
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services-details">
                                                        Services Details
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="/blog">News</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="tgmobile__menu-bottom mt-auto">
                        <div className="contact-info">
                            <ul className="list-wrap">
                                <li>
                                    <span className="opacity-50">Mail:</span>{" "}
                                    <Link href="/mailto:info@sierlab.com">
                                        info@sierlab.com
                                    </Link>
                                </li>
                                <li>
                                    <span className="opacity-50">Phone:</span>{" "}
                                    <Link href="/tel:+254731824251">
                                        +254 731 824 251
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="social-links">
                            <div className="social-icons gap-4 mt-4">
                                <Link
                                    href="#"
                                    className="border border-opacity-10 border-white icon-shape icon-md"
                                >
                                    <i className="bi bi-facebook" />
                                </Link>
                                <Link
                                    href="#"
                                    className="border border-opacity-10 border-white icon-shape icon-md"
                                >
                                    <i className="bi bi-twitter-x" />
                                </Link>
                                <Link
                                    href="#"
                                    className="border border-opacity-10 border-white icon-shape icon-md"
                                >
                                    <i className="bi bi-linkedin" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
