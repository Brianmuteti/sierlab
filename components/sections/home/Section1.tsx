import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*startup home section 1*/}
            <section className="startup-section-1 position-relative py-lg-220 py-10 border-bottom">
                <div className="container position-relative z-1">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <span className="text-primary">
                                Hi there! Welcome to Sierlab
                            </span>
                            <h1 className="text-dark my-3 text-anime-style-2">
                                We empower brands with smart digital solutions
                            </h1>
                            <Link
                                href="/contact"
                                className="btn btn-primary mt-4 hover-up"
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
                        <div className="col-lg-7 text-center d-flex justify-content-center align-items-center">
                            <div
                                className="position-relative d-none d-lg-block"
                                data-aos="zoom-in"
                            >
                                <div className="circle-center" />
                                <div className="position-absolute translate-middle shape-man01">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={302}
                                        height={198}
                                        viewBox="0 0 302 198"
                                        fill="none"
                                    >
                                        <path
                                            d="M0 47.7628C0 42.7475 3.71506 38.5079 8.68696 37.8494L290.687 0.498413C296.679 -0.295239 302 4.36743 302 10.4118V150.237C302 155.252 298.285 159.492 293.313 160.151L11.313 197.502C5.32094 198.295 0 193.633 0 187.588V47.7628Z"
                                            fill="url(#paint0_linear_349_1578)"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_349_1578"
                                                x1="6.5"
                                                y1="41.5"
                                                x2={302}
                                                y2="156.5"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#F3EFFF" />
                                                <stop
                                                    offset={1}
                                                    stopColor="#794AFF"
                                                />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <img
                                        className="position-absolute bottom-0 start-50 translate-middle-x"
                                        src="assets/imgs/pages/startup/page-home/home-section-1/img-1-2.png"
                                        alt="Sierlab"
                                    />
                                </div>
                                <div className="position-absolute translate-middle shape-man02">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={302}
                                        height={198}
                                        viewBox="0 0 302 198"
                                        fill="none"
                                    >
                                        <path
                                            d="M0 47.7628C0 42.7475 3.71506 38.5079 8.68696 37.8494L290.687 0.498413C296.679 -0.295239 302 4.36743 302 10.4118V150.237C302 155.252 298.285 159.492 293.313 160.151L11.313 197.502C5.32094 198.295 0 193.633 0 187.588V47.7628Z"
                                            fill="url(#paint0_linear_349_1573)"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_349_1573"
                                                x1="6.5"
                                                y1="41.5"
                                                x2={302}
                                                y2="156.5"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#794AFF" />
                                                <stop
                                                    offset={1}
                                                    stopColor="#F3EFFF"
                                                />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <img
                                        className="position-absolute bottom-0 start-50 translate-middle-x"
                                        src="assets/imgs/pages/startup/page-home/home-section-1/img-1-1.png"
                                        alt="Sierlab"
                                    />
                                </div>
                                <div className="position-absolute top-50 start-50 translate-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={105}
                                        height={120}
                                        viewBox="0 0 105 120"
                                        fill="none"
                                    >
                                        <g clipPath="url(#clip0_349_1582)">
                                            <path
                                                d="M10.0005 95.7135V35.8005L52.4955 11.5185L95.001 35.8005V84.195L52.4955 108.481L30 95.625V47.406L52.4955 34.551L75 47.406V72.588L52.4955 85.4445L50.001 84.0195V59.0145L62.574 51.8265L52.4955 46.0695L40.0005 53.214V89.82L52.4955 96.963L85.0005 78.3885V41.6055L52.4955 23.037L20.001 41.6055V101.425L52.4955 120L105 90V30L52.4955 0L0 30V90L10.0005 95.7135Z"
                                                fill="white"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <div className="position-absolute top-50 start-50 translate-middle">
                                    <div className="rotateme">
                                        <div className="circle-1-2 position-absolute top-50 start-50 translate-middle">
                                            <svg
                                                className="position-absolute top-0 start-50 translate-middle"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={26}
                                                height={26}
                                                viewBox="0 0 26 26"
                                                fill="none"
                                            >
                                                <circle
                                                    cx={13}
                                                    cy={13}
                                                    r={13}
                                                    fill="#292929"
                                                />
                                            </svg>
                                        </div>
                                        <div className="circle-1-3 position-absolute top-50 start-50 translate-middle ">
                                            <svg
                                                className="position-absolute bottom-50 start-0 translate-middle"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={26}
                                                height={26}
                                                viewBox="0 0 26 26"
                                                fill="none"
                                            >
                                                <circle
                                                    cx={13}
                                                    cy={13}
                                                    r={13}
                                                    fill="#794AFF"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
