import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SwiperRes.css";

// import required modules
import { Pagination, Navigation } from "swiper";

function SwiperRes() {
  return (
    <>
      <div className="div-reseñas">
        <h2 className="h2-reseñas">Reseñas de </h2>
        <img className="img-reseñas" src="google.png" alt="google" />
      </div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={1000}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper4"
      >
        <SwiperSlide>
          <div className="div-swiper">
            <div className="name-avatar">
              <div className="avatar">
                <img src="avatar0.png" />
              </div>
              <h3 className="name">Jose Bonaria</h3>
            </div>
            <div className="review">
              <p className="p-review">
                Por la excelente hospitalidad , sus confortables habitaciones ,
                sus servicios de pesca muy completos , muy buenos los guías , y
                la comida de primera..un agradecimiento aparte para Gonzalo
                Traverso , su propietario y todo el personal..un lugar muy
                recomendable en esquina Chamigos!!!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="div-swiper">
            <div className="name-avatar">
              <div className="avatar">
                <img src="avatar1.png" />
              </div>
              <h3 className="name">Luis Fernando Garcia</h3>
            </div>
            <div className="review">
              <p className="p-review">
                Un lugar hermoso.lo mas espectacular el servicio y atencion de
                todos lo k trabajan en la posada.sergio el propietario un capo
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="div-swiper">
            <div className="name-avatar">
              <div className="avatar">
                <img src="avatar2.png" />
              </div>
              <h3 className="name">German Echarte</h3>
            </div>
            <div className="review">
              <p className="p-review">
                Excelente lugar! Muy buena atención! Al lado del río. Ideal para
                la pesca!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="div-swiper">
            <div className="name-avatar">
              <div className="avatar">
                <img src="avatar3.png" />
              </div>
              <h3 className="name">Jose Vizgarra</h3>
            </div>
            <div className="review">
              <p className="p-review">
                Un lugar excelente, y gente mucho mejor todavía... Muy
                recomendable
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="div-swiper">
            <div className="name-avatar">
              <div className="avatar">
                <img src="avatar4.png" />
              </div>
              <h3 className="name">Alejo Alvarez</h3>
            </div>
            <div className="review">
              <p className="p-review">
                Buena atención, buena pesca, hermosa vista al rio, la comida
                riquísima, todo excelente
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperRes;
