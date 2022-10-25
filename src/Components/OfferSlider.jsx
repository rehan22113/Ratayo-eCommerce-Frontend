import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from '../assets/topslider/slide1.webp'
import slide2 from '../assets/topslider/slide2.webp'
import slide3 from '../assets/topslider/slide3.webp'
import slide4 from '../assets/topslider/slide4.webp'
import slide5 from '../assets/topslider/slide5.webp'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../assets/swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} />
        </SwiperSlide>
        
        
      </Swiper>
    </>
  );
}
