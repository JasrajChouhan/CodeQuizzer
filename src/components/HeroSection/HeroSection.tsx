import {Link} from 'react-router-dom'

import { Button } from "../ui/button"



function HeroSection() {
    return (
        <div className="flex flex-col justify-center items-center mt-40" >
            <h1 className="text-4xl md:text-6xl lg:text-8xl  font-bold text-center mt-10 " >Take a Quiz</h1>
            <h3 className="dark:text-gray-600 text-gray-500 text-xl text-secondary mb-2 " >HTML | JS | ReactJs | NextJs and many more....</h3>
            <div className="button-div ">

                <Link to = "/start">
                <Button
                    variant={'default'}
                    className="mx-4"
                >Get started</Button>
                </Link>

                <a href = "https://github.com/JasrajChouhan/CodeQuizzer" target='_blank'>
                <Button
                    variant={'outline'}
                >🌟 on Github</Button>
                </a>
            </div>
        </div>
    )
}

export default HeroSection


{/**
    
    <div class="relative h-full w-full bg-black">
    
    
    <div 
        class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
    </div>
    <div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
    </div>
    */}