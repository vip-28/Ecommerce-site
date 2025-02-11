import { Link } from "react-router-dom";


const Landing= ()=>{
    const foodItems = [
        { id: 1, name: "Margherita Pizza", price: "$10.99", image: "pizza.jpg" },
        { id: 2, name: "Cheese Burger", price: "$8.99", image: "burger.jpg" },
        { id: 3, name: "Sushi Platter", price: "$15.99", image: "sushi.jpg" },
      ];
      
    
    return(
        <div className="mt-20 bg-gray-100 text-gray-900">
        {/* Hero Section */}
        <section
          className="relative w-full h-screen flex items-center justify-center bg-cover bg-center text-white text-center"
          style={{
            backgroundImage:
              "url('https://t3.ftcdn.net/jpg/01/54/14/86/360_F_154148685_yvijeC6L2SFpvqFJ5H1lunPg40FzCAf1.jpg')",
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
          <div className="relative z-10 max-w-2xl px-5">
            <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-lg">QuickEats</h1>
            <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-lg">
              🍽️ Delicious Food, Delivered Fast
            </h1>
            <p className="mt-4 text-lg opacity-90">
              Order your favorite meals in just a few clicks and enjoy fresh, tasty food at your doorstep.
            </p>
            <button className="mt-6 bg-white text-gray-800 px-6 py-3 text-lg font-semibold rounded-full shadow-lg transition hover:bg-gray-200 hover:scale-105 focus:ring-4 focus:ring-white">
            <Link to="/start">  Order Now 🚀</Link>
            </button>
          </div>
        </section>
      </div>
      
      
    )
}


export default Landing;