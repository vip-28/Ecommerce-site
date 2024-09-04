import { useContext, useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./config";
import Shimmer from "./Shimmer";
import NoRestaurant from "./NoRestaurant";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { darkMode, lightMode } from "../utils/ThemeContext";

const RestaurantInfo = () => {



  const { id } = useParams();

  const dispatch = useDispatch();

//   const handleAddItem = () => {
//     dispatch(addItem("Grapes"));
//   };

const addFoodItem=(item)=>{
dispatch(addItem(item));

};

  const RestaurantInfo = useRestaurantInfo(id);



  const [restaurantm, setRestaurantm] = useState(null);

  const API = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.172251&lng=77.44007739999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;

  useEffect(() => {
    MenuAPI();
  }, []);

  async function MenuAPI() {
    try {
      const info = await fetch(API);
      const data = await info.json();
      setRestaurantm(
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards
      );
    } catch (err) {
      console.log(err);
    }
  }


  const {mainTheme}=useOutletContext();
console.log(mainTheme)
const {dark}= useContext(darkMode)
const {light}= useContext(lightMode)
if(mainTheme==="dark"){
  theme= dark
  
 }else{
 theme=light
 
 }


  if (restaurantm && RestaurantInfo) {
    const restaurantmenu = restaurantm.map((rest, index) => {
    
        return (
       
      
  
 <div className={`px-12 ${theme.text} `} key={index}>
        <div
          
          className={`flex justify-between leading-8 ${theme.border} border-solid border-2 items-center py-3 px-4 `}
        >
          <div className=""> {index+1}.  {rest?.card?.info?.name}</div>
          <button
            className="bg-stone-500  h-8 h-10 w-28 bg-stone-500 hover:bg-stone-700 active:bg-stone-900"
            onClick={() => addFoodItem(rest?.card?.info)}
          >
            Add Item
          </button>
        </div>  
        </div>
    
    )});

    return (
      <>
      <div className="py-20">
        <div className={`flex gap-9 font-ChakraPetch  items-center ${theme.text}  `}>
          <div>
            <img
              className={`p-2 m-5 w-[700px] h-[600px] bg-cover object-cover shadow-xl border-solid border-2 ${theme.border} `}
              src={IMG_CDN_URL + RestaurantInfo?.cloudinaryImageId}
            />
          </div>

          <div className={` ${theme.border} p-4 border-solid border-2 w-96  `}>
            <h2 className=" text-xl font-medium ">ID:{RestaurantInfo?.id}</h2>
            <h2 className=" font-bold text-4xl  ">{RestaurantInfo?.name}</h2>
            <h2 className="text-3xl font-medium ">
              {RestaurantInfo?.avgRatingString + " stars"}
            </h2>
            <h2 className="text-2xl font-medium ">
              {RestaurantInfo?.locality + " " + RestaurantInfo?.areaName + ","}
            </h2>
            <h2 className="text-2xl font-medium ">{RestaurantInfo?.city}</h2>
          </div>
        </div>
        <div>
        <div className={`p-2 m-2 text-4xl  ${theme.text}`}>Recommended recipes</div>
          <h2 className="text-lg pt-8 ">{restaurantmenu} </h2>
        </div>
        </div>
      </>
    );
  } else if (RestaurantInfo) {
    return (
      <div className={`${theme.text} RestaurantShow flex items-center gap-9 font-ChakraPetch py-20 `}>
        <div>
          <img
            className={`p-2 m-5 w-[700px] h-[600px] bg-cover object-cover shadow-xl border-solid border-2 ${theme.border} `}
            src={IMG_CDN_URL + RestaurantInfo?.cloudinaryImageId}
          />
        </div>

        <div className={`border-solid border-4 ${theme.border} p-4`}>
          <h2 className=" text-xl font-medium ">ID:{RestaurantInfo?.id}</h2>
          <h2 className=" font-bold text-4xl  ">{RestaurantInfo?.name}</h2>
          <h2 className="text-3xl font-medium ">
            {RestaurantInfo?.avgRatingString + " stars"}
          </h2>
          <h2 className="text-2xl font-medium ">
            {RestaurantInfo?.locality + " " + RestaurantInfo?.areaName + ","}
          </h2>
          <h2 className="text-2xl font-medium ">{RestaurantInfo?.city}</h2>
        </div>
      </div>
    );
  } else {
    return <Shimmer />;
  }

  // if(CheckStatus===1){
  //     {console.log("1")}
  //     return (<NoRestaurant/>)
  // }
};
export default RestaurantInfo;
