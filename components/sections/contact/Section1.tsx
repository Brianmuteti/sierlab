"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { useState } from "react";
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
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
};

export default function Section1() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!form.name.trim()) newErrors.name = "Full name is required.";
        if (!form.email.trim()) {
            newErrors.email = "Email address is required.";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
        ) {
            newErrors.email = "Invalid email address.";
        }
        if (!form.message.trim()) newErrors.message = "Message is required.";
        return newErrors;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setSubmitting(true);
        setSuccess(null);

        try {
            // await fetch("/api/contact", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify(form),
            // });

            setSuccess("Thank you for contacting us!");
            setForm({ name: "", email: "", company: "", message: "" });
            setErrors({});
        } catch (error) {
            setSuccess("Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            {/*startup contact section 1*/}
            <section className="startup-contact-section-1 position-relative py-120 border-bottom">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="feedback position-relative rounded-4 overflow-hidden d-inline-block h-100 w-100 wow img-custom-anim-top">
                                <img
                                    className="w-100"
                                    src="assets/imgs/pages/startup/contact-us.png"
                                    alt="AstraX"
                                />
                                <div className="position-absolute start-0 bottom-0 mx-lg-7 mx-md-5 mx-4 mb-5 w-75">
                                    <div
                                        className="tag-work bg-linear-2 rounded-4 p-4  mb-3"
                                        data-aos="fade-up"
                                        data-aos-delay={200}
                                    >
                                        <h6 className="ps-2 fs-6">
                                            Company Address
                                        </h6>
                                        <Link href="#" className="d-flex gap-2">
                                            <div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="#292929"
                                                >
                                                    <g opacity="0.4">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M6.0604 4.86069C9.3408 1.58029 14.6594 1.58029 17.9398 4.86069C21.2202 8.1411 21.2202 13.4597 17.9398 16.7401L12.0001 22.6798L6.0604 16.7401C2.78 13.4597 2.78 8.1411 6.0604 4.86069ZM12.0001 13.2004C13.3256 13.2004 14.4001 12.1259 14.4001 10.8004C14.4001 9.47491 13.3256 8.40039 12.0001 8.40039C10.6746 8.40039 9.6001 9.47491 9.6001 10.8004C9.6001 12.1259 10.6746 13.2004 12.0001 13.2004Z"
                                                            fill="#292929"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                            <p className="">
                                                Lumumba drive, Roysambu,
                                                <br /> Nairobi, Kenya
                                            </p>
                                        </Link>
                                    </div>
                                    <div
                                        className="tag-work bg-linear-2 rounded-4 p-4  mb-3"
                                        data-aos="fade-up"
                                        data-aos-delay={200}
                                    >
                                        <h6 className=" ps-2 fs-6">
                                            Phone & Email support 24/7
                                        </h6>
                                        <Link href="#" className="d-flex gap-2">
                                            <div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <g opacity="0.4">
                                                        <path
                                                            d="M2.4039 7.06105L11.9998 11.859L21.5959 7.06099C21.5235 5.80056 20.4785 4.80078 19.1999 4.80078H4.7999C3.52132 4.80078 2.47626 5.8006 2.4039 7.06105Z"
                                                            fill="#292929"
                                                        />
                                                        <path
                                                            d="M21.5999 9.74227L11.9998 14.5423L2.3999 9.74233V16.8008C2.3999 18.1263 3.47442 19.2008 4.7999 19.2008H19.1999C20.5254 19.2008 21.5999 18.1263 21.5999 16.8008V9.74227Z"
                                                            fill="#292929"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                            <p className="">
                                                support@sierlab.com <br />
                                                +254731824251
                                            </p>
                                        </Link>
                                    </div>
                                    {/* <Swiper {...swiperOptions} className="swiper slider-1">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide>
                                                <div>
                                                    <h6 className="text-white fw-regular mb-5">" Unrivaled brilliance surpassing all others. Highly recommended for novices and experts alike. We will hire them for sure. "</h6>
                                                    <div className="d-flex flex-wrap gap-2 align-items-center">
                                                        <Link href="#" className="d-flex align-items-center">
                                                            <img className="rounded-circle avatar avatar-md" src="assets/imgs/pages/startup/page-blog-details/avatar-1.png" alt="AstraX" />
                                                            <p className="text-white mb-0 ms-3">Kristin Watson</p>
                                                        </Link>
                                                        <ul className="m-0 text-white">
                                                            <li>
                                                                <p className="text-white mb-0">AliThemes CEO</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div>
                                                    <h6 className="text-white fw-regular mb-5">" Unrivaled brilliance surpassing all others. Highly recommended for novices and experts alike. We will hire them for sure. "</h6>
                                                    <div className="d-flex flex-wrap gap-2 align-items-center">
                                                        <Link href="#" className="d-flex align-items-center">
                                                            <img className="rounded-circle avatar avatar-md" src="assets/imgs/pages/startup/page-blog/avatar-4.png" alt="AstraX" />
                                                            <p className="text-white mb-0 ms-3">Jane Cooper</p>
                                                        </Link>
                                                        <ul className="m-0 text-white">
                                                            <li>
                                                                <p className="text-white mb-0">AliThemes CEO</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div>
                                                    <h6 className="text-white fw-regular mb-5">" Unrivaled brilliance surpassing all others. Highly recommended for novices and experts alike. We will hire them for sure. "</h6>
                                                    <div className="d-flex flex-wrap gap-2 align-items-center">
                                                        <Link href="#" className="d-flex align-items-center">
                                                            <img className="rounded-circle avatar avatar-md" src="assets/imgs/pages/startup/page-blog/avatar-4.png" alt="AstraX" />
                                                            <p className="text-white mb-0 ms-3">Jane Cooper</p>
                                                        </Link>
                                                        <ul className="m-0 text-white">
                                                            <li>
                                                                <p className="text-white mb-0">AliThemes CEO</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div>
                                                    <h6 className="text-white fw-regular mb-5">" Unrivaled brilliance surpassing all others. Highly recommended for novices and experts alike. We will hire them for sure. "</h6>
                                                    <div className="d-flex flex-wrap gap-2 align-items-center">
                                                        <Link href="#" className="d-flex align-items-center">
                                                            <img className="rounded-circle avatar avatar-md" src="assets/imgs/pages/startup/page-blog/avatar-4.png" alt="AstraX" />
                                                            <p className="text-white mb-0 ms-3">Jane Cooper</p>
                                                        </Link>
                                                        <ul className="m-0 text-white">
                                                            <li>
                                                                <p className="text-white mb-0">AliThemes CEO</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </div>
                                        <div className="swiper-pagination position-relative text-start mt-8" />
                                    </Swiper> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow img-custom-anim-top">
                            <div className="px-md-5 px-4 py-7 rounded-4 bg-primary h-100 position-relative">
                                <div className="position-absolute top-0 end-0 m-5">
                                    <svg
                                        className="flickering"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={46}
                                        height={46}
                                        viewBox="0 0 46 46"
                                        fill="none"
                                    >
                                        <path
                                            d="M23 43.125C23 43.125 23 23 38.0938 23C23 23 23 2.875 23 2.875C23 2.875 23 23 7.90625 23C23 23 23 43.125 23 43.125Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M38.0938 19.4062C38.0938 19.4062 38.0938 10.7812 43.8438 10.7812C38.0938 10.7812 38.0938 2.15625 38.0938 2.15625C38.0938 2.15625 38.0938 10.7812 32.3438 10.7812C38.0938 10.7812 38.0938 19.4062 38.0938 19.4062Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M7.90625 43.8438C7.90625 43.8438 7.90625 35.2188 13.6562 35.2188C7.90625 35.2188 7.90625 26.5938 7.90625 26.5938C7.90625 26.5938 7.90625 35.2188 2.15625 35.2188C7.90625 35.2188 7.90625 43.8438 7.90625 43.8438Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <span className="text-white text-decoration-underline">
                                    Connect with Us
                                </span>
                                <h3 className="text-white my-2">
                                    Get In Touch
                                </h3>
                                <p className="text-white">
                                    We’d love to hear from you! Whether you have
                                    questions, need assistance, or want to
                                    explore opportunities for collaboration, our
                                    team is here to help.
                                </p>
                                <form
                                    action="#"
                                    className="input-group mb-3 mt-4 position-relative"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <label
                                                htmlFor="username"
                                                className="fs-7 fw-bold mb-3 text-white"
                                            >
                                                Full name
                                            </label>
                                            <input
                                                type="text"
                                                className="py-3 form-control border-0"
                                                name="name"
                                                placeholder=""
                                                id="username"
                                                value={form.name}
                                                onChange={handleChange}
                                            />
                                            {errors.name && (
                                                <div className="text-danger mt-1">
                                                    {errors.name}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-12">
                                            <label
                                                htmlFor="email"
                                                className="fs-7 fw-bold mb-3 text-white"
                                            >
                                                Email address
                                            </label>
                                            <input
                                                type="email"
                                                className="py-3 form-control border-0"
                                                name="email"
                                                placeholder=""
                                                id="email"
                                                value={form.email}
                                                onChange={handleChange}
                                            />
                                            {errors.email && (
                                                <div className="text-danger mt-1">
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-12">
                                            <label
                                                htmlFor="company"
                                                className="fs-7 fw-bold mb-3 text-white"
                                            >
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                className="py-3 form-control border-0"
                                                name="company"
                                                placeholder=""
                                                id="company"
                                                value={form.company}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label
                                                htmlFor="message"
                                                className="fs-7 fw-bold mb-3 text-white"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                name="message"
                                                id="message"
                                                cols={30}
                                                rows={8}
                                                className="p-3 form-control border-0"
                                                placeholder=""
                                                value={form.message}
                                                onChange={handleChange}
                                            />
                                            {errors.message && (
                                                <div className="text-danger mt-1">
                                                    {errors.message}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-12">
                                            <button
                                                aria-label="submit"
                                                className="btn btn-dark"
                                                type="submit"
                                                data-aos="fade-zoom-in"
                                                data-aos-delay={100}
                                                disabled={submitting}
                                            >
                                                <span>
                                                    {submitting
                                                        ? "Submitting..."
                                                        : "get a quote"}
                                                </span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                >
                                                    <g clipPath="url(#clip0_886_362)">
                                                        <path
                                                            d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z"
                                                            fill="white"
                                                        />
                                                    </g>
                                                </svg>
                                            </button>
                                            {success && (
                                                <div className="mt-3 text-white">
                                                    {success}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
