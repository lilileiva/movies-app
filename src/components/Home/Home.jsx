import React from "react";


export default function Home() {
    return (
        <div className="flex flex-col w-full h-full text-center justify-center absolute bg-neutral-700">
            {/* <video autoplay muted preload loop
                className="absolute top-0 -full h-full object-cover"
                src='https://www.youtube.com/watch?v=uI7fnrNhKSI'
            /> */}
            <img src='https://wallpaperaccess.com/full/4839516.jpg'
                className="absolute w-full h-full object-"
            />
            <h1 className="text-white font-black text-9xl backdrop-blur-sm h-full flex flex-col justify-center">
                MOVIES INFO
            </h1>
        </div>
    )
}