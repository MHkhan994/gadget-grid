import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import DashboardTop from "../../../../Components/DashboardTop";

const Categories = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/categories`)
            return res.data
        }
    })


    const [openedCategory, setOpenedCategory] = useState('')
    const [openedSubCategory, setOpenedSubCategory] = useState('')

    console.log(openedSubCategory);


    return (
        <div>
            <DashboardTop routeName={'Category'}></DashboardTop>
            <div className="h-[75vh] grid grid-cols-3  w-full border-t rounded-md shadow-lg">
                <div className="h-full border-r-2 pb-3 overflow-y-auto category-sidebar">
                    <h1 className="py-3 bg-purple text-center text-xl font-normal text-white">Categories</h1>
                    <ul className="">
                        {
                            categories.map(category =>
                                <li
                                    className={`py-2 px-3 transition-all category-li cursor-pointer border-b ${openedCategory === category.name ? 'bg-orange text-white' : ''}`}
                                    key={category._id}
                                    onClick={() => {
                                        setOpenedCategory(category.name)
                                        setOpenedSubCategory('')
                                    }}
                                >
                                    {category.name}
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="h-full border-r-2 pb-3 overflow-y-auto category-sidebar">
                    <h1 className="py-3 bg-gradient text-center text-xl font-normal text-white">Sub-categories</h1>
                    {
                        categories.map(category => {
                            const subCategories = category.subCategories
                            if (subCategories && category.name === openedCategory) {
                                return <ul key={category.name}>
                                    {
                                        subCategories.map(sub => <li
                                            className={`py-2 px-3 transition-all category-li cursor-pointer border-b ${openedSubCategory === sub.name ? 'bg-orange text-white' : ''}`}
                                            key={sub.name}
                                            onClick={() => setOpenedSubCategory(sub.name)}
                                        >
                                            {sub.name}

                                        </li>)
                                    }
                                </ul>
                            }

                        })
                    }
                </div>
                <div className="h-full border-r-2 pb-3 overflow-y-auto category-sidebar">
                    <h1 className="py-3 bg-blue text-center text-xl font-normal text-white">Brands</h1>
                    {
                        categories.map(category => {
                            const subCategories = category.subCategories
                            return (
                                subCategories.map(sub => {
                                    const brands = sub.brands
                                    if (brands && sub.name === openedSubCategory) {
                                        return <ul key={sub.name}>
                                            {
                                                brands.map(brand => <li
                                                    className={`py-2 px-3 transition-all bg-orange text-white cursor-pointer border-b`}
                                                    key={brand}

                                                >
                                                    {brand}

                                                </li>)
                                            }
                                        </ul>
                                    }
                                })
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;