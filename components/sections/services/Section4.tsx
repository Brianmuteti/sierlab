import Link from "next/link";

export default function Section4() {
    return (
        <>
            {/*startup services section 4*/}
            <section className="startup-services-section-4 position-relative overflow-hidden py-90 pt-5">
                <div>
                    <div className="text-center position-relative">
                        <div className="position-relative bg-white icon-shape icon-160 rounded-circle border border-primary z-1">
                            <svg
                                className="fill-primary"
                                xmlns="http://www.w3.org/2000/svg"
                                width={41}
                                height={40}
                                viewBox="0 0 41 40"
                                fill="none"
                            >
                                <path
                                    d="M20.7919 26.7016C20.6523 26.4921 20.5127 26.3874 20.373 26.3874C20.2334 26.3874 20.0938 26.4921 19.9542 26.7016L12.2055 39.5812C11.9961 39.7906 11.6819 39.9302 11.2631 40C10.914 40 10.5301 39.8953 10.1113 39.6859L5.08508 36.1257C4.387 35.637 4.31719 35.0436 4.87565 34.3456L14.0903 23.0367C14.2997 22.8272 14.3695 22.6178 14.2997 22.4084C14.2299 22.199 14.0205 22.0593 13.6715 21.9895L0.791885 18.4293C0.0239966 18.2199 -0.185428 17.5916 0.163612 16.5445L2.15314 11.2042C2.50218 10.3665 3.02574 10.1571 3.72382 10.5759L15.8704 15.7068C16.2195 15.8464 16.4638 15.8813 16.6034 15.8115C16.8128 15.6719 16.9175 15.4276 16.9175 15.0785L15.8704 1.15184C15.8006 0.872604 15.8704 0.628275 16.0798 0.418849C16.2893 0.139616 16.6034 0 17.0223 0H23.7238C24.1427 0 24.4219 0.139616 24.5615 0.418849C24.7709 0.628275 24.8757 0.872604 24.8757 1.15184L23.8285 15.1832C23.7587 15.8115 24.0031 16.0209 24.5615 15.8115L37.127 10.3665C37.9647 9.94764 38.5231 10.2269 38.8024 11.2042L40.4777 16.4398C40.757 17.4171 40.4777 18.0105 39.6401 18.2199L27.0746 21.9895C26.7954 22.0593 26.6209 22.2339 26.551 22.5131C26.551 22.7225 26.6558 22.9319 26.8652 23.1414L35.661 33.822C35.9402 34.171 36.0449 34.555 35.9751 34.9738C35.9053 35.3229 35.5912 35.7068 35.0327 36.1257L30.6348 39.1623C30.1462 39.5113 29.6924 39.651 29.2736 39.5812C28.8547 39.5113 28.5406 39.3717 28.3312 39.1623L20.7919 26.7016Z"
                                    fill="#0D6EFD"
                                />
                            </svg>
                            <div className="position-absolute top-50 start-50 translate-middle w-100">
                                <h6 className="circle-text rotateme text-dark fw-semibold">
                                    our digital business approach - 2020 -
                                </h6>
                            </div>
                        </div>
                        <div className="position-absolute top-50 start-50 translate-middle w-100 border-top z-0" />
                    </div>
                </div>
                <div className="container pt-80">
                    <div className="text-center mb-7">
                        <span className="text-primary">
                            Start Your Project Now
                        </span>
                        <h2 className="text-dark my-3 text-anime-style-2">
                            Prepared to Elevate <br />
                            Your{" "}
                            <span className="text-primary">
                                Online Business?
                            </span>
                        </h2>
                        <p className="text-anime-style-1">
                            Boost your sales and stay ahead of the competition
                            by being one of the <br />
                            first to leverage our groundbreaking solutions.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 mx-lg-auto">
                            <div className="row g-4">
                                {/* <div className="col-lg-12"> */}
                                <div
                                    className="d-flex gap-5 border p-5 mb-5 rounded-4"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                >
                                    <div>
                                        <img
                                            src="assets/imgs/pages/startup/page-services/icon-7.png"
                                            alt="Sierlab"
                                        />
                                    </div>
                                    <div>
                                        <h6 className="fw-semibold">
                                            Head office
                                        </h6>
                                        <Link href="#" className="d-flex gap-2">
                                            <div className="icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <g opacity="0.4">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M6.05991 4.86069C9.34032 1.58029 14.6589 1.58029 17.9393 4.86069C21.2197 8.1411 21.2197 13.4597 17.9393 16.7401L11.9996 22.6798L6.05991 16.7401C2.77951 13.4597 2.77951 8.1411 6.05991 4.86069ZM11.9996 13.2004C13.3251 13.2004 14.3996 12.1259 14.3996 10.8004C14.3996 9.47491 13.3251 8.40039 11.9996 8.40039C10.6741 8.40039 9.59961 9.47491 9.59961 10.8004C9.59961 12.1259 10.6741 13.2004 11.9996 13.2004Z"
                                                            fill="#292929"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                            <p className="text-dark">
                                                Lumumba Drive, Roysambu,
                                                Nairobi, Kenya
                                            </p>
                                        </Link>
                                        <Link href="#" className="d-flex gap-2">
                                            <div className="icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <g opacity="0.4">
                                                        <path
                                                            d="M2.40439 7.06105L12.0003 11.859L21.5964 7.06099C21.524 5.80056 20.479 4.80078 19.2004 4.80078H4.80039C3.52181 4.80078 2.47675 5.8006 2.40439 7.06105Z"
                                                            fill="#292929"
                                                        />
                                                        <path
                                                            d="M21.6004 9.74227L12.0003 14.5423L2.40039 9.74233V16.8008C2.40039 18.1263 3.47491 19.2008 4.80039 19.2008H19.2004C20.5259 19.2008 21.6004 18.1263 21.6004 16.8008V9.74227Z"
                                                            fill="#292929"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                            <p className="text-dark">
                                                support@sierlab.com
                                            </p>
                                        </Link>
                                        <Link href="#" className="d-flex gap-2">
                                            <div className="icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={18}
                                                    height={18}
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                >
                                                    <g
                                                        opacity="0.4"
                                                        clipPath="url(#clip0_1586_4061)"
                                                    >
                                                        <path
                                                            d="M17.5102 13.2102L14.9983 10.6982C14.1012 9.80111 12.576 10.16 12.2172 11.3262C11.948 12.1337 11.0509 12.5822 10.2435 12.4028C8.44926 11.9542 6.02701 9.62168 5.57845 7.73772C5.30931 6.93027 5.84759 6.03314 6.655 5.76404C7.82127 5.40519 8.18012 3.88007 7.28299 2.98295L4.77104 0.470991C4.05334 -0.156997 2.97679 -0.156997 2.3488 0.470991L0.644257 2.17553C-1.06028 3.96978 0.823682 8.72455 5.04018 12.941C9.25667 17.1575 14.0114 19.1313 15.8057 17.337L17.5102 15.6324C18.1383 14.9147 18.1383 13.8382 17.5102 13.2102Z"
                                                            fill="#292929"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                            <p className="text-dark mb-0">
                                                contact@sierlab.com
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap align-items-center justify-content-center gap-4 mt-6">
                        <div className="hover-up">
                            <Link
                                data-aos="fade-up"
                                data-aos-delay={200}
                                href="/contact"
                                className="btn btn-primary"
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
                        <div className="hover-up">
                            <Link
                                data-aos="fade-up"
                                data-aos-delay={400}
                                href="/contact"
                                className="btn btn-outline-primary"
                            >
                                <span>Get free quote</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <g clipPath="url(#clip0_1580_1552)">
                                        <path
                                            d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z"
                                            fill="#794AFF"
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
