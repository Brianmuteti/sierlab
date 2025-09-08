"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    },
};
export default function Section2() {
    return (
        <>
            {/* startup home section 6 */}
            <section className="startup-section-6 pb-120 bg-linear-2 pt-120 overflow-hidden">
                <div className="container">
                    <div className="text-center">
                        <span className="text-primary">Testimonials</span>
                        <h2 className="text-dark my-3 text-anime-style-2">Happy users feedback</h2>
                    </div>
                    <div className="row pt-80">
                        <div className="col-lg-3 d-none d-lg-block">
                            <div className="text-center quote-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width={163} height={300} viewBox="0 0 163 300" fill="none">
                                    <path d="M151.357 23.0769H163V0H151.357C71.8209 0 6.41133 61.1231 0.442429 138.462C0.147476 142.269 0 146.115 0 150V300H163V138.462H23.8058C29.7126 73.8615 84.6669 23.0769 151.357 23.0769Z" fill="#292929" />
                                </svg>
                            </div>
                        </div>
                        <div className="col-lg-6 mx-lg-auto">
                            {/* Swiper */}
                            <Swiper {...swiperOptions} className="swiper slider-1 position-relative">
                                <div className="swiper-wrapper z-1">
                                    <SwiperSlide>
                                        <div className="card-testimonial mb-lg-0 mb-5 text-center" data-aos="fade-up">
                                            <div className="quote icon-shape icon-60 bg-linear-1 rounded-circle mb-5">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={28} height={20} viewBox="0 0 28 20" fill="none">
                                                    <g clipPath="url(#clip0_349_1749)">
                                                        <path d="M0.0761719 -0.0566406V19.9434L10.5762 9.94336V-0.0566406H0.0761719Z" fill="white" />
                                                        <path d="M17.5762 -0.0566406V19.9434L28.0762 9.94336V-0.0566406H17.5762Z" fill="white" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="d-flex justify-content-center gap-2">
                                                <i className="bi bi-star-fill text-primary" />
                                                <i className="bi bi-star-fill text-primary" />
                                                <i className="bi bi-star-fill text-primary" />
                                                <i className="bi bi-star-fill text-primary" />
                                                <i className="bi bi-star-fill text-primary" />
                                            </div>
                                            <h6 className="mb-0 mt-5 fw-medium">" Unrivaled brilliance surpassing all others. Highly recommended for novices and experts alike. We will hire them for sure. "</h6>
                                            <div className="d-flex align-items-center justify-content-center mt-5">
                                                <Link href="#">
                                                    <img className="rounded-circle icon-shape icon-50" src="assets/imgs/pages/startup/page-about/avatar-1.png" alt="AstraX" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="#">
                                                        <span className="btn-text">Kristin Watson</span>
                                                    </Link>
                                                    <p className="mb-0 fs-7">Head Of Idea, Treve LLC</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-testimonial mb-lg-0 mb-5 text-center" data-aos="fade-up">
                                            <div className="quote icon-shape icon-60 bg-linear-1 rounded-circle mb-5">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={28} height={20} viewBox="0 0 28 20" fill="none">
                                                    <g clipPath="url(#clip0_349_1749)">
                                                        <path d="M0.0761719 -0.0566406V19.9434L10.5762 9.94336V-0.0566406H0.0761719Z" fill="white" />
                                                        <path d="M17.5762 -0.0566406V19.9434L28.0762 9.94336V-0.0566406H17.5762Z" fill="white" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="d-flex justify-content-center gap-2">
                                                <i className="bi bi-star-fill text-primary" />
                                                <i className="bi bi-star-fill text-primary" />
                                                <i className="bi bi-star-fill text-primary" />
                                                <i className="bi bi-star-fill text-primary" />
                                                <i className="bi bi-star-fill text-primary" />
                                            </div>
                                            <h6 className="mb-0 mt-5 fw-medium">" Unrivaled brilliance surpassing all others. Highly recommended for novices and experts alike. We will hire them for sure. "</h6>
                                            <div className="d-flex align-items-center justify-content-center mt-5">
                                                <Link href="#">
                                                    <img className="rounded-circle icon-shape icon-50" src="assets/imgs/pages/startup/page-about/avatar-1.png" alt="AstraX" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="#">
                                                        <span className="btn-text">Kristin Watson</span>
                                                    </Link>
                                                    <p className="mb-0 fs-7">Head Of Idea, Treve LLC</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-testimonial mb-lg-0 mb-5 text-center" data-aos="fade-up">
                                            <div className="quote icon-shape icon-60 bg-linear-1 rounded-circle mb-5">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={28} height={20} viewBox="0 0 28 20" fill="none">
                                                    <g clipPath="url(#clip0_349_1749)">
                                                        <path d="M0.0761719 -0.0566406V19.9434L10.5762 9.94336V-0.0566406H0.0761719Z" fill="white" />
                                                        <path d="M17.5762 -0.0566406V19.9434L28.0762 9.94336V-0.0566406H17.5762Z" fill="white" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="d-flex justify-content-center gap-2">
                                                <i className="bi bi-star-fill text-primary" />
                                                <i className="bi bi-star-fill text-primary" />
                                                <i className="bi bi-star-fill text-primary" />
                                                <i className="bi bi-star-fill text-primary" />
                                                <i className="bi bi-star-fill text-primary" />
                                            </div>
                                            <h6 className="mb-0 mt-5 fw-medium">" Unrivaled brilliance surpassing all others. Highly recommended for novices and experts alike. We will hire them for sure. "</h6>
                                            <div className="d-flex align-items-center justify-content-center mt-5">
                                                <Link href="#">
                                                    <img className="rounded-circle icon-shape icon-50" src="assets/imgs/pages/startup/page-about/avatar-1.png" alt="AstraX" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="#">
                                                        <span className="btn-text">Kristin Watson</span>
                                                    </Link>
                                                    <p className="mb-0 fs-7">Head Of Idea, Treve LLC</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                            {/* Swiper JS */}
                        </div>
                        <div className="col-lg-3 d-none d-lg-block">
                            <div className="text-center quote-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width={162} height={300} viewBox="0 0 162 300" fill="none">
                                    <path d="M11.5391 276.923L0.00059711 276.923L0.000595093 300L11.5391 300C90.3621 300 155.185 238.877 161.101 161.538C161.393 157.731 161.539 153.885 161.539 150L161.539 0L0.00062132 -1.41221e-05L0.000607197 161.538L137.947 161.538C132.093 226.138 77.6314 276.923 11.5391 276.923Z" fill="#292929" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
