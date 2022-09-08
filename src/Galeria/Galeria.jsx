import "./Galeria.css";
import { ImCancelCircle } from "react-icons/im";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";

function Galeria() {
  const [showGalery, setShowGalery] = useState(false);
  const [nameShowGalery, setNameShowGalery] = useState("esquina");
  const [num, setNum] = useState(0);

  return (
    <div className="galeria-container">
      <div className="img-galeria">
        <h2>GALERIA</h2>
      </div>
      <div className="galerias-container">
        <div className="galeria">
          <h4>La Posada</h4>
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 25,
              },
              "@0.50": {
                slidesPerView: 1.25,
                spaceBetween: 25,
              },
              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              "@1.25": {
                slidesPerView: 2.5,
                spaceBetween: 25,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              "@1.75": {
                slidesPerView: 4,
                spaceBetween: 25,
              },
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper3"
          >
            {Array.from({ length: 10 }).map((el, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    onClick={() => {
                      setShowGalery(!showGalery);
                      setNameShowGalery("posada");
                      setNum(1);
                    }}
                    className="slide-galery"
                  >
                    <img src={`posada${index + 1}.jpg`} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="galeria">
          <h4>Nuestras Comodidades</h4>
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 25,
              },
              "@0.50": {
                slidesPerView: 1.25,
                spaceBetween: 25,
              },
              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              "@1.25": {
                slidesPerView: 2.5,
                spaceBetween: 25,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              "@1.75": {
                slidesPerView: 4,
                spaceBetween: 25,
              },
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper3"
          >
            {Array.from({ length: 10 }).map((el, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    onClick={() => {
                      setShowGalery(!showGalery);
                      setNameShowGalery("comodidades");
                      setNum(1);
                    }}
                    className="slide-galery"
                  >
                    <img src={`comodidades${index + 1}.jpg`} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="galeria">
          <h4>Nuestros Serivicios</h4>
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 25,
              },
              "@0.50": {
                slidesPerView: 1.25,
                spaceBetween: 25,
              },
              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              "@1.25": {
                slidesPerView: 2.5,
                spaceBetween: 25,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              "@1.75": {
                slidesPerView: 4,
                spaceBetween: 25,
              },
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper3"
          >
            {Array.from({ length: 10 }).map((el, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    onClick={() => {
                      setShowGalery(!showGalery);
                      setNameShowGalery("servicio");
                      setNum(1);
                    }}
                    className="slide-galery"
                  >
                    <img src={`servicio${index + 1}.jpg`} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="galeria">
          <h4>Esquina, Corrientes</h4>
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 25,
              },
              "@0.50": {
                slidesPerView: 1.25,
                spaceBetween: 25,
              },
              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              "@1.25": {
                slidesPerView: 2.5,
                spaceBetween: 25,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              "@1.75": {
                slidesPerView: 4,
                spaceBetween: 25,
              },
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper3"
          >
            {Array.from({ length: 10 }).map((el, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    onClick={() => {
                      setShowGalery(!showGalery);
                      setNameShowGalery("esquina");
                      setNum(1);
                    }}
                    className="slide-galery"
                  >
                    <img src={`esquina${index + 1}.jpg`} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className={showGalery ? "galery-show active" : "galery-show"}>
        <ImCancelCircle
          className="icon-x"
          onClick={() => setShowGalery(!showGalery)}
        />
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper2"
        >
          {Array.from({ length: 10 }).map((el, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="img-div-galery">
                  <img
                    className="img-in"
                    src={`${nameShowGalery}${index + 1}.jpg`}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Galeria;
