import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {

    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(()=>{
      if(user){
        if(user.user.role !== "admin"){
          navigate('/');
        }
      }
    },[])

  return (
    <div>AdminDashboard</div>
  )
}

export default AdminDashboard