import { useState, useEffect } from "react"
import { salto } from "../js/parrafo"

export function Parrafo ({text}){

    const [word,setWord] = useState('')
    useEffect(()=>{
        setWord(salto(text))
    },[])


    return(
        <>
        <p className="parrafo">{word}</p>
        </>
    )

}