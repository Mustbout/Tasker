import React from "react";

export default function Card({ title, parag, logo }) {
    return (
        <div>
            <div className=" border bg-orange-50 p-4 rounded-2xl m-5">
                <h3 className="ml-5 mb-2 text-sm font-bold text-gray-900">
                    {title}
                </h3>
                <div className="grid grid-cols-2 flex justify-center items-center">
                    <p className=" font-bold text-3xl text-gray-900 ml-7 ">
                        {parag}
                    </p>
                    <img
                        className=" bg-orange-100 w-[80px] p-3 rounded-lg"
                        src={logo}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}
