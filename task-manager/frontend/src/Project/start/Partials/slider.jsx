import { useEffect } from "react";
export default function Slider() {
    useEffect(() => {
        let slide1 = document.getElementById("slide1");
        let slide2 = document.getElementById("slide2");
        let slide3 = document.getElementById("slide3");
        const tab = [slide1, slide2, slide3];
        setInterval(() => {
            tab[Math.floor(Math.random() * 3)].classList.toggle("hidden");
        }, 3000);
    }, []);
    return (
        <div className="right-4  relative left-1  md:left-32 md:top-2 w-[350px] md:w-[450px] ">
            <div>
                <div
                    id="default-carousel"
                    className="relative w-full"
                    data-carousel="slide"
                >
                    <div className=" overflow-hidden rounded-lg ">
                        <div
                            className="duration-700 ease-in-out  hover:opacity-80  "
                            data-carousel-item
                            id="slide1"
                        >
                            <img
                                src="public/image/pexels-fauxels-3184339.jpg"
                                className=" shadow-lg rounded-lg absolute block  w-50  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
                                alt="67"
                            />
                        </div>
                        <div
                            className="hidden duration-700 ease-in-out  hover:opacity-10 "
                            data-carousel-item
                            id="slide2"
                        >
                            <img
                                src="public/image/pexels-helena-lopes-933964.jpg"
                                className="shadow-lg rounded-lg absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt="..."
                            />
                        </div>
                        <div
                            className="hidden duration-700 ease-in-out  hover:opacity-10 "
                            data-carousel-itemid
                            id="slide3"
                        >
                            <img
                                src="public/image/pexels-jopwell-2422294.jpg"
                                className=" shadow-lg rounded-lg absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt="..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
