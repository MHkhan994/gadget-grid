
import { Outlet } from 'react-router-dom';
import Sidebar from '../Pages/Dashboard/Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className='flex gap-10 bg-white'>
            <Sidebar></Sidebar>
            <div className='w-full'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;