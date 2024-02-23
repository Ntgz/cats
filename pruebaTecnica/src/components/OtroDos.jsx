import React, { useState, useEffect } from 'react'


import { useCatImage } from "../hooks/useCatImage"

const Otro = () => {

    const {image} = useCatImage({fact:'cat'})

    console.log(image);

    return (
    <>


        {image && <img src={image}  />}


    </>
    )
}
export default Otro