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
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
};

export default function Section1({ posts }: { posts: any[] }) {
    return (
        <>
            {/*startup blog-section-1*/}
            <section className="startup-blog-section-1 position-relative">
                <div className="rounded-bottom-6 py-120">
                    <div className="container">
                        <h5 className="text-primary text-anime-style-2">
                            Featured <span className="text-dark">Posts</span>
                        </h5>
                        <div className="row">
                            <div className="position-relative">
                                <Swiper
                                    {...swiperOptions}
                                    className="swiper slider-1 pt-4 pb-7"
                                >
                                    <div className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="cart-posts position-relative">
                                                <div
                                                    className="image img-fluid"
                                                    data-background="assets/imgs/pages/startup/page-blog/blog-img.jpg"
                                                />
                                                <div className="card-content">
                                                    <div className="d-flex">
                                                        <span className="bg-primary px-2 py-1 rounded-2 me-3 text-white">
                                                            Api
                                                        </span>
                                                        <span className="bg-primary px-2 py-1 rounded-2 text-white">
                                                            AI
                                                        </span>
                                                    </div>
                                                    <Link href="/blog-details">
                                                        <h4 className="text-white my-3">
                                                            Api Integration:
                                                            Consulting Insights
                                                            for <br />
                                                            Small Businesses and
                                                            Startup
                                                        </h4>
                                                    </Link>
                                                    <div className="d-flex align-items-center">
                                                        <Link
                                                            href="#"
                                                            className="d-flex align-items-center"
                                                        >
                                                            <img
                                                                className="rounded-circle avatar avatar-md"
                                                                src="assets/imgs/pages/startup/page-blog/brian.png"
                                                                alt="AstraX"
                                                            />
                                                            <p className="text-white mb-0 ms-3">
                                                                Brian Muteti
                                                            </p>
                                                        </Link>
                                                        <p className="text-white mb-0 ms-4">
                                                            August 6, 2025
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                </Swiper>
                                <div className="swiper-button-prev start-0 bg-white icon-60 d-none d-lg-flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <g clipPath="url(#clip0_349_1382)">
                                            <path
                                                d="M4.18271 3.80852L4.99823e-08 7.99998L4.18271 12.1914L5.06751 11.3084L2.3896 8.62497L16 8.62497L16 7.37498L2.3896 7.37498L5.06751 4.69148L4.18271 3.80852Z"
                                                fill="#292929"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <div className="swiper-button-next start-100 ms-5 bg-white icon-60 d-none d-lg-flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <g clipPath="url(#clip0_349_1381)">
                                            <path
                                                d="M11.8173 12.1915L16 8.00002L11.8173 3.80859L10.9325 4.69155L13.6104 7.37503L-1.55894e-07 7.37503L-2.10532e-07 8.62502L13.6104 8.62502L10.9325 11.3085L11.8173 12.1915Z"
                                                fill="#292929"
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h5 className="text-primary mb-5 text-anime-style-2">
                            Latest <span className="text-dark">Posts</span>
                        </h5>
                        <div className="row g-4">
                            {posts.map((post) => (
                                <div
                                    className="col-md-6 col-lg-4"
                                    key={post.slug}
                                    data-aos="fade-up"
                                >
                                    <div className="card h-100 shadow-sm border-0">
                                        <img
                                            src={post.meta.cover}
                                            alt={post.meta.title}
                                            className="card-img-top"
                                        />
                                        <div className="card-body">
                                            <div className="d-flex align-items-center mb-3">
                                                <img
                                                    src={
                                                        post.meta.avatar ||
                                                        "/assets/imgs/default-avatar.png"
                                                    }
                                                    alt={post.meta.author}
                                                    className="rounded-circle avatar avatar-sm me-2"
                                                />
                                                <span className="text-muted small">
                                                    {post.meta.author}
                                                </span>
                                                <span className="text-muted small ms-3">
                                                    {post.meta.date}
                                                </span>
                                            </div>
                                            <h5 className="card-title">
                                                {post.meta.title}
                                            </h5>
                                            <p className="card-text">
                                                {post.meta.description}
                                            </p>
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="btn btn-outline-primary mt-2"
                                            >
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {posts.length > 9 && (
                            <div className="d-flex justify-content-center">
                                <div className="hover-up">
                                    <Link
                                        href="#"
                                        className="btn btn-primary mt-5"
                                        data-aos="fade-up"
                                    >
                                        Load more posts
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={17}
                                            viewBox="0 0 16 17"
                                            fill="none"
                                        >
                                            <g clipPath="url(#clip0_1680_4353)">
                                                <path
                                                    d="M15.8167 7.58494C15.8165 7.58475 15.8163 7.58453 15.8161 7.58434L12.5504 4.33434C12.3057 4.09087 11.91 4.09178 11.6665 4.33647C11.423 4.58112 11.4239 4.97684 11.6686 5.22034L13.8612 7.40234H0.625C0.279813 7.40234 0 7.68215 0 8.02734C0 8.37253 0.279813 8.65234 0.625 8.65234H13.8612L11.6686 10.8343C11.4239 11.0778 11.423 11.4736 11.6665 11.7182C11.91 11.9629 12.3058 11.9638 12.5504 11.7203L15.8162 8.47034C15.8163 8.47015 15.8165 8.46994 15.8167 8.46975C16.0615 8.22544 16.0607 7.82844 15.8167 7.58494Z"
                                                    fill="white"
                                                />
                                            </g>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
