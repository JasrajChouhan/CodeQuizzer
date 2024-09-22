import QuizGameButton from "./QuizGameButton"

function QuizGameButtons() {
    return (
        <div className="flex gap-x-4 " >
            <QuizGameButton
                buttonText="Skip"
                buttonVariant="destructive"
            />
            <QuizGameButton
                buttonText="Previous"
                buttonVariant="secondary"
            />
            <QuizGameButton
                buttonText="Next"
                buttonVariant="default"
            />
            
        </div>
    )
}

export default QuizGameButtons