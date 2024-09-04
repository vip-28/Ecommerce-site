import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "./config";
import { removeItem } from "../utils/cartSlice";
import { Themefinder } from "./restcard";



Themefinder




const FoodItem = (item)=>{
const {id,name,description,imageId,price}= item
const dispatch= useDispatch();
const removefooditem= (item)=>{
dispatch(removeItem(item))
}
    return(
        <div className={`grid grid-flow-row ${theme.text}`}> 
        <div className={`border-2 border-solid ${theme.border} inline-block w-72 p-4 text-center`}>
            
            <img className="h-64 w-full " alt="Picture Not Available" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+imageId} />
            <h2 className="text-sm " >{id}</h2>
            <h2 className="font-bold text-2xl ">{name}</h2>
            <h3 className="text-xs mb-6">{description}</h3>
            <h2 className="text-md">₹ {price/100}</h2>
            

        </div>
            <button className="bg-stone-500 hover:bg-stone-700 active:bg-stone-900 p-2 h-10" onClick={()=>{
                removefooditem(item)

            } }>Remove Item</button>
        </div>
    )
}


export default FoodItem;