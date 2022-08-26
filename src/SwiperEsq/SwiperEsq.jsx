import React from "react";
import "./SwiperEsq.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function SwiperEsq() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={2}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="/galeria" className="card">
            1
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/galeria" className="card">
            2
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/galeria" className="card">
            3
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/galeria" className="card">
            4
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/galeria" className="card">
            5
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/galeria" className="card">
            6
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/galeria" className="card">
            7
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/galeria" className="card">
            8
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/galeria" className="card">
            9
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperEsq;
