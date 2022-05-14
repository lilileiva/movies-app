import React from "react";
import bg from '../../img/bg-movies.png';


export default function Home() {
    return (
        <div className="absolute flex flex-col w-full h-full justify-center bg-neutral-700">
            <img src={bg}
                className="absolute w-full h-full object-cover"
            />
             
            <div className="w-full flex flex-row justify-center">
                <h1 className="w-90 text-white bg-red-600 font-black text-9xl mix-blend-multiply">
                    MOVIES INFO
                </h1>
            </div>
        </div>
    )
}