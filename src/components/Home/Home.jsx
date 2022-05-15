import React from "react";
import bg from '../../img/bg-movies.png';


function Home() {
    return (
        <div className="absolute flex flex-col w-full h-full justify-center bg-neutral-700">
            <img src={bg}
                className="absolute w-full h-full object-cover"
            />
            <div className="w-full flex flex-row justify-center">
                {/* <h1 className="sm:w-90 text-white bg-red-600 font-black text-8xl mix-blend-multiply text-center mx-2 xl:text-9xl"> */}
                <h1 className="sm:absolute w-90 text-white opacity-40 bg-red-700 font-black text-8xl text-center mx-2 xl:text-9xl">
                    MOVIES INFO
                </h1>
            </div>
        </div>
    )
}

export default Home;