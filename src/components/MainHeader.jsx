import logo from "../images/Merchant_Resident_Evil_4_remake.png";

function MainHeader(){
    
    return (
        <header class="h-36 flex flex-row justify-start bg-stone-500">
            <div class="h-36 w-52">
                <img class="object-none object-top h-36 w-52" src={logo} alt="Logo"/>
            </div>
            <div class="pt-4 pl-4">
                <h1 class="text-xl">The Merchant</h1>
                <p>"Got a selection of good things on sale, stranger!"</p>
            </div>
        </header>
    );
}

export default MainHeader;