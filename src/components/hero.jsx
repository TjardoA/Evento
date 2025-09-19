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
  const sliderImg = [
    "herobanner_1.jpeg",
    "herobanner_2.jpeg",
    "herobanner_3.jpeg",
  ];
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectFade,
        ]}
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
          <SwiperSlide>
            <div className="relative w-full h-[100vh] flex items-center justify-center">
              <img
                src={img}
                className="object-cover w-full h-full absolute top-0 left-0 z-0 "
                alt={{ index }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex w-full items-center justify-center">
        <h2>Test</h2>
      </div>
    </div>
  );
}
