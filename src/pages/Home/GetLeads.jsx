import React from 'react';
import ProfileImg from '../../assets/getleads/profile.png';
import KYCImg from '../../assets/getleads/kyc.png';
import LeadsImg from '../../assets/getleads/leads.png';

const GetLeads = () => {
    return (
        <>
            <div className='h-32 flex items-center justify-center'>
                <p className='text-[28px] font-semibold text-[#0F2137]' >Start generating leads in 3 simple steps</p>
            </div>


            <div className='flex h-[500px] justify-center items-center relative'>

                <div className='flex flex-col h-full w-[350px] items-center relative'>
                    <img src={ProfileImg} className='h-[300px]' />
                    <span className='mt-2 text-white bg-black rounded-full h-14 w-14 text-xl font-semibold flex items-center justify-center'>1</span>
                    <p className='mt-5 font-semibold text-[#0F2137] text-lg'>Create Profile</p>
                <span className='bg-black w-64 h-[2px] absolute left-[14rem] bottom-40'></span>
                </div>

                
                <div className='flex flex-col relative h-full w-[350px] items-center'>
                    <img src={KYCImg} className='h-[300px]' />
                    <span className='mt-2 text-white bg-black rounded-full h-14 w-14 text-xl font-semibold flex items-center justify-center'>2</span>
                    <p className='mt-5 font-semibold text-[#0F2137] text-lg'>Complete KYC</p>
                <span className='bg-black w-64 h-[2px] absolute left-[14rem] bottom-40'></span>
                </div>                
                
                <div className='flex flex-col h-full w-[350px] items-center'>
                    <img src={LeadsImg} className='h-[300px]' />
                    <span className='mt-2 text-white bg-black rounded-full h-14 w-14 text-xl font-semibold flex items-center justify-center'>3</span>
                    <p className='mt-5 font-semibold text-[#0F2137] text-lg'>Get Leads</p>
                </div>

            </div>

        </>
    )
}

export default GetLeads