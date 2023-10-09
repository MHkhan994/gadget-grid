import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const DashboardTop = ({ routeName }) => {
    const { user } = useContext(AuthContext)

    return (
        <div className="bg-gradient w-fit text-white shadow-lg shadow-[#a408c75e] px-14 text-xl py-5 ms-auto mb-6 rounded-lg">
            <h1>Dashboard / {routeName}</h1>
        </div>
    );
};

export default DashboardTop;