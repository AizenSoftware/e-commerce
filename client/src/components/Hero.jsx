import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <div>
      <Swiper
        className="container mx-auto w-full h-72"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={500}
        centeredSlides={true}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
      >
        <SwiperSlide className="flex justify-center items-center text-center w-full h-auto">
          <img
            src=""
            alt=""
            className="flex justify-center items-center text-center w-1/2 object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            src=""
            alt=""
            className="flex justify-center items-center text-center w-1/2 object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            src=""
            alt=""
            className="flex justify-center items-center text-center w-1/2 object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
