import { BookMarkedIcon } from "lucide-react"
import { Button } from "../ui/button"

function Question() {
    return (
        <div className="flex mx-10 mt-10">
            <div className="flex gap-2 w-[95%] h-10 ">
                <h1 className="text-4xl font-semibold " >1. What is the full form of HTML?</h1>
            </div>
            <div>
                <Button
                variant={'outline'}
                ><BookMarkedIcon/>
                </Button>
            </div>
        </div>
    )
}

export default Question