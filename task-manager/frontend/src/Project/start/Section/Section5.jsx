import React from "react";

export default function Section5() {
    return (
        <div>
            <section className="  flex flex-col lg:flex-row mb-10 mt-10 justify-center items-center justify-between">
                <div>
                    <div>
                        <h1 className="title">
                            <span className="flex block justify-center  mt-7 max-h-9">
                                <img
                                    className="mx-3"
                                    src="public/image/Vector12.png"
                                    alt=""
                                />
                                Follow the following steps
                            </span>
                        </h1>
                        <div className="border border-gray-25 rounded-lg shadow px-4 py-4 mt-14 mb-5 ">
                            <img
                                className=""
                                src="public/image/HowToAdd.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg shadow lg:flex-row md:max-w-xl mx-2 px-10 py-10 ml-10 ">
                    <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white flex flex-col ">
                        Follow the following steps
                    </h5>
                    <p className=" mb-4 md:my-10">
                        To initiate a project, navigate to the dashboard and
                        locate the "Create Project" button. Upon clicking this
                        button, you will be directed to a form where you can
                        input details to create a new project. This form
                        typically includes fields such as project name,
                        description, start date, end date, and any other
                        relevant information. Fill out the form with the
                        necessary details and submit it to create the project.
                        This streamlined process ensures efficiency in starting
                        new projects within the system.
                    </p>
                    <button
                        type="button"
                        className=" text-white bg-btn hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-8 py-2 text-center flex "
                    >
                        <div className=" mx-1">get started</div>
                    </button>
                </div>
            </section>
        </div>
    );
}
