import React from 'react';
import ProfilesMap from '../../assets/map.jpg';

const Customers = () => {
    return (
        <>
            <div className='flex justify-center items-center h-[500px] w-full'>
                <div className='flex h-[300px] mr-7'>
                    <img src={ProfilesMap} />
                </div>

                <div className='flex flex-col justify-center items-center w-[400px] p-7'>
                    <p className='flex w-full justify-start text-left text-[28px] font-semibold text-[#0F2137] leading-9 mb-5'>We have more than thousand of wroldwide happy customer.</p>

                    <div className='mt-1'>
                        <p className='text-sm flex text-left text-[#343d48] mb-1 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti suscipit ut recusandae beatae eos tenetur! Quibusdam placeat tempore ea explicabo!</p>
                        <p className='text-[#2174A6] flex tex-left text-sm'>Learn more ></p>
                    </div>




                </div>
            </div>
        </>
    )
}

export default Customers