import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const FormCategory = () => {

    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onsubmit = data => {
        const { category } = data
        const categoryData = {
            name: category,
            subCategories: []
        }
        console.log(categoryData);
        document.getElementById('my_modal_6').close()
        Swal.fire({
            title: `Add new Category: ${category}`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Add Category'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post('http://localhost:5000/addCategory', categoryData)
                    .then(res => {
                        document.getElementById('my_modal_6').close()
                        if (res.data.insertedId) {
                            Swal.fire({
                                title: 'Category added successfully',
                                text: `Title: ${category}`,
                                icon: 'success',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Categories'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    navigate('/dashboard/categories')
                                }
                            })
                        }
                        else if (res.data.exist) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Category alreasy exist, please check categories before adding a new one.',
                            })
                        }
                        reset()
                    })
            }
            else {
                document.getElementById('my_modal_6').showModal()
            }
        })
    }

    return (
        <form onSubmit={handleSubmit(onsubmit)} className="min-h-[300px]">
            <div className="flex items-center h-[200px]">
                <div className="w-full">
                    <label className="label">
                        <span className="label-text text-white text-lg">Category Title</span>
                    </label>
                    <input {...register('category', { required: true })} type="text" placeholder="Category Title" className="input w-full input-bordered" />
                    {errors.category && errors.category.type === 'required' && <h1 className="pt-2 text-orange">Please add category title</h1>}
                </div>
            </div>
            <button className="secondery-btn mx-auto block">Add Category</button>
        </form>
    );
};

export default FormCategory;