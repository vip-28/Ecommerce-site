import { IMG_CDN_URL } from "./config";
import { useOutletContext } from "react-router-dom";

export const Themefinder= ({props})=>{
 theme= props

}

const RestaurantCard = ({...restaurant})=>{

    const {name, cuisines, cloudinaryImageId}= restaurant.info;
    const{lastMileTravelString}=restaurant.info.sla;



    


    return(
        <div className={` ${theme.bg} card w-64 h-[475px] p-2 shadow-lg m-2  ${theme.text} hover:p-4 duration-500  `}>
            <img  alt="" src={ IMG_CDN_URL+cloudinaryImageId} className="w-full h-52 "></img>
            <h2 className="h-24 font-bold text-2xl font-ChakraPetch my-2 ">{name}</h2>
            <h3 className="h-24">{cuisines.join(" ,")}</h3>
            <div className="keywordFood"><h4>{lastMileTravelString}</h4></div>
            
        </div>
    )
}


export default RestaurantCard;