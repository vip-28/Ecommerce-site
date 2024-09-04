import React from "react";
import { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client" ;
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./components/config";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantInfo from "./components/RestaurantInfo";
import NoRestaurant from "./components/NoRestaurant";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/cart";
import { useContext } from "react";
import lightMode from "./utils/lightContext";
import darkMode from "./utils/darkContext";


const Instamart= lazy(()=>import("./components/Instamart"))
   /**
             * header
             * -logo
             * -list items 
             * -cart
             * body
             *   - search
             *   - card/ restaurant list
             *        -restaurant card
             *            -image
             *            -name
             *            -rating
             *            -cusines
             * footer
             * -links
             * -copyright
             */

  





// const burgerking= [{
//     name:"Burger King",
//     image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/e33e1d3ba7d6b2bb0d45e1001b731fcf",
//     cuisines:["Burger","American"],
//     rating:"4.2"
// },{
//     name:"Burger King",
//     image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/e33e1d3ba7d6b2bb0d45e1001b731fcf",
//     cuisines:["Burger","American"],
//     rating:"4.2"
// },{
//     name:"Burger King",
//     image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/e33e1d3ba7d6b2bb0d45e1001b731fcf",
//     cuisines:["Burger","American"],
//     rating:"4.2"
// },{
//     name:"Burger King",
//     image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/e33e1d3ba7d6b2bb0d45e1001b731fcf",
//     cuisines:["Burger","American"],
//     rating:"4.2"
// },]





//now props can also be used here and then props.restaurant.info..... like tht we can do now we using destructuring here




const AppLayout =()=>{


    const [mainTheme,setMainTheme]=useState("");
    function settingTheme(value){
        
       setMainTheme(value)
       
        }
       
        const { dark } = useContext(darkMode);
        const { light } = useContext(lightMode);
        
              if(mainTheme==="dark"){
                  theme= dark
                 }else{
                 theme=light
                 }
               
        
        


    return(
        
          <Provider store={store}>
          <div className={`${theme.bgapp} text-white duration-500`}>
            <Header settingTheme={settingTheme}/>                
            <Outlet context={{mainTheme}}/> 
            <Footer/>
            </div>
            </Provider>

        
    )
}


const appRouter= createBrowserRouter(

    [
    {
        path:"/",
        element:<AppLayout />,
        errorElement: <Error/>,
        children:[
            {
                
                path:"/",
                element:<Body />
            },
            {
                path:"/Instamart",
                element:<Suspense fallback={<h1>Loading...</h1>}> <Instamart/></Suspense>
            },
            
            {
                path:"/About",
                element:<About/>
            },
            {
                path:"/cart",
                element:<Cart/>
              
            },
            {
                path:"/Contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantInfo/>,
            
                
            },
            {
                path:"/Info",
                element:<Instamart/>,
            
                
            },
            
            

        ]
    },

])


const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

