import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import {
  darkCall,
  lightCall,
  lightMode,
  themeDecider,
} from "../utils/ThemeContext";
import { darkMode } from "../utils/ThemeContext";
import { render } from "@testing-library/react";

let a=0;

export const Title = () => {


  return (
    <a href="/">
      <img
        className={` p-1 h-20 w-24 ${theme.image} } duration-500`}
        alt="logo"
        src={require(`./mocks/file.png`)}
        
      />
    </a>
  );
};


const loggedInUser = () => {
  return false;
};

const Header = ({settingTheme}) => {
  
  const cartItems = useSelector((store) => store.cart.items);

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const { user } = useContext(UserContext);

  const { dark } = useContext(darkMode);
  const { light } = useContext(lightMode);

  const [theme, setTheme] = useState(light);

  useEffect(() => {
    theme;

  }, [theme]);

  return (
    <div className="fixed top-0 w-full">
      <div
      className={`flex justify-between ${theme?.bg} items-center shadow-lg ${theme.text} px-3 `}
    >
  
      <Title />
      <h1>{useOnline() ? `Online : ✔️ ${user.name} ` : `Offline : ❌ `}</h1>
      <div className="nav-items">
        <ul className="flex gap-5 pr-48">
          <li>
            <Link className="HeaderLink" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="HeaderLink" to="/About">
              About
            </Link>
          </li>
          <li>
            <Link className="HeaderLink" to="/Contact">
              {" "}
              Contact Us{" "}
            </Link>
          </li>
          <li>
            <Link className="HeaderLink" to="/Info">
              {" "}
              Info{" "}
            </Link>
          </li>
          <li>
            <Link className="HeaderLink" to="/cart">
              {" "}
              Cart- {cartItems.length}{" "}
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button
          onClick={() => {
            setTheme(light);
            settingTheme("light");
        
          }}
          className={`p-2 ${theme.fill2} `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
          >
            <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
          </svg>
        </button>
        <button
          onClick={() => {
            setTheme(dark);
            settingTheme("dark");
            console.log()
          }}
          className={`p-2 ${theme.fill} `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
          >
            <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
          </svg>
        </button>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
      
    </div>
    
    </div>
      
  );
};

export default Header;
