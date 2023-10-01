import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import CatagoryNav from "../Pages/Shared/catagoryNav";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Main = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])

    return (
        <div className="bg-white">
            <Navbar></Navbar>
            <CatagoryNav></CatagoryNav>
            <Outlet></Outlet>
            <div className="h-screen"></div>
        </div>
    );
};

export default Main;