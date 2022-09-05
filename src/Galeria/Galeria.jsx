import "./Galeria.css";
import {ImCancelCircle} from "react-icons/im"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { useState } from "react";

function Galeria() {
  const [showGalery, setShowGalery] = useState(false)
  return (
    <div className="galeria-container">
      <div className="img-galeria">
        <h2>GALERIA</h2>
      </div>
      <div className="galerias-container">
      <div>
        <h4>Posada</h4>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
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
        {Array.from({length: 10 }).map((el, index)=>{
          return <SwiperSlide>
            <div onClick={()=> setShowGalery(!showGalery)} className="slide-galery">
              
              <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/HT2IF345M46ZZ6GC7ZJCHWAH34.jpg" />
            </div>
          </SwiperSlide>
        })}
      </Swiper>
      </div>
      
      </div>
      <div className={showGalery ? "galery-show active":"galery-show"}>
        <ImCancelCircle className="icon-x" onClick={()=> setShowGalery(!showGalery)} />
        
      </div>
    </div>
  );
}

export default Galeria;
