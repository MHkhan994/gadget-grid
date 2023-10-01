import { NavLink } from "react-router-dom";
import './Navbar.css'
import { useEffect, useState } from "react";
import { FaUserCircle, FaHeart } from 'react-icons/fa';
import { BsCart } from 'react-icons/bs'

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
        <div data-aos="fade-down" className={`py-4 w-full ${scrolled ? 'bg-[#ffffff] backdrop-blur-md' : ''}`}>
            <div className="my-container flex justify-between">
                <img src="./logo.png" className="h-12" alt="" />
                <div data-aos-delay="150" data-aos="fade-down" className="flex items-center">
                    <div className="input-group border-purple-700 border rounded-lg h-10">
                        <input type="text" placeholder="Search gadgets" className="px-4 lg:w-72 focus:outline-none" />
                        <button className="bg-gradient text-white h-[39px]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <ul className="flex gap-6 items-center text">
                    <button data-aos-delay="60" data-aos="fade-down" className="text-2xl text-blue relative">
                        <BsCart></BsCart>
                        <div className="absolute h-5 w-5 bg-green-500 rounded-full -top-4 -right-3">
                            <p className="text-sm text-white">1</p>
                        </div>
                    </button>
                    <button data-aos-delay="150" data-aos="fade-down" className="text-2xl text-blue relative">
                        <FaHeart></FaHeart>
                        <div className="absolute h-5 w-5 bg-green-500 rounded-full -top-4 -right-3">
                            <p className="text-sm text-white">1</p>
                        </div>
                    </button>
                    <button data-aos-delay="200" data-aos="fade-down" className="text-2xl text-blue">
                        <FaUserCircle></FaUserCircle>
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;