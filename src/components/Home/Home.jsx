import React, { useEffect } from "react";
import bg from '../../img/bg-movies.png';
import { useDispatch } from "react-redux";
import { reset } from "../../redux/actions";


function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(reset())
    }, [dispatch])

    return (
        <div className="absolute flex flex-col w-full h-full justify-center bg-neutral-700">
            <img alt='movie poster' src={bg}
                className="absolute w-full h-full object-cover"
            />
            <div className="w-full flex flex-row justify-center">
                <h1 className="sm:absolute w-90 text-white opacity-40 bg-red-700 font-black text-8xl text-center mx-2 xl:text-9xl">
                    MOVIES APP
                </h1>
            </div>
        </div>
    )
}

export default Home;