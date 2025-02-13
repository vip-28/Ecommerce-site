import { IMG_CDN_URL } from "./config";
import { useOutletContext } from "react-router-dom";

export const Themefinder= ({props})=>{
 theme= props

}

const RestaurantCard = ({...restaurant})=>{

    const {gymName, cuisines, cloudinaryImageId,reviews,avgRating,areaName}= restaurant;


    


    return(
        <div className={`  card w-64 h-[475px] p-2 shadow-lg m-2  text-orange-500 hover:p-4 duration-500  `}>
            <img  alt="" src={cloudinaryImageId} className="w-full h-52 "></img>
            <h2 className="h-16 font-bold text-2xl font-ChakraPetch my-2 ">{gymName}</h2>
            <button className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
  Buy Membership
</button>
            <h3 className="h-20 text-orange-800">reviews:{reviews}<br/>Rating:{avgRating}</h3>

            <div className="keywordFood text-orange-800"><h4>{areaName}</h4></div>
            
        </div>
    )
}


export default RestaurantCard;