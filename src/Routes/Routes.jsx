import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Dashboard from "../Layout/Dashboard";
import Orders from "../Pages/Dashboard/DashboardPages/Orders";
import AddCategory from "../Pages/Dashboard/DashboardPages/AddCategory/AddCategory";
import Categories from "../Pages/Dashboard/DashboardPages/Categories/Categories";

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
            },
            {
                path: 'add-category',
                element: <AddCategory></AddCategory>
            }
        ]
    }
])

export default router