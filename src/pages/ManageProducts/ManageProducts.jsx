import React, { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import ManageProdCard from './ManageProdCard';
import T1 from '../../assets/t1.png';
import T2 from '../../assets/t2.png';
import T3 from '../../assets/t3.png';
import T4 from '../../assets/t4.png';
import T5 from '../../assets/t5.png';
import M1 from '../../assets/m1.png';
import M2 from '../../assets/m2.png';
import M3 from '../../assets/m3.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ManageProducts() {

    const navigate = useNavigate();

    const auth = useSelector(state => state.user);
    const state = useSelector(state => state);
    const initialData = useSelector(state => state.initialData);
    const allcategories = initialData.categories;
    const allproducts = state.product.products;
    const currentUser = auth.user;

    const [products, setProducts] = useState(null);
    const [categories, setCategories] = useState(null);

    var tempCategory = [];

    useEffect(() => {
        const sellerProducts = allproducts.filter(filterProducts);

        function filterProducts(p) {
            return p.createdBy === currentUser._id || currentUser.id;
        }
        setProducts(sellerProducts);
    }, [])

    useEffect(() => {
        const sellerCategories = allcategories.filter(function (c) {
            return products?.filter(function (p) {
                if (p.category == c._id) {
                    console.log(c);
                    return c;
                }
            })
        });
        // console.log("SC = "+sellerCategories);
    }, [products])

    const handleSidebarClickOne = () => {
        navigate('/userprofile')
    }
    const handleSidebarClickTwo = () => {
        navigate('/addproduct')
    }
    const handleSidebarClickThree = () => {
        navigate('/manageproducts')
    }


    return (
        <>
            <Navbar showSearchBar={true} />
            <div className='flex w-full'>
                    <div className="bg-black h-[1300px] w-[50px] mt-5 pt-16 flex flex-col items-center left-0">
                        <span className="mb-7 h-4 w-4"
                            onClick={handleSidebarClickOne}
                        >
                            <img className="w-full h-full cursor-pointer " src={M1} alt="" />
                        </span>
                        <span className="mb-7 h-4 w-4"
                            onClick={handleSidebarClickTwo}
                        >
                            <img className="w-full h-full cursor-pointer" src={M2} alt="" />
                        </span>
                        <span className="mb-7 h-4 w-4"
                            onClick={handleSidebarClickThree}>
                            <img className="w-full h-full cursor-pointer " src={M3} alt="" />
                        </span>
                    </div>
                <div className='bg-[#f3f3f3] flex w-full'>
                    <div className='flex flex-col w-full items-center min-h-screen '>


                        <div className='h-16 items-center flex justify-between w-full px-9 '>
                            <div className='font-semibold text-lg'>Manage Products</div>
                            <div className='font-semibold border rounded-full w-[140px] h-[37px] flex items-center justify-center cursor-pointer'>Add Products</div>
                        </div>


                        <div className='bg-white min-h-[630px] w-[95%] shadow flex flex-col shadow'>
                            <p className='w-full flex text-sm font-semibold p-2 pl-3'>Category 1</p>
                            <div className='flex px-12 justify-start mt-10 max-w-full grid grid-cols-5 '>
                                {
                                    products?.map((p, key) => (
                                        <ManageProdCard key={key} product={p} />
                                    ))
                                }
                                {/* <ManageProdCard img={T1} />
                            <ManageProdCard img={T2} />
                            <ManageProdCard img={T3} />
                            <ManageProdCard img={T4} />
                            <ManageProdCard img={T5} /> */}
                            </div>
                            {/* <div className='flex px-12 justify-around mt-10'>
                            {/* <ManageProdCard img={T1} />
                            <ManageProdCard img={T2} />
                            <ManageProdCard img={T3} />
                            <ManageProdCard img={T4} />
                            <ManageProdCard img={T5} />
                        </div> */}

                        </div>


                        {/* <div className='bg-white h-[930px] w-[95%] shadow flex flex-col mt-7 shadow'>
                        <p className='w-full flex text-sm font-semibold p-2 pl-3'>Category 2</p>
                        <div className='flex px-12 justify-around mt-10'>
                            <ManageProdCard img={T1} />
                            <ManageProdCard img={T2} />
                            <ManageProdCard img={T3} />
                            <ManageProdCard img={T4} />
                            <ManageProdCard img={T5} />
                        </div>
                        <div className='flex px-12 justify-around mt-10'>
                            <ManageProdCard img={T1} />
                            <ManageProdCard img={T2} />
                            <ManageProdCard img={T3} />
                            <ManageProdCard img={T4} />
                            <ManageProdCard img={T5} />
                        </div>
                        <div className='flex px-12 justify-around mt-10'>
                            <ManageProdCard img={T1} />
                            <ManageProdCard img={T2} />
                            <ManageProdCard img={T3} />
                            <ManageProdCard img={T4} />
                            <ManageProdCard img={T5} />
                        </div>
                    </div> */}

                    </div>
                </div>


            </div>
        </>
    )
}

export default ManageProducts