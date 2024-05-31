import React from 'react';
import AnalyticsImg from '../../assets/analytics/analytics.png';
import Crown from '../../assets/crown.png';
import JobIcon from '../../assets/icons/job.png';

const Analytics = () => {
    return (
        <>
            <div className='flex justify-center items-center h-[600px] w-full'>
                <div className='flex h-[500px] mr-10'>
                    <img src={AnalyticsImg} />
                </div>
                <div className='flex flex-col justify-center items-center w-[455px] p-7'>
                    <p className='flex w-full font-semibold text-xs tracking-wider mb-5'>CORE FEATURES</p>
                    <p className='flex w-full justify-start text-left text-[28px] font-semibold text-[#0F2137] leading-9 mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>

                    <div className='flex mt-5'>
                        <div className='w-28'>
                            <div className='bg-pink rounded-full flex items-center justify-center h-9 w-9 p-2'>
                                <img src={JobIcon} alt="" />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-semibold text-[#0F2137] flex text-lg mb-2 text-sm'>Smart Features</p>
                            <p className='text-xs flex text-left text-[#343d48] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti suscipit ut recusandae beatae eos tenetur! Quibusdam placeat tempore ea explicabo!</p>
                        </div>
                    </div>

                    <div className='flex mt-5'>
                        <div className='w-28'>
                        <div className='bg-pink rounded-full flex items-center justify-center h-9 w-9 p-2'>
                                <img src={Crown} alt="" />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-semibold text-[#0F2137] flex text-sm mb-2 '>Secure Contents</p>
                            <p className='text-xs flex text-left text-[#343d48]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti suscipit ut recusandae beatae eos tenetur! Quibusdam placeat tempore ea explicabo!</p>
                        </div>
                    </div>




                </div>
            </div>
        </>
    )
}

export default Analytics