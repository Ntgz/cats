import React, { useState,useEffect } from 'react'

const App = () => {

    const [fact, setFact] = useState()
    const[image, setImage] = useState()

    
    useEffect(() => {
        fetch('https://catfact.ninja/fact')
        .then(res=> res.json())
        .then(data =>
            {const { fact } = data 
            setFact(fact)
            const firstWord = fact.split(' ', 1)
            // const firstWord = fact.split(' ').slice(0, 3).join(' ')
            console.log(firstWord);
            fetch(`https://cataas.com/cat/says/:${firstWord}?size=50&color=red&json=true`)
            
            .then(res=>res.json())
            .then(response =>{
                console.log(response);
                const { _id } = response 
                console.log(_id);
                setImage(`https://cataas.com/cat/says/${_id}`)
            }
         
                )
            }
      
        )
    }, [])
    
const prueba = () => {

}

  return (
    <main style={{ display: 'flex', justifyContent:'center', alignItems:'center',  flexDirection:'column' }}>
        
        <h1>App de gatos</h1>
        
        <section style={{justifyContent:'space-between', display:'flex'}}>
        {fact && <p>{fact}</p>}
 
        {image && <img src={image} alt='cat'/>}
        </section>
     
    </main>
  )
}

export default App