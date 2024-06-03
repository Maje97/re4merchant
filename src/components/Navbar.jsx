import { Link } from "react-router-dom";

function Navbar() {
    return (
    <nav class="bg-amber-800 py-1">
      <ul class="flex flex-row justify-center">
        <li class="border-solid border-2 border-black rounded-md mx-1 px-2 py-1">Home</li>
        <li class="border-solid border-2 border-black rounded-md mx-1 px-2 py-1">Shop</li>
        <li class="border-solid border-2 border-black rounded-md mx-1 px-2 py-1">About</li>
        <li class="border-solid border-2 border-black rounded-md mx-1 px-2 py-1">Contact</li>
      </ul>
    </nav>
    );
}

export default Navbar;