import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import MobileNavbar from "../Pages/Shared/MobileNavbar";

const Main = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])

    return (
        <div className="bg-white">
            <div className="hidden lg:block">
                <Navbar></Navbar>
            </div>
            <div className="lg:hidden block">
                <MobileNavbar></MobileNavbar>
            </div>
            <div className="mt-16 lg:mt-0">
                <Outlet></Outlet>
            </div>
            <div className="h-screen"></div>
        </div>
    );
};

export default Main;