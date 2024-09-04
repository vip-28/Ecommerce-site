import { useParams } from "react-router-dom";
import Header from "./Header";

const NoRestaurant = ()=>{
 
    const {id} = useParams();
 
 return(
<>

<h1>No Restaurant found with ID: {id} </h1>
<h2>try next Time </h2>
</>
    );
}


export default NoRestaurant;