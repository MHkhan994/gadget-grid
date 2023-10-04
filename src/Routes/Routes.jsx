import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Dashboard from "../Layout/Dashboard";
import Orders from "../Pages/Dashboard/DashboardPages/Orders";
import Categories from "../Pages/Dashboard/DashboardPages/Categories";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'orders',
                element: <Orders></Orders>
            },
            {
                path: 'categories',
                element: <Categories></Categories>
            }
        ]
    }
])

export default router