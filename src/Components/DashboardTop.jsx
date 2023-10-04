
const DashboardTop = ({ routeName }) => {
    return (
        <div className="flex justify-between">
            <div className="bg-gradient w-fit text-white shadow-lg shadow-[#a408c75e] px-14 text-xl py-5 ms-auto mb-3 rounded-lg">
                <h1>Dashboard / {routeName}</h1>
            </div>
        </div>
    );
};

export default DashboardTop;