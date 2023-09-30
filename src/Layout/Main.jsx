import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
    return (
        <div className="bg-white">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;