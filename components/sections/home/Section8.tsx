import Link from "next/link";

export default function Section8() {
    return (
        <>
            {/*startup home section 8*/}
            <section className="startup-section-8 position-relative overflow-hidden pt-200">
                <div className="container position-relative z-2">
                    <div className="row">
                        <div className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 60 60" fill="none">
                                <path opacity="0.4" d="M35.5537 7.19449C31.8278 4.89645 27.4125 3.63281 22.8516 3.63281C10.436 3.63281 0 12.8828 0 24.7266C0 28.8791 1.29 32.8598 3.74039 36.2978L0.317344 47.0446C-0.0442969 48.1798 0.806016 49.3359 1.99254 49.3359C2.26383 49.3359 2.53688 49.2732 2.78883 49.145L13.1988 43.852C13.6204 44.0336 14.0471 44.2024 14.4783 44.3592C12.0681 40.5973 10.7812 36.2789 10.7812 31.7578C10.7812 18.2933 22.1107 7.94203 35.5537 7.19449Z" fill="white" />
                                <path
                                    d="M56.2596 43.329C58.71 39.8911 60 35.9104 60 31.7578C60 19.9097 49.5595 10.6641 37.1484 10.6641C24.7329 10.6641 14.2969 19.914 14.2969 31.7578C14.2969 43.6059 24.7373 52.8516 37.1484 52.8516C40.4786 52.8516 43.7967 52.1729 46.8006 50.883L57.2112 56.1763C57.8429 56.4975 58.6061 56.4079 59.1462 55.9488C59.6863 55.4898 59.8979 54.7513 59.6828 54.0759L56.2596 43.329ZM30 33.5156C29.0292 33.5156 28.2422 32.7286 28.2422 31.7578C28.2422 30.787 29.0292 30 30 30C30.9708 30 31.7578 30.787 31.7578 31.7578C31.7578 32.7286 30.9708 33.5156 30 33.5156ZM37.0312 33.5156C36.0605 33.5156 35.2734 32.7286 35.2734 31.7578C35.2734 30.787 36.0605 30 37.0312 30C38.002 30 38.7891 30.787 38.7891 31.7578C38.7891 32.7286 38.002 33.5156 37.0312 33.5156ZM44.0625 33.5156C43.0917 33.5156 42.3047 32.7286 42.3047 31.7578C42.3047 30.787 43.0917 30 44.0625 30C45.0333 30 45.8203 30.787 45.8203 31.7578C45.8203 32.7286 45.0333 33.5156 44.0625 33.5156Z"
                                    fill="white"
                                />
                            </svg>
                            <h2 className="text-white my-3 text-anime-style-2">Have a project in mind?</h2>
                            <p className="text-stroke mb-8">
                                We offer a wide range of digital marketing services that cater to businesses of all <br />
                                sizes a forward-thinking and clever approach.
                            </p>
                            <Link href="/contact" className="btn btn-outline-secondary">
                                <span>let’s talk</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <g clipPath="url(#clip0_816_117)">
                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#292929" />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="img-bg position-absolute top-50 start-50 translate-middle w-100 h-100" data-background="assets/imgs/pages/startup/page-home/home-section-7/img-bg.png" />
                <div className="linearGradient position-absolute top-50 start-50 translate-middle w-100 h-100" />
            </section>
        </>
    );
}
