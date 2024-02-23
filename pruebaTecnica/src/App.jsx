import React, { useState, useEffect } from 'react'

import Otro from './components/OtroDos'
import { getRandomFact } from './services/facts'
import { useCatImage } from './hooks/useCatImage'
import { useHookDos } from './hooks/jookDos'





const App = () => {

   
    const { fact, handleClickFunc} = useHookDos()
    const { image } = useCatImage({fact})


    useEffect(() => {
        handleClick()

    }, [])



    const handleClick = async () => {
        handleClickFunc()
    }

    return (
        <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

            <h1>App de gatos</h1>


            <button onClick={handleClick}>get new fact</button>
            {fact && <p>{fact}</p>}

            {image && <img src={image} alt='cat' />}

            <Otro/>


        </main>
    )
}

export default App