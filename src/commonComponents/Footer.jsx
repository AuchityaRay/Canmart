import React from "react";
import SubscribeLogo from '../assets/footer/subscribe.png';
import SocialIcons from '../assets/social.png';

const Footer = () => {
  return (
    // SECTION STARTED HERE
    <div className="footer h-[400px]">
      <div className="p-10 bg-black px-34 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto lg:px-10 xl:px-5 md:px-20 sm:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
            <div className="mb-5">
              <h3 className="tracking-tighter text-base font-semibold text-left pb-4 text-white">
                Category
              </h3>
              <ul className="text-left font-normal text-white text-sm leading-7">
                <li>First Link</li>
                <li>Second Long Link</li>
                <li>Third Link</li>
                <li>Fourth Long Link</li>
                <li>Fifth Link</li>
                <li>Sixth Long Link</li>
              </ul>
            </div>
            <div className="mb-5">
              <h6 className="tracking-tighter text-base font-semibold text-left pb-4 text-white">
                Category
              </h6>
              <ul className="text-left font-normal text-white text-sm leading-7">
              <li>First Link</li>
                <li>Second Long Link</li>
                <li>Third Link</li>
              </ul>
            </div>
            <div className="mb-5">
              <h6 className="tracking-tighter text-base font-semibold text-left pb-4 text-white">
                Category
              </h6>
              <ul className="text-left font-normal text-white text-sm leading-7">
              <li>First Link</li>
                <li>Second Long Link</li>
                <li>Third Link</li>
                <li>Fourth Long Link</li>
                <li>Fifth Link</li>
                <li>Sixth Long Link</li>
              </ul>
            </div>
            <div className="mb-5">
              <h6 className="tracking-tighter text-base font-semibold text-left pb-4 text-white">
                Category
              </h6>
              <ul className="text-left font-normal text-white leading-7 text-sm">
              <li>First Link</li>
                <li>Second Long Link</li>
                <li>Third Link</li>
              </ul>
            </div>


            <div className="mb-5 w-72">
              <div className="flex items-center">
                <img className="h-14 mr-4" src={SubscribeLogo} />
                <p className="text-white text-2xl font-semibold">Sections</p>
              </div>
              <p className="text-white flex text-sm mt-5">@Copyright 2022 Pixsellz - </p>
              <p className="text-white flex text-sm">Premium UI Goods for Designers</p>
              <div className="mt-4">
                <img src={SocialIcons} alt="" />
              </div>
              <div className="flex">

              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
