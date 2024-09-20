import { Link } from 'react-router-dom'

import HomeToggleMode from '../HomeToggleMode'
import { Button } from "../ui/button"



function HeroSection() {
    return (
        <div className="h-[100vh] w-full  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative ">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className='flex flex-col justify-end ' >
                <HomeToggleMode />
            </div>

            <div className="flex flex-col justify-center items-center mt-60 md:mt-40 " >
                <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-500 bg-gradient-to-b from-gray-800 to-gray-500 py-1 text-center max-w-[90%] sm:max-w-[80%] mx-auto">
                    Level Up Your Coding with CodeQuizzer!
                </h1>

                <h3 className=" text-gray-700 dark:text-gray-300 text-xl mb-6 " >ReactJS, NextJS, and many other technologies...</h3>
                <div className="button-div ">

                    <Link to="/start">
                        <Button
                            variant={'default'}
                            className="mx-4"
                        >Get started</Button>
                    </Link>

                    <a href="https://github.com/JasrajChouhan/CodeQuizzer" target='_blank'>
                        <Button
                            variant={'outline'}
                        >🌟 on Github</Button>
                    </a>
                </div>
            </div>
            <div  className='flex justify-center items-end mt-40'>
            <p className="text-gray-600 dark:text-gray-400">
                &copy; 2024 CodeQuizzer. All rights reserved.
            </p>
            </div>
        </div>
    )
}

export default HeroSection
