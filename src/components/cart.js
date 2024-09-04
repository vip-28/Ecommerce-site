import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
import { useOutletContext } from "react-router-dom";
import { useContext } from "react";
import { darkMode } from "../utils/ThemeContext";
import { lightMode } from "../utils/ThemeContext";

const Cart = () => {
  const { mainTheme } = useOutletContext();

  const { dark } = useContext(darkMode);
  const { light } = useContext(lightMode);

  if (mainTheme === "dark") {
    theme = dark;
  } else {
    theme = light;
  }

  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleData = () => {
    dispatch(clearCart());
  };

  let sum = 0;
  cartItems.map((item) => {
    item.price = Number(item.price);
    sum += item.price;
  });
  sum = sum / 100;

  let grandTotal = sum + 30 + (sum * 12) / 100 + 1 + 50 - 75;

  let orderID = Math.floor(Math.random() * 10000000);

  if (cartItems.length !== 0) {
    return (
      <div className="py-20">
        <div>
          <div className="flex justify-between p-5">
            <h1 className={` ${theme.text} font-bold text-3xl pl-[660px]`}>
              Cart
            </h1>
            <button
              className={`border-solid border-2 ${theme.border} p-1 bg-stone-500 hover:bg-stone-700 active:bg-stone-900 text-xl `}
              onClick={() => {
                handleData();
              }}
            >
              Clear Cart
            </button>
          </div>

          <div className="flex gap-7 flex-wrap mx-6 ">
            {" "}
            {cartItems.map((item) => (
              <FoodItem key={item.id} {...item} />
            ))}{" "}
          </div>
          <div>
            <h1 className={` ${theme.text} font-bold text-3xl mt-5 ml-2`}>
              Total Items - {cartItems.length}
            </h1>
          </div>
        </div>

        <div className={`${theme.text}`}>
          <p className="text-6xl">
            ---------------------------------------------------------------
          </p>
          <h1 className="text-4xl pb-1 pl-[600px]">Order Details</h1>
          <h2 className="text-sm pb-10 pl-[670px]">ID-{orderID}</h2>

          <div className="container m-auto grid grid-cols-2 gap-3 pl-96">
            <div>Item Total</div>
            <div>₹{sum.toFixed(2)}</div>
            <div>Order Packaging Charges</div>
            <div>₹30.00</div>
            <div>Taxes (12%)</div>
            <div>₹{((12 * sum) / 100).toFixed(2)}</div>
            <div>Platform Fee</div>
            <div>₹1.00</div>
            <div>Delivery Fee</div>
            <div>₹50.00</div>
            <div>Discount Applied (Platform Offer)</div>
            <div>-₹75</div>
            <svg width="700" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 0 15 Q 10 15 675 15"
                stroke="gray"
                fill="transparent"
              />
            </svg>
            <div></div>
            <div className="font-bold">Total Payable Amount</div>
            <div  className="font-bold">₹{grandTotal.toFixed(2)}</div>
          </div>
          <p className="text-6xl">
            ---------------------------------------------------------------
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1
          className={`text-5xl pt-40 pb-10 ${theme.text} flex justify-center font-bold h-72 `}
        >
          Uh-Oh! your Cart is Empty ;(
        </h1>
        <div className={`flex justify-center ${theme.fill3} h-52`} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100px"
            viewBox="0 -960 960 960"
            width="100px"
            
          >
            <path d="M480-584q-14.45 0-24.23-9.78Q446-603.55 446-618t9.77-24.22Q465.55-652 480-652q14.45 0 24.23 9.78Q514-632.45 514-618t-9.77 24.22Q494.45-584 480-584Zm-30-136v-200h60v200h-60ZM289.79-80Q260-80 239-101.21t-21-51Q218-182 239.21-203t51-21Q320-224 341-202.79t21 51Q362-122 340.79-101t-51 21Zm404 0Q664-80 643-101.21t-21-51Q622-182 643.21-203t51-21Q724-224 745-202.79t21 51Q766-122 744.79-101t-51 21ZM62-820v-60h116l170 364h287.71L796-796h67L701-493q-11 19-28.56 30.5T634-451H331l-56 104h491v60H284q-37.66 0-57.33-30T224-378l64-118-148-324H62Z" />
          </svg>
        </div>
      </div>
    );
  }
};

export default Cart;
