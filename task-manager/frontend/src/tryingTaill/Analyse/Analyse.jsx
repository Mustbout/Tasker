import React, { useState } from "react";
import Card from "./card";

export default function Analyse() {
    const [today, setToday] = useState(new Date());
    setInterval(() => {
        setToday(new Date());
    }, 1000);
    return (
        <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Today
            </h3>
            <p className="mb-2 font-bold">{today.toUTCString()}</p>
            <div className=" bg-white grid grid-cols-2 rounded-xl py-4 px-4">
                <Card
                    title={"Project Worked"}
                    parag={"2"}
                    logo={"public/image/Box.png"}
                />
                <Card
                    title={"Worked This Week"}
                    parag={"40"}
                    logo={"public/image/Group47.png"}
                />
                <Card
                    title={"Weekly Activity"}
                    parag={"0%"}
                    logo={"public/image/Box.png"}
                />
            </div>
        </div>
    );
}
