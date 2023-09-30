import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
    return (
        <div className="bg-white">
            <Navbar></Navbar>
            <div className="">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;