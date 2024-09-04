import { createContext } from "react";


export const lightMode= createContext( {
    light:{
        bg:"bg-neutral-400",
        text:"text-black",
        fill:"fill-black",
        fill2:"fill-yellow-400",
        fill3:"fill-black",
        border:"border-black",
        bgrest:"bg-neutral-200",
        bgsearch:"bg-neutral-200",
        image:"invert", 
       

    }
} )



export const darkMode= createContext( {
    dark:{
        bg:"bg-stone-900",
        text:"text-white",
        fill:"fill-blue-500",
        fill2:"fill-white",
        fill3:"fill-white",
        border:"border-white",
        bgrest:"bg-stone-800",
        bgsearch:"bg-stone-950",
        image:"invert-0"

    }
} )


