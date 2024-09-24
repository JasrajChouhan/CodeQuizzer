import { useEffect, useState } from "react"

interface optionTypes {
    optionId : string ;
    optionDescription : string ;
}

interface dataTypes {
    id : string ;
    questionHeading : string ;
    questionDescription ?: string ;
    option : optionTypes[] ;
}

interface Question {
    category : string ;
    level : "easy" | "medium" | "heard";
    data : dataTypes 
}

function PlayPageContainer() {

    const [questionData , setQuestionData] = useState <Question[]>();
    const [isLoading , setIsLoading] = useState(false)
    const [error , setError] = useState('')

    const controller = new AbortController()

    async function fetchQuestionData() {
        try {
            controller.abort()
            setIsLoading(true);
            setError(''); 
            const response = await fetch('http://localhost:3000');
            if(!response.ok) {
                throw new Error(`Data not found, Try again letter.`)
                
            }
            const data = await response.json() ;
            setIsLoading(false);
            console.log(data)
            // setQuestionData(data)
        } catch (error : any) {
            setIsLoading(false)
            setError(error)
            
        }
    }


    useEffect( () => {
        fetchQuestionData()
    } , [] )

    if(error) return <div>Error ..... {error}</div>
    if(isLoading) return <div>Loading....</div>
    return (
        <div>PlayPageContainer</div>
    )
}

export default PlayPageContainer