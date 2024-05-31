import React from 'react';

const CategoriesCard = ({title,description,img}) => {
  return (
    <div className='flex w-[350px] h-[130px] p-2 rounded-md shadow-md border border-[#1a1a1d1e] items-center '>
        <div className='flex items-center w-36 justify-center mr-3'>
            <img src={img} alt="" />
        </div>
        <div className='flex flex-col leading-8 '>
            <p className='flex font-semibold'>{title}</p>
            <p className='flex text-left text-sm leading-6'>{description}</p>
        </div>
    </div>
  )
}

export default CategoriesCard