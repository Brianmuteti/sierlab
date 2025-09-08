import Link from "next/link";

export default function Section3() {
    return (
        <>
            {/*startup home section 3*/}
            <section className="startup-home-startup-section-3 position-relative overflow-hidden pt-120 bg-linear-2">
                <div className="container position-relative z-1">
                    <div className="text-center">
                        <span className="text-primary">What we do</span>
                        <h2 className="text-dark my-3 text-anime-style-2">
                            Company expertise
                        </h2>
                    </div>
                    <div className="row mt-8">
                        <div className="col-lg-9">
                            <div className="row g-4">
                                <div
                                    className="col-lg-8"
                                    data-aos="fade-up"
                                    data-aos-delay={0}
                                >
                                    <div className="bg-white rounded-3 p-5 position-relative hover-up">
                                        <Link href="/custom-web-applications">
                                            <h5 className="mb-3">
                                                Custom Web Applications
                                            </h5>
                                        </Link>
                                        <p className="mb-5 pb-2 wow img-custom-anim-top">
                                            Need a system to manage HR, assets,
                                            performance, or hospital operations?
                                            We build reliable Management
                                            Information Systems (MIS) using
                                            modern frameworks like React,
                                            Next.js, and Node.js; <br />
                                            crafted around your business needs.{" "}
                                        </p>
                                        <Link
                                            href="/custom-web-applications"
                                            className="icon-shape icon-xl rounded-circle border mt-3 ms-auto hover-up"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                viewBox="0 0 16 16"
                                                fill="none"
                                            >
                                                <g clipPath="url(#clip0_349_577)">
                                                    <path
                                                        d="M11.8173 12.1915L16 8.00002L11.8173 3.80859L10.9325 4.69155L13.6104 7.37503L-1.55894e-07 7.37503L-2.10532e-07 8.62502L13.6104 8.62502L10.9325 11.3085L11.8173 12.1915Z"
                                                        fill="#292929"
                                                    />
                                                </g>
                                            </svg>
                                        </Link>
                                        <img
                                            className="position-absolute end-0 bottom-0 d-none d-md-block"
                                            src="assets/imgs/pages/startup/page-home/home-section-3/img-1.png"
                                            alt="Sierlab"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="col-lg-4 align-self-stretch"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                >
                                    <div className="bg-dark text-center h-100 rounded-3 p-5 d-flex flex-column justify-content-between overflow-hidden hover-up">
                                        <Link href="/seo-optimization">
                                            <h6 className="text-white">
                                                Search Engine Optimization
                                            </h6>
                                        </Link>
                                        <div className="position-relative">
                                            <div className="shape-icon-01 position-absolute top-50 srart-0 translate-middle-y icon-80 rounded-circle bg-secondary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={40}
                                                    height={40}
                                                    viewBox="0 0 40 40"
                                                    fill="none"
                                                >
                                                    <g clipPath="url(#clip0_349_1661)">
                                                        <path
                                                            d="M20.0009 33.601C16.1811 33.601 12.7303 32.022 10.2624 29.4814C10.225 29.5153 5.76054 33.9944 5.72266 34.0219C13.1333 41.9409 26.8022 41.961 34.2362 34.0659L29.6968 29.5251C27.2319 32.0401 23.7988 33.601 20.0009 33.601Z"
                                                            fill="white"
                                                        />
                                                        <path
                                                            d="M6.41762 20.0056C6.41762 12.9163 11.839 7.09537 18.7582 6.46747L18.7554 0.0263672C2.99502 0.808158 -5.60375 19.7504 4.08959 32.1352L8.70182 27.553C7.25932 25.3938 6.41762 22.7982 6.41762 20.0056Z"
                                                            fill="white"
                                                        />
                                                        <path
                                                            d="M21.2448 0.0263672C21.2419 0.100578 21.2503 6.39732 21.2419 6.46747C31.3649 7.25278 37.0604 19.2364 31.2702 27.5957L35.873 32.1842C45.6245 19.8043 37.0277 0.80808 21.2448 0.0263672Z"
                                                            fill="white"
                                                        />
                                                        <path
                                                            d="M17.7205 17.8552V25.0353H21.3712V17.8552C21.3712 17.4564 21.0479 17.1331 20.6491 17.1331H18.4427C18.0438 17.1331 17.7205 17.4564 17.7205 17.8552Z"
                                                            fill="white"
                                                        />
                                                        <path
                                                            d="M27.2678 24.2995V13.8618C27.2678 13.463 26.9445 13.1396 26.5456 13.1396H24.3394C23.9405 13.1396 23.6172 13.463 23.6172 13.8618V25.0355H26.5319C26.9383 25.0355 27.2678 24.706 27.2678 24.2995Z"
                                                            fill="white"
                                                        />
                                                        <path
                                                            d="M12.6265 20.7264C12.2276 20.7264 11.9043 21.0498 11.9043 21.4486V24.2992C11.9043 24.7057 12.2338 25.0352 12.6403 25.0352H15.477V21.4486C15.477 21.0498 15.1536 20.7264 14.7548 20.7264H12.6265Z"
                                                            fill="white"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="icon-shape icon-110 rounded-circle bg-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={46}
                                                    height={46}
                                                    viewBox="0 0 46 46"
                                                    fill="none"
                                                >
                                                    <g clipPath="url(#clip0_349_1683)">
                                                        <path
                                                            d="M26.5195 12.666C27.76 12.666 28.7656 11.6604 28.7656 10.4199C28.7656 9.17944 27.76 8.17383 26.5195 8.17383C25.279 8.17383 24.2734 9.17944 24.2734 10.4199C24.2734 11.6604 25.279 12.666 26.5195 12.666Z"
                                                            fill="white"
                                                        />
                                                        <path
                                                            d="M2.24609 20.7512H3.58063V25.8812C3.58063 26.4263 3.90901 26.9177 4.41259 27.1263C4.57934 27.1953 4.75444 27.2289 4.92802 27.2289C5.27877 27.2289 5.62341 27.092 5.88126 26.8342L11.9642 20.7513H34.6948C35.9333 20.7513 36.9409 19.7437 36.9409 18.5052V2.24609C36.9409 1.0076 35.9333 0 34.6948 0H2.24609C1.0076 0 0 1.0076 0 2.24609V18.5051C0 19.7436 1.0076 20.7512 2.24609 20.7512ZM5.82969 13.8537C5.32989 13.3022 5.37185 12.4499 5.9234 11.9501C6.47477 11.4504 7.32712 11.4922 7.82701 12.0438C7.95935 12.1899 8.45924 12.6665 9.33306 12.6665C9.84508 12.6665 10.1195 12.3706 10.1464 12.2196C10.1624 12.1302 9.96502 11.9163 9.49082 11.7415C8.3623 11.3253 7.35928 10.8787 7.31714 10.86C7.25219 10.831 7.18975 10.797 7.13018 10.7582C6.22429 10.1675 5.75746 9.13226 5.91181 8.05656C6.07479 6.92156 6.89748 5.99914 8.05889 5.64929C9.21968 5.29961 10.3991 5.4855 11.5647 6.202C12.1988 6.59175 12.3968 7.42172 12.0071 8.05584C11.6173 8.68996 10.7873 8.88797 10.1532 8.49823C9.64437 8.18548 9.25058 8.10525 8.83631 8.23005C8.68582 8.27533 8.5923 8.3517 8.57972 8.43965C8.57783 8.45277 8.57774 8.46265 8.579 8.47038C8.89705 8.60829 9.63619 8.92247 10.4234 9.21285C11.2704 9.52532 11.9132 9.99143 12.3339 10.5983C12.7646 11.2195 12.9299 11.9636 12.7996 12.6935C12.5235 14.2397 11.0655 15.362 9.33288 15.362C7.97516 15.3619 6.69821 14.8122 5.82969 13.8537ZM18.6465 9.07287C19.3908 9.07287 19.9942 9.67626 19.9942 10.4205C19.9942 11.1648 19.3908 11.7682 18.6465 11.7682H17.2146V12.6338H18.8678C19.6121 12.6338 20.2155 13.2372 20.2155 13.9815C20.2155 14.7257 19.6121 15.3291 18.8678 15.3291H15.8669C15.1227 15.3291 14.5193 14.7257 14.5193 13.9815V6.85957C14.5193 6.1153 15.1227 5.51191 15.8669 5.51191H18.8678C19.6121 5.51191 20.2155 6.1153 20.2155 6.85957C20.2155 7.60384 19.6121 8.20723 18.8678 8.20723H17.2146V9.07287H18.6465ZM21.5774 10.4205C21.5774 7.69584 23.7941 5.47912 26.5188 5.47912C29.2435 5.47912 31.4602 7.69584 31.4602 10.4205C31.4602 13.1452 29.2435 15.3619 26.5188 15.3619C23.7941 15.3619 21.5774 13.1452 21.5774 10.4205Z"
                                                            fill="white"
                                                        />
                                                        <path
                                                            d="M44.6523 43.3044H43.2971V25.5049C43.2971 24.2664 42.2895 23.2588 41.051 23.2588H37.4418C36.2033 23.2588 35.1957 24.2664 35.1957 25.5049V43.3044H32.4662V31.5373C32.4662 30.2988 31.4586 29.2912 30.2201 29.2912H26.611C25.3725 29.2912 24.3649 30.2988 24.3649 31.5373V43.3044H21.6353V29.0215C21.6353 27.7831 20.6277 26.7755 19.3892 26.7755H15.7801C14.5416 26.7755 13.534 27.7831 13.534 29.0215V43.3044H10.8044V35.1413C10.8044 33.9028 9.79683 32.8952 8.55834 32.8952H4.94904C3.71055 32.8952 2.70295 33.9028 2.70295 35.1413V43.3044H1.34766C0.603391 43.3044 0 43.9078 0 44.652C0 45.3963 0.603391 45.9997 1.34766 45.9997H44.6523C45.3966 45.9997 46 45.3963 46 44.652C46 43.9078 45.3966 43.3044 44.6523 43.3044Z"
                                                            fill="white"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="shape-icon-02 position-absolute top-50 end-0 translate-middle-y icon-80 rounded-circle bg-secondary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={40}
                                                    height={40}
                                                    viewBox="0 0 40 40"
                                                    fill="none"
                                                >
                                                    <g clipPath="url(#clip0_349_1671)">
                                                        <path
                                                            d="M38.5097 3.92868L35.666 4.33501L36.0723 1.49134C36.249 0.255322 34.7435 -0.500147 33.8592 0.38501L28.6422 5.60204C28.4427 5.80157 28.3132 6.06056 28.2733 6.33993L27.6827 10.4743L21.2415 16.9155C20.7314 16.6714 20.1673 16.5234 19.5651 16.5234C17.4075 16.5234 15.6523 18.2786 15.6523 20.4362C15.6523 22.5938 17.4075 24.3489 19.5651 24.3489C21.7227 24.3489 23.4778 22.5938 23.4778 20.4362C23.4778 19.834 23.3298 19.2699 23.0858 18.7598L29.527 12.3186L33.6613 11.728C33.9407 11.6881 34.1996 11.5586 34.3992 11.3591L39.6162 6.14204C40.4978 5.26024 39.7514 3.7547 38.5097 3.92868Z"
                                                            fill="white"
                                                        />
                                                        <path
                                                            d="M30.1456 15.3886L26.0136 19.5203C26.0561 19.8204 26.0857 20.1247 26.0857 20.4364C26.0857 24.0325 23.1605 26.9577 19.5645 26.9577C15.9684 26.9577 13.0432 24.0325 13.0432 20.4364C13.0432 16.8404 15.9684 13.9152 19.5645 13.9152C19.8761 13.9152 20.1803 13.9447 20.4804 13.9872L24.6123 9.85527C23.0807 9.12152 21.3731 8.69824 19.5645 8.69824C13.092 8.69824 7.82617 13.9641 7.82617 20.4365C7.82617 26.9089 13.092 32.1748 19.5645 32.1748C26.0369 32.1748 31.3027 26.9089 31.3027 20.4365C31.3027 18.6278 30.8795 16.9202 30.1456 15.3886Z"
                                                            fill="white"
                                                        />
                                                        <path
                                                            d="M37.2844 12.161L36.2423 13.2031C35.6479 13.7979 34.8616 14.1911 34.0291 14.3099L32.615 14.512C33.4393 16.3204 33.9106 18.3222 33.9106 20.4359C33.9106 28.3468 27.4747 34.7827 19.5638 34.7827C11.653 34.7827 5.21703 28.3468 5.21703 20.4359C5.21703 12.525 11.653 6.0891 19.5638 6.0891C21.6775 6.0891 23.6793 6.56043 25.4877 7.38473L25.6898 5.97066C25.8086 5.13809 26.2018 4.35184 26.7966 3.75699L27.8384 2.71527C25.2684 1.5116 22.4665 0.87207 19.5637 0.87207C8.77609 0.87207 0 9.64824 0 20.4359C0 31.2236 8.77617 39.9997 19.5638 39.9997C30.3515 39.9997 39.1277 31.2236 39.1277 20.4359C39.1277 17.5331 38.4881 14.7311 37.2844 12.161Z"
                                                            fill="white"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div
                                    className="col-lg-4"
                                    data-aos="fade-up"
                                    data-aos-delay={400}
                                >
                                    <div className="bg-primary rounded-3 p-4 position-relative text-center hover-up">
                                        <img
                                            className="position-relative z-1"
                                            src="assets/imgs/pages/startup/page-home/home-section-3/ecom.jpg"
                                            alt="Sierlab"
                                        />
                                        <Link href="/ecommerce-development">
                                            <h5 className="text-white position-relative z-1">
                                                Ecommerce Applications
                                            </h5>
                                        </Link>
                                        <div className="position-absolute top-50 start-50 translate-middle z-0 pb-3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={249}
                                                height={249}
                                                viewBox="0 0 249 249"
                                                fill="none"
                                            >
                                                <circle
                                                    opacity="0.3"
                                                    cx="124.5"
                                                    cy="124.5"
                                                    r="124.5"
                                                    fill="url(#paint0_linear_349_1630)"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear_349_1630"
                                                        x1="124.5"
                                                        y1={0}
                                                        x2="124.5"
                                                        y2={249}
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="white" />
                                                        <stop
                                                            offset={1}
                                                            stopColor="#794AFF"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-8 mt-4 mt-lg-0"
                                    data-aos="fade-up"
                                    data-aos-delay={600}
                                >
                                    <div className="bg-transparent border border-2 rounded-3 p-5 position-relative h-100 hover-up">
                                        <Link href="/website-design">
                                            <h5 className="mb-3">
                                                Landing Pages & Websites
                                            </h5>
                                        </Link>
                                        <p className="mb-5 pb-2">
                                            High-converting landing pages and
                                            beautifully designed websites that
                                            load fast, rank well, and <br />
                                            communicate your brand’s value.{" "}
                                        </p>
                                        <Link
                                            href="/website-design"
                                            className="icon-shape icon-xl rounded-circle border mt-3 ms-auto hover-up"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                viewBox="0 0 16 16"
                                                fill="none"
                                            >
                                                <g clipPath="url(#clip0_349_577)">
                                                    <path
                                                        d="M11.8173 12.1915L16 8.00002L11.8173 3.80859L10.9325 4.69155L13.6104 7.37503L-1.55894e-07 7.37503L-2.10532e-07 8.62502L13.6104 8.62502L10.9325 11.3085L11.8173 12.1915Z"
                                                        fill="#292929"
                                                    />
                                                </g>
                                            </svg>
                                        </Link>
                                        <img
                                            className="position-absolute end-0 bottom-0 me-5 d-none d-lg-block"
                                            src="assets/imgs/pages/startup/page-home/home-section-3/landing.png"
                                            alt="Sierlab"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-3"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <div className="bg-white rounded-3 p-5 text-center position-relative h-100 d-flex flex-column mt-lg-0 mt-4 hover-up">
                                <h5 className="mt-auto position-relative z-1">
                                    <Link href="/api-integration-services">
                                        API Integrations
                                    </Link>
                                </h5>
                                <img
                                    className="position-absolute top-50 start-50 translate-middle d-none d-lg-block z-0"
                                    src="assets/imgs/pages/startup/page-home/home-section-3/paymentapi.jpg"
                                    alt="Sierlab"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
