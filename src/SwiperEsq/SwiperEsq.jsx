import React from "react";
import "./SwiperEsq.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

function SwiperEsq() {
  return (
    <>
      <Swiper
        spaceBetween={20}
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
        {Array.from({ length: 10 }).map((el, index) => {
          return (
            <SwiperSlide key={index}>
              <Link to="/galeria" className="card">
                <img src={`esquina${index + 1}.jpg`} />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default SwiperEsq;
