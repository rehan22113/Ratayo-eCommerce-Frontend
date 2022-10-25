import React, { useRef, useState } from "react";
// Import Swiper React components
import image1 from '../assets/userspic/trader_6.webp'
import image2 from '../assets/userspic/trader_2.png'
import image3 from '../assets/userspic/trader_3.png'
import image4 from '../assets/userspic/trader_4.webp'
import image5 from '../assets/userspic/trader_5.webp'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../assets/swiper.css";


// import required modules
import {Autoplay, FreeMode, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        loop={true}
        // loopFillGroupWithBlank={true}
        freeMode={true}
        pagination={{
          clickable: false,
          
        }}
        modules={[Autoplay,FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide className="  !bg-transparent" >
          <div>
            <img className="object-center object-cover lg:!w-20 rounded-full" src={image1} />
          </div>
        </SwiperSlide>
        <SwiperSlide className=" !bg-transparent">
          <div >
            <img className="object-center object-cover lg:!w-20 rounded-full" src={image4} />
          </div>
        </SwiperSlide>
        <SwiperSlide className=" !bg-transparent">
          <div>
            <img className="object-center object-cover lg:!w-20 rounded-full" src={image2} />
          </div>
        </SwiperSlide>
        <SwiperSlide className=" !bg-transparent">
          <div>
            <img className="object-center object-cover lg:!w-20 rounded-full" src={image1} />
          </div>
        </SwiperSlide>
        <SwiperSlide className=" !bg-transparent">
          <div>
            <img className="object-center object-cover lg:!w-20 rounded-full" src={image5} />
          </div>
        </SwiperSlide>
        <SwiperSlide className=" !bg-transparent">
          <div>
            <img className="object-center object-cover lg:!w-20 rounded-full" src={image2} />
          </div>
        </SwiperSlide>
        <SwiperSlide className=" !bg-transparent">
          <div >
            <img className="object-center object-cover lg:!w-20 rounded-full" src={image3} />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
