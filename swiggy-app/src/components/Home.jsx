import React from "react"
import { Section1 } from "./Section1"
import Body from "./Body"

export function Home(){
   
    return (
        <>
       <div >
        <Section1/>
        <hr className=" border-t-2 border-gray-300 w-[90%]  m-auto mt-6"/>
        <Body/>
       </div>
        </>
    )
}
    

