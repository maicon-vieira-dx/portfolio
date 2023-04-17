import { useEffect, useState, useRef} from 'react';
import Header from 'components/Header';
import Title from 'components/Title';
import TextFloating from 'components/TextFloating';
import Pagination from 'components/Pagination';
import { Box} from '@mui/material';
import Footer from 'components/Footer';
import profile from 'mocks/profile';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper';

import "swiper/scss"
import "swiper/scss/pagination"
import style from "./Home.module.css"


export default function Home() {
  const [slide, setSlide] = useState([1, true]);
  const handleSlideChange = (swiper) => {
    setSlide([swiper.activeIndex + 1, swiper.isBeginning || swiper.isEnd]);
  };

  return (
    <>
        <Header />
      <Pagination slide={slide} slideLength={profile.TextFloating.length + 2}/>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        mousewheel={true}
        onSlideChange={handleSlideChange}
        modules={[Mousewheel]}
        className={style.swiper}
        speed={700}
      >
        <SwiperSlide><Title /></SwiperSlide>
        {
          profile.TextFloating.map((floating, index) => (
            <SwiperSlide key={index}>
              <Box>
                  <TextFloating {...floating} Values={floating} />
              </Box>
            </SwiperSlide>
          ))
        }
        <SwiperSlide><Footer /></SwiperSlide>
      </Swiper>
    </>
      
  );
}
