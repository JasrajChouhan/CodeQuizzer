import { Separator } from "@/components/ui/separator"

import HomeToggleMode from "@/components/HomeToggleMode"
import Question from "@/components/QuizQuestionSection/Question"
import SeperatorComp from "@/components/SeperatorComponent/SeperatorComp"

function Play() {
    return (
        <div>
            <HomeToggleMode />
            <Question />
            <SeperatorComp 
                className={"ml-10 mr-10 mt-10"}
            />
        </div>
    )
}

export default Play