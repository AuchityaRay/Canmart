import React , {useState} from 'react';
import M1 from "../../assets/m1.png";
import M2 from "../../assets/m2.png";
import M3 from "../../assets/m3.png";
import M4 from "../../assets/m4.png";
import Navbar from "../../components/Navbar/Navbar";
import {AiFillDelete} from "react-icons/ai"





const ManageInquiry = () => {
  const inquiriesData = [
    {
      id: 1,
      date: '12/10/2023',
      senderName: 'Shivansh Manhotra',
      requirement: '50, Men’s T-shirt',
      location: 'California, USA',
    },
    {
      id: 2,
      date: '12/10/2023',
      senderName: 'Shivansh Manhotra',
      requirement: '50, Men’s T-shirt',
      location: 'California, USA',
    },
    {
      id: 3,
      date: '12/10/2023',
      senderName: 'Shivansh Manhotra',
      requirement: '50, Men’s T-shirt',
      location: 'California, USA',
    },
    {
      id: 4,
      date: '12/10/2023',
      senderName: 'Shivansh Manhotra',
      requirement: '50, Men’s T-shirt',
      location: 'California, USA',
    },
    {
      id: 5,
      date: '12/10/2023',
      senderName: 'Shivansh Manhotra',
      requirement: '50, Men’s T-shirt',
      location: 'California, USA',
    },
    // Add more data objects as needed
  ];
    
    const [isPopup, setPopup] = useState(false);
  const [inquiries, setInquiries] = useState(inquiriesData);

  const handlePopupToggle = () => {
    setPopup(!isPopup);
  };

  const handleDeleteInquiry = (id) => {

    console.log(id)
    const updatedInquiries = inquiries.filter((inquiry) => inquiry.id !== id);
    console.log(updatedInquiries);
    setInquiries(updatedInquiries);
  };



  return (
    <>
    
    {isPopup &&
  <div className='fixed top-0 left-0 bg-[#000000c3] w-full h-screen z-50 flex items-center justify-center'>
  <div className='popup absolute w-[35%] h-[86%] bg-white top-20 rounded-lg'>
    <div className='text-shadeofgray font-bold w-full flex p-2 pr-4 justify-end cursor-pointer text-lg' onClick={handlePopupToggle}>X</div>
    <div className='w-11/12 m-auto'>
    <div className='text-2xl text-left font-semibold flex justify-start items-center '>Product Requirement Details</div>
    <div className='flex justify-end'>
    <button className="bg-black text-white font-normal text-sm border border-[#FFFFFF] rounded-full py-1.5 px-6 mr-4" >
                    Reply
                  </button>
    </div>
    <div className='flex pb-4 border border-x-0 border-t-0 border-b-[#E4E4E4] mb-4'>
        <div className='rounded mr-4 bg-[#D9D9D9] w-20 h-20 '>
        <img src="" alt="" />
        </div>
        <div className='w-[79%] '>
        <p className='font-medium  text-base text-left'>Product Name</p>
        <p className='text-[#9F9F9F] text-sm text-left'>Once You deleted the product then all the information of this product will also be deleted.</p>
        </div>
    </div>
    <div>
  <table className="w-[94%] m-auto">
    <tbody className='font-medium text-left'>
      <tr className='text-base mb-4'>
        <td className="">Sender Name :</td>
        <td className="">Auchitya Verma</td>
      </tr>
      <tr className='text-base '>
        <td className="">Email ID :</td>
        <td className="">Auchitya11@gmail.com</td>
      </tr>
      <tr className='text-base '>
        <td className="">Country :</td>
        <td className="">India</td>
      </tr>
      <tr className='text-base' >
        <td className="">City :</td>
        <td className="">Bhopal</td>
      </tr>
      <tr className='text-base '>
        <td className="">Mobile Number :</td>
        <td className="">+91 6263668723</td>
      </tr>
      <tr className='text-base '>
        <td className="">Quantity :</td>
        <td className="">200</td>
      </tr>
    </tbody>
  </table>
</div>

        <div className='container border border-[#E1E1E1] h-28 w-[88%] m-auto mt-4 '>
        <p className='font-medium mt-2'>Hi, I am interested in Green Magic Print Regular Straight Kurti With Dupatta V Neck Pattern P8.</p>
        </div>
    </div>
  </div>
</div>

}

    <Navbar showSearchBar={true} />
            <div className='bg-[#f3f3f3] flex'>
                <div className='bg-black h-[1300px] w-[50px] mt-5 pt-16 flex flex-col items-center'>
                    <span className='mb-7 h-4 w-4'><img className='w-full h-full ' src={M1} alt="" /></span>
                    <span className='mb-7 h-4 w-4'><img className='w-full h-full ' src={M2} alt="" /></span>
                    <span className='mb-7 h-4 w-4'><img className='w-full h-full ' src={M3} alt="" /></span>
                    <span className='mb-7 h-5 w-6'><img className='w-full h-full ' src={M4} alt="" /></span>
                </div>


    <div className="container mx-auto p-4">
      <h1 className="text-xl text-left font-bold mb-4">Manage Inquiries</h1>
      <div className='bg-white'>
        <h2 className="text-lg font-normal text-left relative top-4 left-3 mb-8">Response Received</h2>
        <table className="w-[94%] m-auto ">
          <thead>
            <tr className='bg-[#F6F6F6] h-12 text-base font-medium'>
              <th className="">S.No.</th>
              <th className="">Date</th>
              <th className="">Sender Name</th>
              <th className="">Requirement</th>
              <th className="">Location</th>
              <th className="">Action</th>
            </tr>
          </thead>
          <tbody className='font-medium '>
  {inquiries.map((inquiry, index) => (
    <tr key={inquiry.id} className='font-normal text-sm h-14'>
      <td className="">{index + 1}</td>
      <td className="">{inquiry.date}</td>
      <td className="">{inquiry.senderName}</td>
      <td className="">{inquiry.requirement}</td>
      <td className="">{inquiry.location}</td>
      <td className="">
        <button className="bg-black text-white font-normal text-base rounded py-1.5 px-4 mr-4" onClick={handlePopupToggle}>
          View Query
        </button>
        <button
          className="bg-[#FCFCFC] border border-[#E7E7E7] rounded-md hover:bg-red-700 text-white font-bold py-2 px-4"
          onClick={() => handleDeleteInquiry(inquiry.id)}
        >
          <AiFillDelete color="red" />
        </button>
      </td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </div>
                </div>
    </>
  );
};

export default ManageInquiry;
