"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
};

export default function Section3() {
    return (
        <>
            {/*startup integrations section 2*/}
            <section className="startup-integrations-section-2 position-relative overflow-hidden py-90 border-bottom">
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="text-primary">News &amp; Blog</span>
                        <h2 className="text-dark my-3 text-anime-style-2">Unlock Meaningful Insights.</h2>
                    </div>
                    <div className="row">
                        <div className="position-relative">
                            <Swiper {...swiperOptions} className="swiper slider-3 py-3">
                                <div className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="border rounded-4 p-3 bg-white card-news hover-up mb-lg-0 h-100 text-center" data-aos="fade-up" data-aos-delay={0}>
                                            <div className="position-relative">
                                                <Link href="/blog-details">
                                                    <img className="rounded-4 w-100" src="assets/imgs/pages/startup/page-integrations/img-1.png" alt="AstraX" />
                                                </Link>
                                                <span className="badge badge-primary position-absolute top-0 start-0 m-3">News</span>
                                            </div>
                                            <div className="card-body py-3">
                                                <h6 className="title mt-4 mb-3 text-center">
                                                    <Link href="/blog-details">21 Job Interview Tips: How To Make a Great Impression</Link>
                                                </h6>
                                                <div className="d-flex align-items-center justify-content-center mt-5">
                                                    <Link href="#">
                                                        <img className="rounded-circle icon-shape icon-50" src="assets/imgs/pages/ai-solutions/page-home/home-section-8/avatar-3.png" alt="AstraX" />
                                                    </Link>
                                                    <div className="text-start ms-3">
                                                        <Link href="#">
                                                            <span className="btn-text">Guy Hawkins</span>
                                                        </Link>
                                                        <p className="mb-0 fs-7">22 January 2025</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="border rounded-4 p-3 bg-white card-news hover-up mb-lg-0 h-100 text-center" data-aos="fade-up" data-aos-delay={200}>
                                            <div className="position-relative">
                                                <Link href="/blog-details">
                                                    <img className="rounded-4 w-100" src="assets/imgs/pages/startup/page-integrations/img-2.png" alt="AstraX" />
                                                </Link>
                                                <span className="badge badge-primary position-absolute top-0 start-0 m-3">News</span>
                                            </div>
                                            <div className="card-body py-3">
                                                <h6 className="title mt-4 mb-3 text-center">
                                                    <Link href="/blog-details">21 Job Interview Tips: How To Make a Great Impression</Link>
                                                </h6>
                                                <div className="d-flex align-items-center justify-content-center mt-5">
                                                    <Link href="#">
                                                        <img className="rounded-circle icon-shape icon-50" src="assets/imgs/pages/ai-solutions/page-home/home-section-8/avatar-3.png" alt="AstraX" />
                                                    </Link>
                                                    <div className="text-start ms-3">
                                                        <Link href="#">
                                                            <span className="btn-text">Guy Hawkins</span>
                                                        </Link>
                                                        <p className="mb-0 fs-7">22 January 2025</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="border rounded-4 p-3 bg-white card-news hover-up mb-lg-0 h-100 text-center" data-aos="fade-up" data-aos-delay={400}>
                                            <div className="position-relative">
                                                <Link href="/blog-details">
                                                    <img className="rounded-4 w-100" src="assets/imgs/pages/startup/page-integrations/img-3.png" alt="AstraX" />
                                                </Link>
                                                <span className="badge badge-primary position-absolute top-0 start-0 m-3">News</span>
                                            </div>
                                            <div className="card-body py-3">
                                                <h6 className="title mt-4 mb-3 text-center">
                                                    <Link href="/blog-details">21 Job Interview Tips: How To Make a Great Impression</Link>
                                                </h6>
                                                <div className="d-flex align-items-center justify-content-center mt-5">
                                                    <Link href="#">
                                                        <img className="rounded-circle icon-shape icon-50" src="assets/imgs/pages/ai-solutions/page-home/home-section-8/avatar-3.png" alt="AstraX" />
                                                    </Link>
                                                    <div className="text-start ms-3">
                                                        <Link href="#">
                                                            <span className="btn-text">Guy Hawkins</span>
                                                        </Link>
                                                        <p className="mb-0 fs-7">22 January 2025</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="border rounded-4 p-3 bg-white card-news hover-up mb-lg-0 h-100 text-center" data-aos="fade-up" data-aos-delay={600}>
                                            <div className="position-relative">
                                                <Link href="/blog-details">
                                                    <img className="rounded-4 w-100" src="assets/imgs/pages/startup/page-integrations/img-2.png" alt="AstraX" />
                                                </Link>
                                                <span className="badge badge-primary position-absolute top-0 start-0 m-3">News</span>
                                            </div>
                                            <div className="card-body py-3">
                                                <h6 className="title mt-4 mb-3 text-center">
                                                    <Link href="/blog-details">21 Job Interview Tips: How To Make a Great Impression</Link>
                                                </h6>
                                                <div className="d-flex align-items-center justify-content-center mt-5">
                                                    <Link href="#">
                                                        <img className="rounded-circle icon-shape icon-50" src="assets/imgs/pages/ai-solutions/page-home/home-section-8/avatar-3.png" alt="AstraX" />
                                                    </Link>
                                                    <div className="text-start ms-3">
                                                        <Link href="#">
                                                            <span className="btn-text">Guy Hawkins</span>
                                                        </Link>
                                                        <p className="mb-0 fs-7">22 January 2025</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                            <div className="swiper-button-prev start-0 bg-white icon-60 d-none d-lg-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <g clipPath="url(#clip0_349_1382)">
                                        <path d="M4.18271 3.80852L4.99823e-08 7.99998L4.18271 12.1914L5.06751 11.3084L2.3896 8.62497L16 8.62497L16 7.37498L2.3896 7.37498L5.06751 4.69148L4.18271 3.80852Z" fill="#292929" />
                                    </g>
                                </svg>
                            </div>
                            <div className="swiper-button-next start-100 ms-5 bg-white icon-60 d-none d-lg-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <g clipPath="url(#clip0_349_1381)">
                                        <path d="M11.8173 12.1915L16 8.00002L11.8173 3.80859L10.9325 4.69155L13.6104 7.37503L-1.55894e-07 7.37503L-2.10532e-07 8.62502L13.6104 8.62502L10.9325 11.3085L11.8173 12.1915Z" fill="#292929" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
