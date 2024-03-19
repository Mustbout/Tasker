import React, { useState } from "react";

export default function NavBar() {
    const [navB, setNavB] = useState("M1 1h15M1 7h15M1 13h15");
    const [menuHidden, setMenuHidden] = useState("hidden");
    const handelclick = () => {
        let menu2 = document.getElementById("menu2");
        menu2.classList.toggle(menuHidden);
        if (navB === "M1 1h15M1 7h15M1 13h15") {
            setNavB("m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6");
        } else {
            setNavB("M1 1h15M1 7h15M1 13h15");
        }
    };
    const handelLink = () => {
        let menu2 = document.getElementById("menu2");
        menu2.classList.toggle(menuHidden);
        if (navB === "M1 1h15M1 7h15M1 13h15") {
            setNavB("m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6");
        } else {
            setNavB("M1 1h15M1 7h15M1 13h15");
        }
    };
    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full top-0   start-0 border-b border-gray-200 dark:border-gray-600  block bg-white z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    href="#"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img className="w-32" src="public/image/TaskR.png" alt="" />
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        type="button"
                        className="text-white bg-btn hover:opacity-80  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center flex "
                    >
                        <div className="mx-1">log in</div>
                        <svg
                            className="w-6 h-6 text-white dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 16"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth={2}
                                d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                            />
                        </svg>
                    </button>
                    <div
                        id="hamburger"
                        className="cursor-pointer md:hidden text-white  hover:opacity-80  focus:ring-4 focus:outline-none focus:ring-btn-300 px-4 py-2 "
                    >
                        <svg
                            className="w-6 h-6 text-gray-800 dark:text-white"
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
                                d={navB}
                            />
                        </svg>
                    </div>
                </div>
                {/* menu */}
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-20 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a
                                href="#"
                                className=" py-2 px-3  text-gray-800  hover:text-btn focus:text-btn rounded  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 flex"
                            >
                                <svg
                                    className="w-5 h-5 mb-2 dark:group-hover:text-blue-500 relative right-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={handelclick}
                                href="#"
                                className=" py-2 px-3  text-gray-800  hover:text-btn focus:text-btn rounded  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 flex"
                            >
                                <svg
                                    className="w-6 h-6 dark:text-white relative right-2 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth={2}
                                        d="M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
                                    />
                                </svg>
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className=" py-2 px-3  text-gray-800  hover:text-btn focus:text-btn rounded  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 flex"
                            >
                                <svg
                                    className="w-5 h-5 mb-2 dark:group-hover:text-blue-500  relative top-1 right-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                </svg>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                {/* menu  */}

                <div
                    className="items-center justify-between hidden w-full   md:w-auto md:order-1 h-[100vh] z-50"
                    id="menu2"
                >
                    <ul className="flex flex-col items-center md:hidden p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-20 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
                        <li className="flex bg-gray-200 w-full justify-center items-center rounded-lg py-2 my-2">
                            <a
                                href="#"
                                onClick={handelLink}
                                className=" py-2 px-3  text-gray-800  hover:text-btn focus:text-btn rounded  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 flex "
                            >
                                <svg
                                    className="w-5 h-5 mb-2 dark:group-hover:text-blue-500 relative right-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                Home
                            </a>
                        </li>
                        <li className="flex bg-gray-200 w-full justify-center items-center rounded-lg py-2 my-2 ">
                            <a
                                href="#"
                                onClick={handelLink}
                                className=" py-2 px-3  text-gray-800  hover:text-btn focus:text-btn rounded  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 flex"
                            >
                                <svg
                                    className="w-6 h-6 dark:text-white relative right-2 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth={2}
                                        d="M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
                                    />
                                </svg>
                                About
                            </a>
                        </li>
                        <li className="flex bg-gray-200 w-full justify-center items-center rounded-lg py-2 my-2">
                            <a
                                href="#"
                                onClick={handelLink}
                                className=" py-2 px-3  text-gray-800  hover:text-btn focus:text-btn rounded  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 flex"
                            >
                                <svg
                                    className="w-5 h-5 mb-2 dark:group-hover:text-blue-500  relative top-1 right-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                </svg>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
