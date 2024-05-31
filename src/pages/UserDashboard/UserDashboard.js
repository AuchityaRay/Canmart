import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {

    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    useEffect(()=>{
        if(user.user.role === "seller"){
            navigate('/sellerdash');
        }
    })


  return (
    <div>userDashboard</div>
  )
}

export default UserDashboard