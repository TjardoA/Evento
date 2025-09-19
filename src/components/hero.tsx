import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function Hero() {
  const sliderImages = [
    "herobanner_1.jpeg",
    "herobanner_2.jpeg",
    "herobanner_3.jpeg",
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
      slidesPerView={1}
      loop
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      effect="fade"
      className="hero-swiper"
    >
      {sliderImages.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[100vh]">
            {/* Background image + overlay */}
            <img
              src={img}
              alt={`Hero background ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
