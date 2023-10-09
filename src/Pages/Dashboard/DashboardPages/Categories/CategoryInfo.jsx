
const CategoryInfo = ({ category }) => {

    console.log(category);

    const { subCategories, name } = category

    return (
        <div className="p-4">
            <h1 className="text-xl">Category Name: <span className="text-blue font-semibold">{name}</span></h1>
            <h1 className="text-xl">Totla sub-categories: <span className="text-orange">{subCategories.length}</span></h1>
        </div>
    );
};

export default CategoryInfo;