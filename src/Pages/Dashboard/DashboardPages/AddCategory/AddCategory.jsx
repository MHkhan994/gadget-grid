import { useState } from "react";
import DashboardTop from "../../../../Components/DashboardTop";
import { AiOutlineClose } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import FormCategory from "./FormCategory";
import FormSubCategory from "./FormSubCategory";
import FormBrand from "./FormBrand";

const AddCategory = () => {

    const [clickedButton, setClickedButton] = useState('')


    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/categories`)
            return res.data
        }
    })


    const buttons = ['category', 'sub-category', 'brand']

    return (
        <div>
            { }
            <DashboardTop routeName={'Add Category'}></DashboardTop>

            <div className="border-t rounded-md min-h-[75vh] shadow-lg flex justify-center items-center">
                <div className="flex flex-col gap-4">
                    {
                        buttons.map(btn => <button
                            key={btn}
                            className="primary-btn capitalize"
                            onClick={() => {
                                document.getElementById('my_modal_6').showModal()
                                setClickedButton(btn)
                            }}
                        >
                            Add {btn}
                        </button>)
                    }
                </div>

                <dialog id="my_modal_6" className="modal">
                    <div className="modal-box my-modal lg:w-[70%] bg-[#6917e388] relative backdrop-blur-[10px] shadow-xl shadow-[#a408c769]">

                        <div className="min-h-[300px]">
                            {
                                clickedButton === 'category' && <FormCategory></FormCategory>
                            }
                            {
                                clickedButton === 'sub-category' && <FormSubCategory categories={categories}></FormSubCategory>
                            }
                            {
                                clickedButton === 'brand' && <FormBrand categories={categories}></FormBrand>
                            }
                        </div>

                        <button className='absolute top-0 right-0 bg-orange p-1 rounded-bl-xl' type="button" onClick={() => document.getElementById('my_modal_6').close()}>
                            <AiOutlineClose className='text-white text-2xl'></AiOutlineClose>
                        </button>
                    </div>
                </dialog>
            </div>

        </div>
    );
};

export default AddCategory;