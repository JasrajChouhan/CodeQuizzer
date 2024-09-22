
import HomeToggleMode from "@/components/HomeToggleMode"
import QuizGameButtons from "@/components/QuizGameButtons/QuizGameButtons"
import Options from "@/components/QuizOptions/Options"
import Question from "@/components/QuizQuestionSection/Question"
import SeperatorComp from "@/components/SeperatorComponent/SeperatorComp"

function Play() {
    return (
        <div>
            <HomeToggleMode />
            <div className="ml-10" >
            <Question />
            <SeperatorComp
                className={"ml-10 mr-10 mt-10"}
            />

            <Options />
            <div className=" flex justify-end items-center mr-10 mt-[150px]" >
            <QuizGameButtons />
            </div>
            </div>
        </div>
    )
}

export default Play