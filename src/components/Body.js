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
import Landing from "./Landing";
let flag = 0;
// const sample= [{"info":{"name":"","cuisines":[""],"cloudinaryImageId":"","sla":{"lastMileTravelString":""}}}];
const Body = () => {
  

  const {mainTheme}=useOutletContext();
 





  // const [test, setTest]= useState("False");
  const [searchText, setSearchText] = useState(""); //to create state variables


  const { dark } = useContext(darkMode);
  const { light } = useContext(lightMode);
 
  let theme=light;
  
if(mainTheme==="dark"){
 theme= dark
 
}else{
theme=light

}


  
  
  
  



    const data={
      data: [
        {
          "id":"1",
          "areaName": "Danish Kunj, Kolar Road",
          "gymName": "AS Fitness Terminus",
          "reviews":"232",
          "avgRating": "4.9",
          "cloudinaryImageId": "https://lh5.googleusercontent.com/p/AF1QipPQvvVcKDBrT7r2sC1aX8diGwA5fwa7VqPapoxP=w325-h218-n-k-no"
        },
        {
          "id":"2",
          "areaName": "Bairagarh Chichali, Kolar Rd",
          "gymName": "Hulk Gym",
          "reviews":"231",
          "avgRating": "4.5",
          "cloudinaryImageId": "https://lh3.googleusercontent.com/p/AF1QipMTBe3hqTlrqbPj-qdfx1dZ2yocJRErf98hkmTm=s1360-w1360-h1020"
        },
         {
          "id":"3",
           "areaName": "Danish Kunj, Kolar Rd",
          "gymName": "V-Square Gym & Wellness Lounge",
           "reviews":"92",
           "avgRating": "4.9",
          "cloudinaryImageId": "https://lh5.googleusercontent.com/p/AF1QipNdu3YNSFppZsVmiPRnA2S1GZFx5QxU9OWFzejZ=w325-h218-n-k-no"
        },
         {
          "id":"4",
           "areaName": " Naya Pura, Kolar Rd",
          "gymName": "IRON ADDICT GYM",
           "reviews":"292",
           "avgRating": "4.9",
          "cloudinaryImageId": "https://lh5.googleusercontent.com/p/AF1QipPA4pziqM3tQFoRb5bs2CHGAgVYcUEIMpsa8hWW=w325-h218-n-k-no"
        },
         {
          "id":"5",
           "areaName": "near Kolar Thana,Kolar Rd",
          "gymName": "Elite Fitness Club",
           "reviews":"209",
           "avgRating": "4.8",
          "cloudinaryImageId": "https://lh5.googleusercontent.com/p/AF1QipNJjS9NcH1UI-mPv6Rg3m5olQvTaYEXYegItjKm=w325-h218-n-k-no"
        },
         {
          "id":"6",
           "areaName": "Mahabali Nagar, Kolar Rd",
          "gymName": "The Fit Factory",
           "reviews":"50",
           "avgRating": "4.9",
          "cloudinaryImageId": "https://lh3.googleusercontent.com/p/AF1QipMBK8QtjWsk6eOLHmVAT0dEeIDYWeuwu17sUJiN=s1360-w1360-h1020"
        },
         {
          "id":"7",
           "areaName": "Danish Kunj, Kolar Rd",
          "gymName": "RD Fitness Club",
           "reviews":"46",
           "avgRating": "4.2",
          "cloudinaryImageId": "https://lh3.googleusercontent.com/p/AF1QipN8XAfpw4AbApcass4tA_oJ52qpV_W5fpbrEV8=s1360-w1360-h1020"
        },
         {
          "id":"8",
           "areaName": " Banjari Chouraha, above Milan Sweets, Kolar Rd",
          "gymName": "The Fitness Mark",
           "reviews":"52",
           "avgRating": "5.0",
          "cloudinaryImageId": "https://lh3.googleusercontent.com/p/AF1QipNHBmrxHATNEcUvOWkpXMrsHRW4FJeZ8A_hLek9=s1360-w1360-h1020"
        },
         {
          "id":"9",
           "areaName": "Sarvdharm Colony, Kolar Rd",
          "gymName": "Club Gym Shark",
           "reviews":"518",
           "avgRating": "4.9",
          "cloudinaryImageId": "https://lh5.googleusercontent.com/p/AF1QipOAWzjg8cZ12Ma7sBfFci1HvaLub6Vop_3Se6lw=w325-h218-n-k-no"
        }, {
          "id":"10",
           "areaName": "Mandakini colony, Kolar rd",
          "gymName": "Pure Fitness Zone",
           "reviews":"478",
           "avgRating": "4.7",
          "cloudinaryImageId": "https://lh5.googleusercontent.com/p/AF1QipPE2RPjiCjmwB1_rRKO96K67RWKdRI_r_7v7_cY=w325-h218-n-k-no"
        }, {
          "id":"11",
           "areaName": "Beema Kunj, Kolar rd",
          "gymName": "A-ONE GYM & FITNESS CENTER",
           "reviews":"91",
           "avgRating": "4.9",
          "cloudinaryImageId": "https://lh5.googleusercontent.com/p/AF1QipNqhvkoL_it0n-8HdXhxsF4GU_RftXujrbHEev1=w325-h218-n-k-no"
        }, {
          "id":"12",
           "areaName": "Mandakini colony, Kolar rd",
          "gymName": "Girls Hive Fitness Hub",
           "reviews":"172",
           "avgRating": "4.9",
          "cloudinaryImageId": "https://lh5.googleusercontent.com/p/AF1QipNcHTjR8qiGtpIIsPYHXhV7NQjj9mFVQm0gvTjS=w162-h108-n-k-no"
        }, {
          "id":"13",
           "areaName": "Sarvdharm, Kolar rd",
          "gymName": "Bhawani Gym",
           "reviews":"44",
           "avgRating": "4.4",
          "cloudinaryImageId": "https://lh3.googleusercontent.com/p/AF1QipMKTkZL_ra4goAkKElxaPEjBVPbd9AQ7lCnoE-Z=s1360-w1360-h1020"
        }, {
          "id":"14",
           "areaName": "Danish Kunj, Kolar rd",
          "gymName": "Raw Fit Fitness",
           "reviews":"63",
           "avgRating": "4.6",
          "cloudinaryImageId": "https://lh5.googleusercontent.com/p/AF1QipPvO0Q-TiqbQGIH68cpwA-mzbws4eT8rI5ybvMC=w325-h218-n-k-no"
        }, {
          "id":"15",
           "areaName": "Mandakini Society, Kolar rd",
          "gymName": "My Fitness Club (kolar)",
           "reviews":"22",
           "avgRating": "4.7",
          "cloudinaryImageId": "https://lh5.googleusercontent.com/p/AF1QipPxZv-k_AoCXw0BdknAcZ9LHbhD9PaC7vk3XvU2=w325-h218-n-k-no"
        }
        
      ]
    }

    
    
    // const API= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.172251&lng=77.44007739999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
// const data= await API.json();


const [allRestaurants, setAllRestaurants]=useState(data?.data);
const [filteredRestaurants, setFilteredRestaurants] = useState(data?.data);




  











const isOnline = useOnline();
useEffect(()=>{
  window.scrollTo(0,0);
},[]);
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
    {/* <div className={`search-container p-2 ${theme.bg} my-5 flex justify-center`}> */}
      {/* <input */}
        {/* type="text" */}
        {/* className={` p-2 m-2 ${theme.bgsearch}  ${theme.text} h-12 w-96`} */}
        {/* placeholder="Search" */}
        {/* value={searchText} */}
        {/* onChange={(e) => { */}
          {/* setSearchText(e?.target?.value); */}
        {/* }} */}
      {/* /> */}
      
      {/* <h1>{test}</h1> */}
      {/* <button */}
        {/* className={` p-3  m-2 ${theme.bgsearch}  ${theme.text} rounded-md duration-300 w-24 flex `} */}
        {/* onClick={() => { */}
          {/* // if(test==="False"){        setTest("True");    }else{   setTest("False"); } */}
          {/* //going to filter data on click by updating restaurants variable */}
          {/* // const updatedData = filterData(searchText, Restaurantlist); // MY ANSWER for FIXING THE SEARCH BAR RESULTS */}
          {/* const updatedData = filterData(searchText, allRestaurants); */}
          {/* setFilteredRestaurants(updatedData); */}
        {/* }}   */}
      {/* ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className={`${theme.fill}`} ><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg> */}
        {/* Search */}
      {/* </button> */}
    {/* </div> */}
    
    <div className="flex flex-wrap px-6 justify-center m-10 ">
      {filteredRestaurants.map((restaurant, index) => {
        // restaurants.map mein restaurants is the main list above which will be given here after search button clicked
        
        return(
           
        <div key={index}><RestaurantCard {...restaurant} /></div>
       
      ) // how this shit runs we need to study JS MAP Array
     
      })} 

    </div>
    {/* <Themefinder props={theme}/> */}
    </div>
  </>
);

}

};

export default Body;
