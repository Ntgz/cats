import { useEffect, useState } from "react"

export function useCatImage(fact) {
    const [image, setImage] = useState()
    useEffect(() => {

        if (!fact) return
        const firstWord = fact.split(' ', 1)
        // const firstWord = fact.split(' ').slice(0, 3).join(' ')
        console.log(firstWord);
        fetch(`https://cataas.com/cat/says/:${firstWord}?size=50&color=red&json=true`)

            .then(res => res.json())
            .then(response => {
                const { _id } = response
                setImage(`https://cataas.com/cat/says/${_id}`)
            }

            )
    }, [fact])
    return { image }
}
