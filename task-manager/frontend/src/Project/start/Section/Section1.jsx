import React from "react";
import Slider from "../Partials/slider";

export default function Section1() {
    return (
        <div>
            <section id="home" className=" py-5">
                <div className="">
                    <div className="container py-10">
                        <div className="flex flex-col items-center z-20 md:flex-row">
                            <div className=" text-center mb-12  md:w-1/2 md:pr-10 relative xl:left-10 ">
                                <h1 className="title">
                                    With Task Manager make the work more easier
                                </h1>
                                <p className=" leading-relaxed mb-10 ">
                                    A task manager helps organize, prioritize
                                    and track daily activities and projects. It
                                    allows you to stay organized, not forget
                                    important deadlines, and work more
                                    effectively as a team.
                                </p>
                                <div className="flex flex-col md:flex-row ">
                                    <button
                                        type="button"
                                        className=" text-white bg-btn hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-8 py-2 text-center flex  justify-center items-center"
                                    >
                                        <div className=" mx-1 text-center">
                                            log in
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className=" my-32">
                                <Slider />
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src="public/image/pexels-helena-lopes-933964.jpg"
                    className=" opacity-5 absolute top-5 blur  w-[1300px] block h-[750px] "
                    alt="..."
                />
            </section>
        </div>
    );
}
