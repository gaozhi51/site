import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import ConnectTeacher from "../ConnectTeacher";
import { useState } from "react";

const ImageSwiper = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div>
      <ConnectTeacher
        visible={visible}
        close={() => {
          setVisible(false);
        }}
      />
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        autoplay
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img
            alt={"高职升学路线图"}
            src="./img/slide1.jpg"
            onClick={() => {
              setVisible(true);
            }}
            className="cursor-pointer w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSwiper;
