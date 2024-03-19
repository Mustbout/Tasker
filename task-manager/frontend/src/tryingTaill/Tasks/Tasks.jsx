import React, { useState } from "react";
import Task from "./Task";
import AjouterTache from "./AjouterTache";
import ReactPopover from "./prov/Separator";
import PlusProfile from "./prov/plusProfile";
import AddUserEmail from "./prov/AddUserEmail";

export default function Tasks() {
    const [today, setToday] = useState(new Date());
    const toggleIsGray = () => {
        document.getElementById("isGray").classList.toggle("opacity-80");
    };
    setInterval(() => {
        setToday(new Date());
    }, 1000);

    return (
        <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 ">
                Today
            </h3>
            <p className="mb-2 font-bold">{today.toUTCString()}</p>
            <div className=" bg-white rounded-xl py-4 px-4">
                <div className=" grid grid-col-2 xl:grid-cols-4 items-center">
                    <h3 className="font-bold text-xl text-gray-900 xl:mb-0 mb-3 ">
                        Project 1 :
                    </h3>
                    <p></p>
                    <div
                        className="flex bg-blue-50 p-2 rounded-lg w-[230px]"
                        aria-label="Breadcrumb"
                    >
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse ">
                            <div className=" mr-8 flex items-center">
                                <AddUserEmail />

                                <svg
                                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1 ml-3 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 9 4-4-4-4"
                                    />
                                </svg>
                            </div>
                            <div>
                                <div className="flex -space-x-3 rtl:space-x-reverse w-44">
                                    <img
                                        className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                                        src="public/image/ProfileRectangle9651.png"
                                        alt=""
                                    />
                                    <img
                                        className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                                        src="public/image/ProfileEllipse.png"
                                        alt=""
                                    />
                                    <img
                                        className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                                        src="public/image/ProfileEllipse2.png"
                                        alt=""
                                    />
                                    <img
                                        className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                                        src="public/image/ProfileEllipse3.png"
                                        alt=""
                                    />
                                    <ReactPopover
                                        trigger="click"
                                        content={
                                            <p className="">
                                                <PlusProfile />
                                            </p>
                                        }
                                    >
                                        <div
                                            className="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-800 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                                            href="#"
                                        >
                                            +5
                                        </div>
                                    </ReactPopover>
                                </div>
                            </div>
                            <p></p>
                            <button onClick={toggleIsGray}>
                                <AjouterTache />
                            </button>
                        </ol>
                    </div>
                </div>
                <hr className=" m-4" />
                <div className=" md:grid md:grid-cols-3 inline-flex rounded-md shadow-sm w-full  grid md:grid-cols-3 text-center bg-blue-50 ">
                    <div
                        href="#"
                        aria-current="page"
                        className="px-4 py-2 text-sm font-medium text-gray-900  border border-gray-200 rounded-s-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                        PAS ENCORE
                    </div>
                    <div
                        href="#"
                        aria-current="page"
                        className="px-4 py-2 text-sm font-medium text-gray-900  border border-gray-200 rounded-s-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                        EN COURS
                    </div>
                    <div
                        href="#"
                        aria-current="page"
                        className="px-4 py-2 text-sm font-medium text-gray-900  border border-gray-200 rounded-s-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                        TERMINEE
                    </div>
                </div>
                <div className=" flex flex-row my-5 ">
                    <div className="items-center mx-3">
                        <Task
                            title={"Database"}
                            image={"public/image/ProfileRectangle9651.png"}
                            content={
                                "La base de données est globalement définie comme un ensemble d'informations et de sources de connaissances auquel les utilisateurs peuvent accéder."
                            }
                        />
                        <Task
                            title={"Design of specifications"}
                            image={"public/image/ProfileEllipse3.png"}
                            content={
                                "A design specification (or product design specification) is a document which details exactly what criteria a product or a process should comply with"
                            }
                        />
                    </div>
                    <div className="items-center mx-3">
                        <Task
                            title={"Develop Front-end"}
                            image={"public/image/ProfileEllipse2.png"}
                            content={
                                "Front-end development is about making websites and apps look good and work smoothly. Developers use HTML, CSS, and JavaScript to create what users see and interact with."
                            }
                        />
                        <Task
                            title={"Develop Back-end"}
                            image={"public/image/ProfileRectangle9651.png"}
                            content={
                                "Le développeur back-end crée le code et les programmes qui alimentent le serveur du site web, les bases de données et toutes les applications du site internet."
                            }
                        />
                    </div>
                    <div className="items-center mx-3">
                        <Task
                            title={"Web designer"}
                            image={"public/image/ProfileRectangle9651.png"}
                            content={
                                "Le webdesigner est chargé de concevoir et de réaliser l'identité  visuelle d'un site Internet."
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
