"use client";

import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

const AUTOPLAY_MS = 6000;

const GLOBAL_STATS = [
    { value: "40+", label: "Projects Delivered" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support" },
    { value: "5+", label: "Years Active" },
];

const SLIDES = [
    {
        eyebrow: "FLAGSHIP SOLUTION",
        title: "Custom Web",
        titleAccent: "Applications",
        subtitle: "Built for Your Workflow",
        desc: "Management systems, dashboards, and business apps using React, Next.js, and Node.js — tailored to how you operate.",
        tags: ["💻 MIS Systems", "📊 Dashboards", "🔐 Role-based Access"],
        primaryCta: { href: "/custom-web-applications", label: "Explore Web Apps" },
        preview: {
            icon: "💻",
            label: "Web Applications",
            tagline: "Built for Your Workflow",
            stats: [
                { value: "40+", label: "Projects" },
                { value: "100%", label: "Happy" },
                { value: "24/7", label: "Support" },
            ],
            serial: "SL-02401",
        },
    },
    {
        eyebrow: "E-COMMERCE",
        title: "Online Store",
        titleAccent: "Platforms",
        subtitle: "Sell Anywhere in Kenya",
        desc: "Launch your store with M-Pesa checkout, inventory sync, order tracking, and mobile-ready storefronts in days.",
        tags: ["🛒 Storefronts", "💚 M-Pesa Checkout", "📦 Order Tracking"],
        primaryCta: { href: "/ecommerce-development", label: "Explore E-Commerce" },
        preview: {
            icon: "🛒",
            label: "E-Commerce",
            tagline: "Sell Anywhere in Kenya",
            stats: [
                { value: "30+", label: "Stores" },
                { value: "M-Pesa", label: "Ready" },
                { value: "SEO", label: "Built-in" },
            ],
            serial: "SL-02402",
        },
    },
    {
        eyebrow: "INTEGRATIONS",
        title: "API & Payment",
        titleAccent: "Connections",
        subtitle: "M-Pesa · Banks · Cards",
        desc: "STK Push, bank APIs, Stripe, PayPal, and custom REST integrations — connect your software to any gateway.",
        tags: ["💚 M-Pesa Daraja", "🏦 Bank APIs", "💳 Stripe & PayPal"],
        primaryCta: { href: "/api-integration-services", label: "Get Integration Quote" },
        preview: {
            icon: "🔗",
            label: "API Integrations",
            tagline: "M-Pesa · Banks · Cards",
            stats: [
                { value: "50+", label: "APIs" },
                { value: "Live", label: "Callbacks" },
                { value: "REST", label: "& SOAP" },
            ],
            serial: "SL-02403",
        },
    },
    {
        eyebrow: "GROWTH & SECURITY",
        title: "Websites &",
        titleAccent: "Cybersecurity",
        subtitle: "Design · SEO · Protection",
        desc: "High-performance websites, SEO that ranks, and security consulting to keep your business safe online.",
        tags: ["🎨 Web Design", "📈 SEO", "🛡️ Security Audits"],
        primaryCta: { href: "/website-design", label: "View Design Services" },
        preview: {
            icon: "🚀",
            label: "Digital Growth",
            tagline: "Design · SEO · Protection",
            stats: [
                { value: "Fast", label: "Sites" },
                { value: "Top", label: "SEO" },
                { value: "Safe", label: "Secure" },
            ],
            serial: "SL-02404",
        },
    },
];

function padSlide(n: number) {
    return String(n + 1).padStart(2, "0");
}

export default function HeroSlider() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [progressKey, setProgressKey] = useState(0);

    const onSlideChange = useCallback((swiper: SwiperType) => {
        setActiveIndex(swiper.realIndex);
        setProgressKey((k) => k + 1);
    }, []);

    const goToSlide = (index: number) => {
        swiperRef.current?.slideToLoop(index);
        setProgressKey((k) => k + 1);
    };

    return (
        <section className="sl-hero sl-hero-slider">
            <div className="sl-hero__grid-bg" aria-hidden />
            <div className="sl-hero__glow" aria-hidden />
            <div className="sl-hero__glow sl-hero__glow--green" aria-hidden />

            <div className="sl-hero__container">
                {/* Top meta bar — FrankCode-style */}
                <div className="sl-hero-slider__meta">
                    <div className="sl-badge">
                        <span className="sl-badge__dot" />
                        Sierlab Edition · {new Date().getFullYear()}
                    </div>
                    <span className="sl-hero-slider__suite">
                        DIGITAL SOLUTION SUITE
                    </span>
                    <span className="sl-hero-slider__counter" aria-live="polite">
                        {padSlide(activeIndex)} / {padSlide(SLIDES.length - 1)}
                    </span>
                    <span className="sl-hero-slider__live">
                        <span className="sl-hero-slider__live-dot" />
                        Nairobi · Live
                    </span>
                </div>

                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    slidesPerView={1}
                    loop
                    speed={700}
                    autoplay={{
                        delay: AUTOPLAY_MS,
                        disableOnInteraction: false,
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onSlideChange={onSlideChange}
                    className="sl-hero-slider__swiper"
                >
                    {SLIDES.map((slide, index) => (
                        <SwiperSlide key={slide.preview.serial}>
                            <div className="sl-hero-slider__layout">
                                <div className="sl-hero-slider__content">
                                    <p className="sl-hero-slider__eyebrow">
                                        {slide.eyebrow}
                                        <span className="sl-hero-slider__eyebrow-loc">
                                            · NAIROBI · LIVE
                                        </span>
                                    </p>
                                    <h1>
                                        {slide.title}
                                        <br />
                                        <span>{slide.titleAccent}</span>
                                    </h1>
                                    <p className="sl-hero__subtitle">
                                        {slide.subtitle}
                                    </p>
                                    <p className="sl-hero__desc">{slide.desc}</p>

                                    <div className="sl-hero__tags">
                                        {slide.tags.map((tag) => (
                                            <span key={tag} className="sl-hero__tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="sl-hero__actions sl-hero-slider__actions">
                                        <Link
                                            href={slide.primaryCta.href}
                                            className="sl-btn sl-btn--primary"
                                        >
                                            {slide.primaryCta.label}
                                        </Link>
                                        <a
                                            href="https://wa.me/254731824251"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="sl-btn sl-btn--whatsapp"
                                        >
                                            Talk on WhatsApp
                                        </a>
                                    </div>
                                </div>

                                <div className="sl-hero-slider__preview-wrap">
                                    <div
                                        className={`sl-hero-slider__preview sl-hero-slider__preview--${index + 1}`}
                                    >
                                        <div className="sl-hero-slider__preview-header">
                                            <span className="sl-hero-slider__preview-icon">
                                                {slide.preview.icon}
                                            </span>
                                            <div>
                                                <p className="sl-hero-slider__preview-label">
                                                    DIGITAL SOLUTION SUITE
                                                </p>
                                                <h3>{slide.preview.label}</h3>
                                                <p>{slide.preview.tagline}</p>
                                            </div>
                                        </div>
                                        <div className="sl-hero-slider__preview-stats">
                                            {slide.preview.stats.map((s) => (
                                                <div key={s.label}>
                                                    <strong>{s.value}</strong>
                                                    <span>{s.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="sl-hero-slider__preview-footer">
                                            <span>SERIAL #{slide.preview.serial}</span>
                                            <span className="sl-hero-slider__preview-spark">
                                                ✨ 🚀
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Progress + controls */}
                <div className="sl-hero-slider__controls">
                    <div
                        className="sl-hero-slider__progress"
                        role="tablist"
                        aria-label="Hero slides"
                    >
                        {SLIDES.map((slide, i) => (
                            <button
                                key={slide.preview.serial}
                                type="button"
                                role="tab"
                                aria-selected={i === activeIndex}
                                aria-label={`Go to slide ${i + 1}`}
                                className={`sl-hero-slider__progress-item${
                                    i === activeIndex ? " is-active" : ""
                                }${i < activeIndex ? " is-done" : ""}`}
                                onClick={() => goToSlide(i)}
                            >
                                <span
                                    key={
                                        i === activeIndex
                                            ? `fill-${progressKey}`
                                            : `fill-${i}`
                                    }
                                    className="sl-hero-slider__progress-fill"
                                />
                            </button>
                        ))}
                    </div>
                    <div className="sl-hero-slider__controls-meta">
                        <span className="sl-hero-slider__auto">
                            Auto · {AUTOPLAY_MS / 1000}s
                        </span>
                        <div className="sl-hero-slider__nav">
                            <button
                                type="button"
                                className="sl-hero-slider__nav-btn"
                                aria-label="Previous slide"
                                onClick={() => swiperRef.current?.slidePrev()}
                            >
                                ←
                            </button>
                            <button
                                type="button"
                                className="sl-hero-slider__nav-btn"
                                aria-label="Next slide"
                                onClick={() => swiperRef.current?.slideNext()}
                            >
                                →
                            </button>
                        </div>
                    </div>
                </div>

                <div className="sl-hero__stats sl-hero-slider__global-stats">
                    {GLOBAL_STATS.map((stat) => (
                        <div key={stat.label} className="sl-stat">
                            <div className="sl-stat__value">{stat.value}</div>
                            <div className="sl-stat__label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <a href="#services" className="sl-hero-slider__scroll">
                    <span>Scroll</span>
                    <span className="sl-hero-slider__scroll-icon" aria-hidden>
                        ↓
                    </span>
                </a>
            </div>
        </section>
    );
}
