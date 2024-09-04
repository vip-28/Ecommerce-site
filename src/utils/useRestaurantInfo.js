import { useState,useEffect } from "react";

const useRestaurant= (id)=>{
    const [ RestaurantInfo,setRestaurantInfo]= useState(); 
    const [CheckStatus, setCheckStatus]=useState();

    useEffect(()=>{   
        getRestaurantData();      
    },[]);
    
    
    
    async function getRestaurantData(){
        try{const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.172251&lng=77.44007739999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      
        const data= await fetch(url);
        
        const resdata= await data.json();
        // console.log(resdata);
        setRestaurantInfo(resdata?.data?.cards[2]?.card?.card?.info)
        setCheckStatus(resdata?.statusCode)
       
    }catch(err){
       
        console.log(err);
       }
    }
    
return RestaurantInfo;


};



export default useRestaurant;