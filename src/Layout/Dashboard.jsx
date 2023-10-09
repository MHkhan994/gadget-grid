
import { Outlet } from 'react-router-dom';
import Sidebar from '../Pages/Dashboard/Sidebar/Sidebar';
import 'aos/dist/aos.css';
import { useContext, useEffect } from 'react';
import Aos from 'aos';
import { AuthContext } from '../Providers/AuthProvider';

const Dashboard = () => {

    const { user } = useContext(AuthContext)

    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])

    return (
        <div className='flex bg-[#f6f6fd] h-screen'>
            <Sidebar></Sidebar>
            <div className='w-full max-w-[1400px] mx-auto p-5 overflow-y-auto'>
                <div className="flex justify-between absolute top-5">
                    <div className="flex gap-4 items-center">
                        <img src={user?.photoURL} className="h-16 w-16 border-2 object-cover rounded-full shadow-md shadow-[#8974ff6e]" alt="" />
                        <div>
                            <h1 className="text-blue font-semibold text-xl">{user?.displayName}</h1>
                            <p className="text-green-500">Admin</p>
                        </div>
                    </div>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;