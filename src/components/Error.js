import { useRouteError,Link } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import { Title } from "./Header";



const Error= ()=>{
    const err= useRouteError();
    // console.log(err);
  
    return (
        <>
       <div>
        <Header/>
       </div>
        <h1>Oops!</h1>
        <h2>Something went wrong</h2>
        <h2>{err.status +" : "+err.statusText}</h2>
        <h2>{err.data} </h2>
        </>
    )
};


export default Error;