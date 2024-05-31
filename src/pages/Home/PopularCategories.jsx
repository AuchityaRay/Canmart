import React, { useEffect, useState } from 'react';
import IphoneImg from '../../assets/popular_categories/iphone.png';
import TshirtImg from '../../assets/popular_categories/tshirt1.png';
import Electronics1Img from '../../assets/popular_categories/electronics1.png'; import Electronics2Img from '../../assets/popular_categories/electronics2.png';
import WomensClothingImg from '../../assets/popular_categories/womenclothes.png';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const PopularCategories = () => {

    const initialData = useSelector(state => state.initialData);
    const category = initialData.categories;
    const [categories,setCategories] = useState(null);

    useEffect(() => {

        const result = category.filter(checkParent);

        function checkParent(a) {
            return a.parentId == undefined;
        }

        setCategories(result);

    }, [category])


    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/viewcategory');
    }

    return (
        <div className='h-[650px] flex flex-col items-center'>
            <br />
            <div className='h-32 flex items-center justify-center'><p className='mb-10 text-[32px] font-semibold text-[#0F2137]' >Popular Categories</p></div>

            <div className='flex h-[430px] justify-center items-center'>
                <div className='bg-[#ffeeee] h-full mr-[5px] w-[330px] relative flex items-center justify-center flex-col cursor-pointer'
                    onClick={()=>{
                        navigate(`/viewcategory/${categories?categories[0]._id:""}`);
                    }}
                >
                    <img src={IphoneImg} alt="" style={{ transform: "scale(0.8)" }} />
                    <p className='font-semibold relative top-[-35px]'>{categories?categories[0].name:""}</p>
                </div>
                <div className='flex flex-col h-full w-[330px] mr-[5px]'>
                    <div className='bg-[#d9f6ff] h-[50%] mb-[5px] relative flex items-center justify-center flex-col' 
                     onClick={()=>{
                        navigate(`/viewcategory/${categories?categories[2]._id:""}`);
                    }}
                    >
                        <img src={WomensClothingImg} alt="" style={{ transform: "scale(0.9)" }} />
                        <p className='font-semibold'>{categories?categories[2].name:""}</p>
                    </div>
                    <div className='bg-[#fff0c6] h-[50%] relative flex items-center justify-center flex-col' 
                    
                    onClick={()=>{
                        navigate(`/viewcategory/${categories?categories[2]._id:""}`);
                    }}>
                        <img src={WomensClothingImg} alt=""
                            style={{ transform: "scale(0.8)" }}
                        />
                        <p className='font-semibold'>{categories?categories[2].name:""}</p>

                    </div>
                </div>
                <div className='flex flex-col h-full w-[330px] mr-[5px]'>
                    <div className='bg-[#fff0c6] h-[50%] mb-[5px] relative flex items-center'
                     onClick={()=>{
                        navigate(`/viewcategory/${categories?categories[2]._id:""}`);
                    }}
                    >
                        <img src={TshirtImg} alt=""
                            style={{ transform: "scale(0.8)" }}
                        />
                        <p className='font-semibold'>{categories?categories[2].name:""}</p>
                    </div>
                    <div className='bg-[#d9f6ff] h-[50%] relative flex items-center'
                     onClick={()=>{
                        navigate(`/viewcategory/${categories?categories[2]._id:""}`);
                    }}
                    >
                        <img src={TshirtImg} alt=""
                            style={{ transform: "scale(0.8)" }} />
                        <p className='font-semibold'>{categories?categories[2].name:''}</p>

                    </div>
                </div>
                <div className='bg-[#edffdf] h-full w-[330px] relative flex flex-col justify-center'
                 onClick={()=>{
                        navigate(`/viewcategory/${categories?categories[1]._id:""}`);
                    }}
                >
                    <img className='absolute right-1' src={Electronics1Img} alt=""
                        style={{ transform: "scale(0.9)" }} />
                    <img className='absolute '
                        style={{ transform: "scale(0.9)" }} src={Electronics2Img} alt="" />
                    <p className='relative top-[164px] font-semibold'>{categories?categories[1].name:""}</p>
                </div>
            </div>
        </div>
    )
}

export default PopularCategories