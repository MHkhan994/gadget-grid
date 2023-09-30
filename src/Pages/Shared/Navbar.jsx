import { NavLink } from "react-router-dom";
import './Navbar.css'
import { useEffect, useState } from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`py-2 w-full fixed top-0 z-20 ${scrolled ? 'bg-[#ffffffb9] backdrop-blur-md' : ''}`}>
            <div className="my-container flex justify-between">
                <img src="./logo.png" className="h-14" alt="" />
                <div className="flex items-center">
                    <div className="input-group border-purple-700 border rounded-lg">
                        <input type="text" placeholder="Search gadgets" className="px-4 w-64 focus:outline-none" />
                        <button className="btn btn-square bg-gradient text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <ul className="flex gap-6 items-center text-lg">
                    <NavLink className={({ isActive }) => isActive ? 'text-gradient navlinks' : 'navlinks'} to={'/'}>Home</NavLink>
                    <NavLink to={'/about'} className={({ isActive }) => isActive ? 'text-gradient navlinks' : 'navlinks'}>About</NavLink>

                    <button className="primary-btn">
                        Login
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;