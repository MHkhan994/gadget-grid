import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import DashboardTop from "../../../Components/DashboardTop";

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useState } from "react";

const Categories = () => {

    const [activeIndex, setActiveIndex] = useState([])

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/categories`)
            return res.data
        }
    })

    const categories2 = ['desktop', 'laptop', 'camera']

    return (
        <div>
            <DashboardTop routeName={'Category'}></DashboardTop>
            <div className="min-h-screen w-full bg-white p-5 rounded-md shadow-lg">
                {
                    categories2.map((c, i) => {
                        return <div key={i} className="category w-full border mb-3">
                            <div onClick={() => setActiveIndex(pre => activeIndex.includes(i) ? pre.filter(j => j !== i) : [...pre, i])} className="h-14 cursor-pointer relative shadow-md w-full rounded-md flex items-center justify-between text-xl px-5">
                                <div className="flex items-center">
                                    <p>
                                        {c}
                                    </p>
                                    {activeIndex.includes(i) && <div className="h-3 w-3 ms-5 rounded-full left-1/2 bg-blue shadow-green-500 shadow-lg"></div>}
                                </div>
                                {
                                    activeIndex.includes(i) ?
                                        <AiOutlineMinus className="text-orange"></AiOutlineMinus>
                                        :
                                        <AiOutlinePlus className="text-blue"  ></AiOutlinePlus>
                                }

                            </div>
                            {
                                activeIndex.includes(i) && <div className="h-20 w-full bg-white shadow-md"></div>
                            }
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Categories;