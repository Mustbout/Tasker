import React, { useState } from "react";

export default function Try() {
    const [CardeR, setCardeR] = useState("M1 1h15M1 7h15M1 13h15");

    const handelclick = () => {
        let menu = document.getElementById("menu");
        // let hamburger = document.getElementById("hamburger");
        // let hLink = document.getElementById("hLink");
        // let carer = document.getElementById("carer");
        menu.classList.toggle("hidden");
        // setCardeR("m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6");
        // carer.classList.toggle("fa-xmark");
    };
    const hLinkClick = () => {
        let menu = document.getElementById("menu");
        menu.classList.toggle("hidden");
    };

    return (
        <div>
            <header>
                <nav className="container  flex justify-between items-center text-xl">
                    <div className=" py-5 text-orange-400 font-bold text-3xl">
                        <a href="#">
                            <span className=" text-white">Light</span>Code.
                        </a>
                    </div>
                    <div>
                        <ul className="hidden lg:flex items-center space-x-6 text-xl">
                            <li>
                                <a
                                    href="Home"
                                    className=" hover:text-orange-300  ease-in duration-300"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="blog"
                                    className=" hover:text-orange-300  ease-in duration-300"
                                >
                                    blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className=" hover:text-orange-300  ease-in duration-300"
                                >
                                    contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/pricing"
                                    className=" hover:text-orange-300  ease-in duration-300"
                                >
                                    pricing
                                </a>
                            </li>
                            <li>
                                <button className="btn">Free trial</button>
                            </li>
                        </ul>
                    </div>
                    {/* phone */}
                    <div id="hamburger" className=" cursor-pointer lg:hidden">
                        <svg
                            className="w-6 h-6 text-white dark:text-white"
                            aria-hidden="true"
                            fill="none"
                            viewBox="0 0 17 14"
                            id="carer"
                            onClick={handelclick}
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={CardeR}
                            />
                        </svg>
                    </div>
                    <div
                        id="menu"
                        className=" hidden absolute inset-0 bg-gray-900 h-[100vh] z-50"
                    >
                        <ul className=" h-full grid place-items-center py-20">
                            <svg
                                className="w-6 h-6 text-white dark:text-white"
                                aria-hidden="true"
                                fill="none"
                                viewBox="0 0 17 14"
                                id="carer"
                                onClick={handelclick}
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <li>
                                <a
                                    id="hLink"
                                    onClick={hLinkClick}
                                    href="/Home"
                                    className=" hover:text-orange-300  ease-in duration-300"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    id="hLink"
                                    onClick={hLinkClick}
                                    href="/blog"
                                    className=" hover:text-orange-300  ease-in duration-300"
                                >
                                    blog
                                </a>
                            </li>
                            <li>
                                <a
                                    id="hLink"
                                    onClick={hLinkClick}
                                    href="/contact"
                                    className=" hover:text-orange-300  ease-in duration-300"
                                >
                                    contact
                                </a>
                            </li>
                            <li>
                                <a
                                    id="hLink"
                                    onClick={hLinkClick}
                                    href="/pricing"
                                    className=" hover:text-orange-300  ease-in duration-300"
                                >
                                    pricing
                                </a>
                            </li>
                            <li>
                                <button className="btn">Free trial</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main>
                <section id="home" className=" relative">
                    <div>
                        <div className="w-80 h-80 bg-color-blob  absolute top-0 -left-5 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
                        <div className="container py-20">
                            <div className="flex flex-col items-center z-20 md:flex-row">
                                <div className=" text-center mb-12 md:text-left md:w-1/2 md:pr-10">
                                    <h1 className="title">
                                        With Task Manager make the work more
                                        easier
                                    </h1>
                                    <p className=" leading-relaxed mb-10 ">
                                        A task manager helps organize,
                                        prioritize and track daily activities
                                        and projects. It allows you to stay
                                        organized, not forget important
                                        deadlines, and work more effectively as
                                        a team.
                                    </p>
                                    <button className="btn">Free trial</button>
                                </div>
                                <div className=" md:w-1/2">
                                    <img src="public/Hero.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
