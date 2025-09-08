import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*startup services section 1*/}
            <section className="startup-services-section-1 position-relative py-120 border-bottom overflow-hidden">
                <div className="container">
                    <div className="row align-items-center position-relative z-1">
                        <div className="col-lg-5 col-md-12 position-relative z-1">
                            <span className="text-primary">
                                Hi there! Welcome to Sierlab
                            </span>
                            <h1 className="text-dark my-3 text-anime-style-2">
                                What we offer
                            </h1>
                            <p className="wow img-custom-anim-top">
                                At Sierlab, we provide innovative,
                                results-driven solutions tailored to help your
                                business thrive. Our comprehensive services
                                cover every aspect of your journey, from app
                                development to securing systems.
                            </p>
                            <Link
                                href="/contact"
                                className="btn btn-primary mt-6"
                            >
                                <span>Get Started</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <g clipPath="url(#clip0_828_193)">
                                        <path
                                            d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z"
                                            fill="white"
                                        />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                        <div className="col-lg-7 text-end ms-auto mt-lg-0 mt-5">
                            <div
                                className="position-relative z-1"
                                data-aos="zoom-in"
                            >
                                <img
                                    src="assets/imgs/pages/startup/page-services/services-2.png"
                                    alt="Sierlab"
                                />
                            </div>
                        </div>
                        <div
                            className="position-absolute bottom-0 start-0 ms-10 ps-10 z-0"
                            data-aos="fade-left"
                        >
                            <img
                                className="ps-10 ms-10"
                                src="assets/imgs/pages/startup/page-services/line.png"
                                alt="Sierlab"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
