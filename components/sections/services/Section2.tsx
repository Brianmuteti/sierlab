import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*startup services section 2*/}
            <section className="startup-services-section-2 position-relative overflow-hidden py-90">
                <div className="container">
                    <div className="text-center mb-80">
                        <h2 className="text-dark my-3 text-anime-style-2">
                            Your All-in-one Solution
                        </h2>
                        <p>
                            Everything you need, combined in one seamless
                            system.
                        </p>
                    </div>
                    <div className="row align-items-center g-4">
                        <div className="col-lg-4 col-md-6 align-self-stretch">
                            <div
                                className="border p-5 bg-white card-services hover-up h-100"
                                data-aos="fade-up"
                                data-aos-delay={0}
                            >
                                <img
                                    src="assets/imgs/pages/startup/page-services/icon1.png"
                                    alt="Sierlab"
                                />
                                <Link href="/custom-web-applications">
                                    <h6 className="mt-4 mb-3">
                                        Custom Web Applications
                                    </h6>
                                </Link>
                                <p className="mb-4">
                                    Whether you are managing employees, assets,
                                    finances, or hospital operations, at Sierlab
                                    we build systems that align perfectly with
                                    your internal processes
                                </p>
                                <Link
                                    href="/custom-web-applications"
                                    className="text-primary text-uppercase fs-7 fw-semibold"
                                >
                                    Lean More
                                    <svg
                                        className="ms-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={13}
                                        height={13}
                                        viewBox="0 0 13 13"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.07106 6.35416L1.41421 12.0111L0 10.5969L5.65686 4.93996L0.7071 -0.00976562H12.0209V11.304L7.07106 6.35416Z"
                                            fill="#292929"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 align-self-stretch">
                            <div
                                className="border p-5 bg-white card-services hover-up h-100"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <img
                                    src="assets/imgs/pages/startup/page-services/icon2.png"
                                    alt="Sierlab"
                                />
                                <Link href="/ecommerce-development">
                                    <h6 className="mt-4 mb-3">
                                        Ecommerce Applications
                                    </h6>
                                </Link>
                                <p className="mb-4">
                                    We offer both fully custom solutions with
                                    Next.js and CMS-powered stores using
                                    WordPress + WooCommerce.
                                </p>
                                <Link
                                    href="/ecommerce-development"
                                    className="text-primary text-uppercase fs-7 fw-semibold"
                                >
                                    Lean More
                                    <svg
                                        className="ms-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={13}
                                        height={13}
                                        viewBox="0 0 13 13"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.07106 6.35416L1.41421 12.0111L0 10.5969L5.65686 4.93996L0.7071 -0.00976562H12.0209V11.304L7.07106 6.35416Z"
                                            fill="#292929"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 align-self-stretch">
                            <div
                                className="border p-5 bg-white card-services hover-up h-100"
                                data-aos="fade-up"
                                data-aos-delay={400}
                            >
                                <img
                                    src="assets/imgs/pages/startup/page-services/icon-3.png"
                                    alt="Sierlab"
                                />
                                <Link href="/website-design">
                                    <h6 className="mt-4 mb-3">
                                        Website & Landing Page Design
                                    </h6>
                                </Link>
                                <p className="mb-4">
                                    We craft landing pages and full websites
                                    that look sharp, load fast, and convert
                                    visitors into leads or customers.
                                </p>
                                <Link
                                    href="/website-design"
                                    className="text-primary text-uppercase fs-7 fw-semibold"
                                >
                                    Lean More
                                    <svg
                                        className="ms-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={13}
                                        height={13}
                                        viewBox="0 0 13 13"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.07106 6.35416L1.41421 12.0111L0 10.5969L5.65686 4.93996L0.7071 -0.00976562H12.0209V11.304L7.07106 6.35416Z"
                                            fill="#292929"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 align-self-stretch">
                            <div
                                className="border p-5 bg-white card-services hover-up h-100"
                                data-aos="fade-up"
                                data-aos-delay={600}
                            >
                                <img
                                    src="assets/imgs/pages/startup/page-services/icon-4.png"
                                    alt="Sierlab"
                                />
                                <Link href="/api-integration-services">
                                    <h6 className="mt-4 mb-3">
                                        API Integrations
                                    </h6>
                                </Link>
                                <p className="mb-4">
                                    Sierlab integrates your website or
                                    application with the services that matter —
                                    from payments and email to AI and chatbots.
                                </p>
                                <Link
                                    href="/api-integration-services"
                                    className="text-primary text-uppercase fs-7 fw-semibold"
                                >
                                    Lean More
                                    <svg
                                        className="ms-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={13}
                                        height={13}
                                        viewBox="0 0 13 13"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.07106 6.35416L1.41421 12.0111L0 10.5969L5.65686 4.93996L0.7071 -0.00976562H12.0209V11.304L7.07106 6.35416Z"
                                            fill="#292929"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 align-self-stretch">
                            <div
                                className="border p-5 bg-white card-services hover-up h-100"
                                data-aos="fade-up"
                                data-aos-delay={800}
                            >
                                <img
                                    src="assets/imgs/pages/startup/page-services/icon-5.png"
                                    alt="Sierlab"
                                />
                                <Link href="/seo-optimization">
                                    <h6 className="mt-4 mb-3">
                                        SEO Optimization
                                    </h6>
                                </Link>
                                <p className="mb-4">
                                    Boost your visibility on search engines and
                                    attract organic traffic with our proven SEO
                                    strategies.
                                </p>
                                <Link
                                    href="/seo-optimization"
                                    className="text-primary text-uppercase fs-7 fw-semibold"
                                >
                                    Lean More
                                    <svg
                                        className="ms-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={13}
                                        height={13}
                                        viewBox="0 0 13 13"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.07106 6.35416L1.41421 12.0111L0 10.5969L5.65686 4.93996L0.7071 -0.00976562H12.0209V11.304L7.07106 6.35416Z"
                                            fill="#292929"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 align-self-stretch">
                            <div
                                className="border p-5 bg-white card-services hover-up h-100"
                                data-aos="fade-up"
                                data-aos-delay={1000}
                            >
                                <img
                                    src="assets/imgs/pages/startup/page-services/icon-6.png"
                                    alt="Sierlab"
                                />
                                <Link href="/cybersecurity-consulting">
                                    <h6 className="mt-4 mb-3">
                                        IT Consultancy & Cybersecurity
                                    </h6>
                                </Link>
                                <p className="mb-4">
                                    Sierlab provides cybersecurity assessments
                                    and IT consulting services to help you stay
                                    protected and compliant.
                                </p>
                                <Link
                                    href="/cybersecurity-consulting"
                                    className="text-primary text-uppercase fs-7 fw-semibold"
                                >
                                    Lean More
                                    <svg
                                        className="ms-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={13}
                                        height={13}
                                        viewBox="0 0 13 13"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.07106 6.35416L1.41421 12.0111L0 10.5969L5.65686 4.93996L0.7071 -0.00976562H12.0209V11.304L7.07106 6.35416Z"
                                            fill="#292929"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center justify-content-center mt-8">
                        <h6 className="text-primary mb-0 text-anime-style-2">
                            40+{" "}
                            <span className="text-dark">
                                {" "}
                                happy user review on board.
                            </span>
                        </h6>
                        <div>
                            <Link
                                href="/pricing"
                                className="btn btn-outline-secondary mt-5"
                            >
                                <span>hire us today</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <g clipPath="url(#clip0_816_117)">
                                        <path
                                            d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z"
                                            fill="#292929"
                                        />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
