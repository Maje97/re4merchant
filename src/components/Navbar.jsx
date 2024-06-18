import { Link } from "react-router-dom";
import cartimg1 from "../images/icons8-shopping-trolley-64.png";
import { useContext } from "react";
import { CartUpdater } from "../App.js";

function Navbar() {
  const {cartAmount} = useContext(CartUpdater);

  let totalamount = cartAmount.reduce(
    (total, value) => {return total + value;} 
  )

    return (
    <nav class="bg-amber-800 py-1">
      <ul class="flex flex-col justify-center items-center md:flex-row">
        <li class="box-border h-10 w-20 border-2 border-black rounded-md mx-2 text-center text-lg"><Link to="/">Home</Link></li>
        <li class="box-border h-10 w-20 border-2 border-black rounded-md mx-2 text-center text-lg"><Link to="/about">About</Link></li>
        <li class="box-border h-10 w-20 border-2 border-black rounded-md mx-2 text-center text-lg"><Link to="/shop">Shop</Link></li>
        <li class="box-border h-10 w-24 border-2 border-black rounded-md mx-2 text-lg"><Link to="/cart" class="flex flex-row justify-evenly"><p>Cart</p><img class="h-5 self-center" src={cartimg1} alt="cartimg1"/>{totalamount}</Link></li>
      </ul>
    </nav>
    );
}

export default Navbar;