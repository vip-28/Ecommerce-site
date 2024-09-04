import { createContext } from "react";


const darkMode= createContext( {
    dark:{
        bg:"bg-stone-900",
        text:"text-white",
        fill:"fill-white",
        bgapp:"bg-neutral-950",
         image:"invert-0"
    }
} )


export default darkMode;