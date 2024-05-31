import React from 'react';

const MsgBox = ({color,text}) => {
  return (
    <>
    {color==='green'&&
        <div className="bg-white border border-green text-green px-4 py-3 rounded relative w-full" role="alert">
    <strong className=" text-sm">{text}</strong>
    </div>    
    }
    {color==='red'&&
        <div className="bg-white border border-red text-red px-4 py-3 rounded relative w-full" role="alert">
    <strong className=" text-sm">{text}</strong>
    </div>
    }
    </>
  )
}

export default MsgBox