import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const FormSubCategory = ({ categories }) => {

    const nagigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onsubmit = data => {
        const { category, subCategory } = data
        console.log(category, subCategory);
        const subCategoryData = {
            name: subCategory,
            brands: []
        }
        axios.post('http://localhost:5000/add-subCategory', { subCategoryData, category })
            .then(res => {
                console.log(res.data);
                document.getElementById('my_modal_6').close()
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Sub-category added successfully',
                        text: `Title: ${subCategory}`,
                        icon: 'success',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Categories'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            nagigate('/dashboard/categories')
                        }
                    })
                }
                else if (res.data.matchedCount > 0 && res.data.modifiedCount <= 0) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Sub-category alreasy exist, please check categories before adding a new one.',
                    })
                }
                reset()
            })
    }

    return (
        <form onSubmit={handleSubmit(onsubmit)} className="min-h-[300px]">
            <div className="flex justify-center flex-col items-center h-[300px]">
                <div className="w-full">
                    <label className="label">
                        <span className="label-text text-white text-lg">Select Category</span>
                    </label>
                    <select {...register('category')} className="w-full input input-bordered">
                        {
                            categories.map(c => <option key={c._id} value={c.name}>{c.name}</option>)
                        }
                    </select>
                </div>
                <div className="w-full">
                    <label className="label">
                        <span className="label-text text-white text-lg">Sub-category Title</span>
                    </label>
                    <input {...register('subCategory', { required: true })} type="text" placeholder="Sub-category Title" className="input w-full input-bordered" />
                    {errors.subCategory && errors.subCategory.type === 'required' && <h1 className="pt-2 text-orange">Please add category title</h1>}
                </div>
            </div>
            <button className="secondery-btn mx-auto block">Add Sub-category</button>
        </form>
    );
};

export default FormSubCategory;