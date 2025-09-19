import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

export default function Hero() {
  const sliderImg: string[] = [
    "herobanner_1.jpeg",
    "herobanner_2.jpeg",
    "herobanner_3.jpeg",
  ];
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      effect="fade"
      className="hero-swiper"
    >
      {sliderImg.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[100vh] flex items-center justify-center">
            <img
              src={img}
              className="object-cover w-full h-full absolute top-0 left-0 z-0"
              alt={`Hero Slide ${index + 1}`}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
