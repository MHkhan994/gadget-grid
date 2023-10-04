import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Categories = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/categories`)
            return res.data
        }
    })

    console.log(categories, "hello");

    console.log('hello');

    return (
        <div>
            <h1>this is categories</h1>
        </div>
    );
};

export default Categories;