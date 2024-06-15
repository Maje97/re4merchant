import { Link } from "react-router-dom";

function Navbar() {
    return (
    <nav class="bg-amber-800 py-1">
      <ul class="flex flex-col justify-left md:flex-row md:justify-center">
        <li class="box-border h-10 w-20 border-2 border-black rounded-md mx-2 text-center text-lg"><Link to="/">Home</Link></li>
        <li class="box-border h-10 w-20 border-2 border-black rounded-md mx-2 text-center text-lg"><Link to="/about">About</Link></li>
        <li class="box-border h-10 w-20 border-2 border-black rounded-md mx-2 text-center text-lg"><Link to="/shop">Shop</Link></li>
        <li class="box-border h-10 w-20 border-2 border-black rounded-md mx-2 text-center text-lg"><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
    );
}

export default Navbar;