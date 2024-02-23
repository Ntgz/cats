import { useEffect, useState } from "react"
import { getRandomFact } from "../services/facts"


export const useHookDos = () => {
    const [fact, setFact] = useState()


    const handleClickFunc = async () => {

        const newFact = await getRandomFact()
        setFact(newFact)

    }

    return { fact, handleClickFunc }


}