
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.css';

import { Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
    <div className="slider-box">
      <div className="slider-box-in">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        autoplay={{
          delay: 2000
        }}
      >
        <SwiperSlide>
            <h2>THE CHLOE COLLECTION</h2>
            <h1>The Project Jecket</h1>
            <button>SHOP NOW</button>
        </SwiperSlide>
        <SwiperSlide>
            <h2>THE CHLOE COLLECTION</h2>
            <h1>The Project Jecket</h1>
            <button>SHOP NOW</button>
        </SwiperSlide>
        <SwiperSlide>
            <h2>THE CHLOE COLLECTION</h2>
            <h1>The Project Jecket</h1>
            <button>SHOP NOW</button>
        </SwiperSlide>
      </Swiper>
        </div>
        </div>
    </>
  );
}