import { BookMarkedIcon } from "lucide-react"

function Question() {
    return (
        <div className="flex mx-10 mt-10">
            <div className="flex gap-2 w-[95%] h-10 ">
                <h1 className="text-4xl font-semibold " >1. What is the full form of HTML?</h1>
            </div>
            <BookMarkedIcon size={40} className="border-2 p-2 rounded-lg hover:bg-zinc-900 cursor-pointer ml-10" />
        </div>
    )
}

export default Question