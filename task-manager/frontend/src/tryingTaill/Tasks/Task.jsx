import React, { useState } from "react";

export default function Task({ content, title, image }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [crudModal, setCrudModal] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const tooglecrudModal = () => {
        setCrudModal(!crudModal);
    };

    return (
        <div className="max-w-md mb-3 z-50 ">
            <div className="bg-white border border-gray-200 rounded-lg shadow sm:p-5 dark:bg-gray-800 dark:border-gray-700 ">
                <div className="flex items-center justify-between mb-4 ">
                    <h5 className="text-md font-bold leading-none text-gray-800 dark:text-white z-0">
                        {title}
                    </h5>
                    <div className="flex items-center">
                        <button onClick={toggleDropdown}>
                            <img
                                className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800 mr-3"
                                src={image}
                                alt=""
                            />
                        </button>
                        <button
                            data-modal-target="crud-modal"
                            data-modal-toggle="crud-modal"
                            className="dark:text-blue-500"
                            onClick={toggleDropdown}
                        >
                            <svg
                                className="w-6 h-6 text-gray-800 dark:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M1 5h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 1 0 0-2H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2Zm18 4h-1.424a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2h10.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Zm0 6H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 0 0 0 2h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flow-root">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700 bg-blue-50 px-2 rounded-sm">
                        <p className="py-3 sm:py-4">
                            {content}

                            <div>
                                <hr />
                                {isDropdownOpen && (
                                    <div className=" z-50 mt-2 w-50 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 p-2">
                                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                            <div className="font-medium truncate">
                                                started : 10/01/2024
                                            </div>

                                            <div className="font-medium truncate">
                                                finish : 10/02/2024
                                            </div>
                                        </div>
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a
                                                    href="#"
                                                    className=" border-b-2 border-gray-200 mb-1  bg-blue-50 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Add user
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="border-b-2 border-gray-200 mb-1   bg-green-100 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Update
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="border-b-2 border-gray-200 mb-1  bg-blue-50 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    change state
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="py-1">
                                            <a
                                                href="#"
                                                className=" bg-red-50 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                            >
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </p>
                    </ul>
                </div>
            </div>
        </div>
    );
}
