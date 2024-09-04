import { useOutletContext } from "react-router-dom";
import { useContext } from "react";
import { lightMode } from "../utils/ThemeContext";
import { darkMode } from "../utils/ThemeContext";

const Shimmer = () => {

  const {mainTheme}=useOutletContext();

  const { dark } = useContext(darkMode);
  const { light } = useContext(lightMode);
 
  
if(mainTheme==="dark"){
 theme= dark
 
}else{
theme=light

}




  return (
    <>
    {/* <div className="p-5 bg-stone-900 my-5 items-center flex justify-center  ">
      <input className="focus:bg-stone-950 p-2 m-2 bg-stone-800 text-white" type="text" placeholder="Search"></input>
      <button className="p-2 m-2 bg-stone-800 rounded-md hover:bg-stone-950 duration-300 ">Search</button>
      </div> */}
      <div className="fakeScreen flex flex-wrap justify-center gap-2 py-20">
        {/* <div className="msgShimmer">
          <h1>Taking longer than usual waiting time?</h1>
          <h2>Reload or Check your Link  </h2>
        </div> */}
        {Array(10)
          .fill("")
          .map((e, indexing) => (
            <div className={`cardFake w-64 h-[455px] m-2 p-2 ${theme.bg}`} key={indexing + Math.random()}>
             
              <div className={`fakeImage ${theme.bgrest} h-52  `} key={indexing + Math.random()}></div>
             
              <div className=  {`fakeBox1 ${theme.bgrest} my-4 h-10        `}  key={indexing + Math.random()}></div>
             
              <div className=  {`fakeBox2 ${theme.bgrest} mt-2 h-8 w-52`}          key={indexing + Math.random()}></div>
             
              <div className=  {`fakeBox3 ${theme.bgrest} h-8 w-36   `}   key={indexing + Math.random()}></div>
             
              <div className=  {`fakeBox3 ${theme.bgrest} h-8 w-40 my-2`}        key={indexing + Math.random()}></div>
             
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
