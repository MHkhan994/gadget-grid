import { useEffect, useState } from "react";

const CatagoryNav = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 57);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const category = [
        {
            name: 'Desktop',
            subCategory: 'd'
        },
        'Laptop', 'Monitor', 'UPS', 'Phone', 'Printer', 'Camera', 'Security', 'Components']

    const num = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    return (
        <div data-aos="fade-down" className={`bg-white h-11 hidden lg:block w-full z-50 ${scrolled ? 'fixed shadow-lg top-0' : 'top-34 block'}`}>
            <div className="my-container flex justify-between items-center h-full">
                {
                    num.map(n => {
                        return <h1 className="font-semibold">hello</h1>
                    })
                }
            </div>
        </div>
    );
};

export default CatagoryNav;