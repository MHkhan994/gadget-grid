import { useEffect, useState } from "react";

import categories from '../../../category.json'
import './CategoryNav.css'
import { BsFillCaretRightFill } from 'react-icons/bs'

const CategoryNav = () => {

    const [scrolled, setScrolled] = useState(false);
    const [searchCategory, setSeachCategory] = useState('')
    const [serachSubCetegory, setSearchSubCategory] = useState('')
    const [serachBrand, setSearchBrand] = useState('')

    console.log(searchCategory, serachSubCetegory, serachBrand);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 57);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div data-aos="fade-down" className={`bg-white shadow-lg h-11 hidden lg:block w-full z-20 ${scrolled ? 'fixed top-0' : 'top-34 relative'}`}>
            <div className="my-container flex justify-between items-center h-full">
                {
                    categories.map((c, i) => {
                        const subC = c.subCategory
                        return <li key={c.name} className="font-semibold hover:text-orange category list-none relative z-30">
                            <button onClick={() => {
                                setSeachCategory(c.name)
                                setSearchSubCategory('')
                                setSearchBrand('')
                            }}
                            >{c.name}</button>

                            {subC.length > 0 && <ul className={`absolute opacity-0 py-4 sub-category bg-white shadow-lg mt-2 z-60 font-normal flex flex-col w-48 border-t-[3px] border-orange ${i > 4 ? 'right-0' : 'left-0'}`}>
                                {
                                    subC.map((sc, j) => {
                                        const brand = sc.brand
                                        return <li key={j} className="category-li px-4 py-1 text-sm">
                                            <div onClick={
                                                () => {
                                                    setSeachCategory(c.name)
                                                    setSearchSubCategory(sc.name)
                                                    setSearchBrand('')
                                                }
                                            } className="flex justify-between items-center">
                                                {sc.name}
                                                {sc.brand && <BsFillCaretRightFill className="text-orange right-icon"></BsFillCaretRightFill>}
                                            </div>
                                            <div className="relative">
                                                {
                                                    brand && <ul className="absolute brand opacity-0 -top-6 left-44 w-48 bg-white shadow-lg text-black">
                                                        {brand.map(b => <li onClick={
                                                            () => {
                                                                setSeachCategory(c.name)
                                                                setSearchSubCategory(sc.name)
                                                                setSearchBrand(b)
                                                            }
                                                        } className="category-li px-4 py-1 text-sm" key={b}>{b}</li>)}
                                                    </ul>
                                                }
                                            </div>
                                        </li>
                                    })
                                }
                            </ul>}

                        </li>
                    })
                }
            </div>
        </div>
    );
};

export default CategoryNav;