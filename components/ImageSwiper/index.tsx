import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";

const ImageSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop
      autoplay
      navigation
      pagination={{ clickable: true }}
      className="h-96"
    >
      <SwiperSlide>
        <img
          alt={"1"}
          src="https://19277176.s61i.faiusr.com/2/AD0I_MqYCRACGAAglcj65QUoifKVlgcwgA842AQ.jpg"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSwiper;
