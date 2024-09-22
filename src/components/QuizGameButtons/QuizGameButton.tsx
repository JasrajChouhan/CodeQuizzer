import { Button } from "../ui/button"

interface QuizGameButtonProps {
    buttonVariant? : "default" | "destructive" | "ghost" | "outline" | "secondary" | "link"
    buttonText : string | undefined;

}

function QuizGameButton(props : QuizGameButtonProps) {
    const {
        buttonText,
        buttonVariant
    } = props ;
    return (
        <Button 
            variant={buttonVariant}
        >{buttonText}</Button>
    )
}

export default QuizGameButton
