import ReactPlayer from "react-player";
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
  return (
    /* <ReactPlayer
      src="/video/herobanner_video.mp4"
      playing={true}
      loop={true}
      muted={true}
      width="100vw"
      height="100vh"
    /> */

    <Swiper
      // install Swiper modules
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
      <SwiperSlide>
        <div className="relative w-full h-[100vh] flex items-center justify-center">
          <img
            src="/test-img.jpeg"
            className="object-cover w-full h-full absolute top-0 left-0 z-0"
            alt="Hero Slide 1"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-[100vh] flex items-center justify-center">
          <img
            src="/test-img-2.jpeg"
            className="object-cover w-full h-full absolute top-0 left-0 z-0"
            alt="Hero Slide 2"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
