import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './style.css';
import RefrigeratorImg from '../../assets/popular_categories/electronics2.png';
import StarsImg from '../../assets/popular_categories/stars.png';
import './style.css';
import { useSelector } from "react-redux";

// Data

const PopularProducts = ({ title }) => {

  const navigate = useNavigate();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const initialData = useSelector(state => state.initialData);
  const products = initialData.products;


  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };



  return (
    <div className='pl-20 mt-5'>
      <h2 className=" mb-10 flex text-[32px] font-semibold text-[#0F2137]">
        {title}
      </h2>
      <div className="parent">


        <Carousel
          responsive={responsive}
          autoPlay={false}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={false}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
          className='slider'
        >
          {
            products.map((product, key) => {
              return (
                <div key={key} className='slider-card h-[290px] w-[240px] rounded border border-[#1a1a1d28] flex flex-col justify-center items-center '

                >
                  <div className='h-24 w-24 mb-5'>
          
                    <img className='h-full w-full' src={product.productImages == ""?"":product.productImages[0].img} alt="" />
                  </div>
                  <p className='font-semibold'>{product.name}</p>
                  <div className='mb-6'>
                    <img style={{ transform: "scale(0.9)" }} src={StarsImg} alt="" />
                  </div>
                  <button className='bg-black h-10 w-[160px] text-white rounded-full'
                    onClick={() => {
                      navigate(`/viewproduct/${product._id}`)
                    }}
                  >
                    View Details
                  </button>
                </div>
              );
            })
          }
        </Carousel>


      </div>
    </div>
  );
};

export default PopularProducts;
