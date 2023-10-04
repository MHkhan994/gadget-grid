
import { Outlet } from 'react-router-dom';
import Sidebar from '../Pages/Dashboard/Sidebar/Sidebar';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';

const Dashboard = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])

    return (
        <div className='flex bg-[#f6f6fd] h-screen'>
            <Sidebar></Sidebar>
            <div className='w-full p-5 overflow-y-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;