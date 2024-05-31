import React from 'react';
import CategoriesCard from './CategoriesCard';
import MedicineImg from '../../assets/categories_img/medicine.jpg';

const Categories = () => {
    return (
        <>
            <div className='h-32 flex items-center justify-center'><p className='text-[32px] font-semibold text-[#0F2137]' >More than 100+ Categories</p></div>
            <div className='flex flex-col'>


                <div className='flex justify-center'>
                    <CategoriesCard title={'Medicines'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} img={MedicineImg} />
                    <span className='w-4'></span>

                    <CategoriesCard title={'Fashion'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} img={MedicineImg} />
                    <span className='w-4'></span>

                    <CategoriesCard title={'Medicines'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} img={MedicineImg} />
                    <span className='w-4'></span>

                    <CategoriesCard title={'Medicines'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} img={MedicineImg} />
                </div>

                <br />

                <div className='flex justify-center'>
                    <CategoriesCard title={'Medicines'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} img={MedicineImg} />
                    <span className='w-4'></span>
                    <CategoriesCard title={'Medicines'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} img={MedicineImg} />
                    <span className='w-4'></span>

                    <CategoriesCard title={'Medicines'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} img={MedicineImg} />

                </div>

                <br />


                <div className='flex  justify-center'>
                    <CategoriesCard title={'Medicines'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} img={MedicineImg} />
                    <span className='w-4'></span>

                    <CategoriesCard title={'Medicines'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} img={MedicineImg} />
                    <span className='w-4'></span>

                    <CategoriesCard title={'Medicines'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} img={MedicineImg} />
                    <span className='w-4'></span>

                    <CategoriesCard title={'Medicines'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} img={MedicineImg} />
                    <span className='w-4'></span>

                </div>


                <div className='h-32 flex items-center justify-center'>
                    <button className='bg-black rounded-full text-white  w-[200px] h-12'>View All Categories</button>
                </div>

            </div>
        </>
    )
}

export default Categories