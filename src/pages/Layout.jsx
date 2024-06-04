import { Outlet } from "react-router-dom";

import MainHeader from "../components/MainHeader.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Layout() {
    return (
        <div class="flex h-screen flex-col justify-between">
            <div>
                <MainHeader />
                <Navbar />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
}