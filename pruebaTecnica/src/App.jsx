import React, { useState, useEffect } from 'react'

import { getRandomFact } from './services/facts'
import { useCatImage } from './hooks/useCatImage'



const App = () => {

    const [fact, setFact] = useState()

    const { image } = useCatImage(fact)


    useEffect(() => {
        handleClick()

    }, [])



    const handleClick = async () => {
        const newFact = await getRandomFact()
        setFact(newFact)
    }

    return (
        <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

            <h1>App de gatos</h1>


            <button onClick={handleClick}>get new fact</button>
            {fact && <p>{fact}</p>}

            {image && <img src={image} alt='cat' />}


        </main>
    )
}

export default App