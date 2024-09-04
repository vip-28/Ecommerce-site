import { useState, useEffect } from "react";

import RestaurantCard from "./restcard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { useOutletContext } from "react-router-dom";
import { useContext } from "react";
import { darkMode, lightMode } from "../utils/ThemeContext";
import { Themefinder } from "./restcard";
let flag = 0;
// const sample= [{"info":{"name":"","cuisines":[""],"cloudinaryImageId":"","sla":{"lastMileTravelString":""}}}];
const Body = () => {

  const {mainTheme}=useOutletContext();
 





  const [allRestaurants, setAllRestaurants]=useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // const [test, setTest]= useState("False");
  const [searchText, setSearchText] = useState(""); //to create state variables


  const { dark } = useContext(darkMode);
  const { light } = useContext(lightMode);
 
  
if(mainTheme==="dark"){
 theme= dark
 
}else{
theme=light

}


  
  
  
  



useEffect(()=>{
  getData();
},[]);







async function getData(){

  try{
const API= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.172251&lng=77.44007739999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
const data= await API.json();
setAllRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
flag++;
setFilteredRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


  }catch(err){
    console.log(err);

  }

}



const isOnline = useOnline();

if(!isOnline ){
  return <h1>🔴You are offline, please check your internet connection🔴</h1>
}

if(filteredRestaurants.length===0 && flag!=0){  
  return (
    <>
    <div className="py-20">
    <div className={`search-container p-2 ${theme.bg} my-5 flex justify-center `}>
    <input
        type="text"
        className={` p-2 m-2 ${theme.bgsearch}  ${theme.text} h-12 w-96`}
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
 <button
        className={` p-3  m-2 ${theme.bgsearch}  ${theme.text} rounded-md duration-300 w-24 flex `}
        onClick={() => {
          const updatedData = filterData(searchText, allRestaurants);
          setFilteredRestaurants(updatedData);
        }}
      ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className={`${theme.fill}`} ><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
        Search
      </button>



</div>
<div className="flex justify-center">
<h1 className={`${theme.text} text-xl m-4`}>Nothing Found </h1>
</div>
<Shimmer/>
</div>
    </>
  )
}



if(allRestaurants.length===0){
  return <div className="py-20"> <Shimmer/></div>
}else{

return (


  <>
    <div className="py-20">
    <div className={`search-container p-2 ${theme.bg} my-5 flex justify-center`}>
      <input
        type="text"
        className={` p-2 m-2 ${theme.bgsearch}  ${theme.text} h-12 w-96`}
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e?.target?.value);
        }}
      />
      
      {/* <h1>{test}</h1> */}
      <button
        className={` p-3  m-2 ${theme.bgsearch}  ${theme.text} rounded-md duration-300 w-24 flex `}
        onClick={() => {
          // if(test==="False"){        setTest("True");    }else{   setTest("False"); }
          //going to filter data on click by updating restaurants variable
          // const updatedData = filterData(searchText, Restaurantlist); // MY ANSWER for FIXING THE SEARCH BAR RESULTS
          const updatedData = filterData(searchText, allRestaurants);
          setFilteredRestaurants(updatedData);
        }}  
      ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className={`${theme.fill}`} ><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
        Search
      </button>
    </div>
    <div className="flex flex-wrap px-6 justify-center ">
      {filteredRestaurants.map((restaurant, index) => {
        // restaurants.map mein restaurants is the main list above which will be given here after search button clicked
        
        return(
           
        <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id} className="MainCards"> <RestaurantCard {...restaurant} /></Link>
       
      ) // how this shit runs we need to study JS MAP Array
     
      })} 

    </div>
    <Themefinder props={theme}/>
    </div>
  </>
);

}

};

export default Body;
