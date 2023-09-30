import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="py-2 my-container flex justify-between">
            <img src="./logo.png" className="h-14" alt="" />
            <ul className="flex gap-6 items-center text-lg">
                <NavLink className={({ isActive }) => isActive ? 'text-gradient navlinks' : 'navlinks'} to={'/'}>Home</NavLink>
                <NavLink to={'/about'} className={({ isActive }) => isActive ? 'text-gradient navlinks' : 'navlinks'}>About</NavLink>

                <button className="primary-btn">
                    Login
                </button>
            </ul>
        </div>
    );
};

export default Navbar;