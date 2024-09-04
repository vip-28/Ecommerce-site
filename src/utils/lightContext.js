import { createContext } from "react";


const lightMode= createContext( {
    light:{
        bg:"bg-neutral-400",
        text:"text-black",
        fill:"fill-black",
         bgapp:"bg-neutral-200",
          image:"invert"
    }
} )


export default lightMode;