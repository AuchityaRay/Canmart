import React from 'react';
import {AiFillEdit} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


const ManageProdCard = ({product}) => {

  const navigate = useNavigate();

  const handleEdit=()=>{
    navigate(`/editproduct`,{
      state:{
        p_Id:product._id
      }
    })
  }

  return (
    <div className='border max-h-[230px] min-h-[230px] min-w-[230px] mr-10 rounded relative border-[#1a1d1d6e] mb-10'>
        <div className='right-4 top-2 absolute ' onClick={handleEdit}><AiFillEdit  color='black'/></div>
        <div className='h-full w-full flex items-center justify-center'>
            <img className='h-full w-full'  src={product.productImages==""?"":product.productImages[0].img} alt="" />
        </div>
    </div>
  )
}

export default ManageProdCard