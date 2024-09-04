
export function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
}

const API = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.172251&lng=77.44007739999999&restaurantId=785275&catalog_qa=undefined&submitAction=ENTER";


async function MenuAPI(){

try{
    const info= await fetch(API);
    const data = await info.json();
   
}catch(err){
    console.log(err)
}


}


MenuAPI();