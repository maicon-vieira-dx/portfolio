import { useState} from 'react';
import Header from 'components/Header';
import Pagination from 'components/Pagination';
import { Box, Container} from '@mui/material';
import Footer from 'components/Footer';
import profile from 'mocks/profile';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper';

import "swiper/scss"
import "swiper/scss/pagination"
import style from "./Sobre.module.scss"
import TableComponent from 'components/TableComponent';
import CardImage from 'components/Card/CardImage';
import CardTextRight from 'components/Card/CardTextRight';
import { useSpring, animated } from 'react-spring';


export default function Home() {
  const [slide, setSlide] = useState([1, false]);
  const handleSlideChange = (swiper) => {
    setSlide([swiper.activeIndex + 1, swiper.isEnd]);
  };
  const springs = useSpring({
    from: {x: -200, opacity: 0},
    to: {x: 0, opacity: 1}
  })
  return (
    <>
        <Header />
      <Pagination slide={slide} slideLength={Object.keys(profile.About).length + 1}/>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        mousewheel={true}
        onSlideChange={handleSlideChange}
        modules={[Mousewheel]}
        className={style.swiper}
        speed={700}
      >
        <SwiperSlide className={style.swiperSlide}>
          <Container>
            <Box sx={{display: 'block', justifyContent: 'center', alignItems: 'center'}}>
              <animated.h3 className=' text-black text-2xl lg:text-3xl font-bold mb-5 text-center md:text-start'style={{...springs}} >SOBRE MIM:</animated.h3>
              <animated.p className='md:text-xl text-black text-center md:text-start' style={{...springs}}dangerouslySetInnerHTML={{__html: profile.About.Paragraph}} />
            </Box>
          </Container>
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
          <Container>
            <TableComponent title="PROJETOS CRIADOS PARA AS EMPRESAS:" column={[2,3,4]}>
              {
                profile.About.Companies.map((company, index) => (
                  <CardImage key={index} image={company} />
                ))
              }
            </TableComponent>
          </Container>
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
          <Container>
            <div className='w-full mt-20'>
            <div className='flex flex-col lg:flex-row justify-between items-center'>
              <TableComponent title="SOFTWARES UTILIZADOS:" column={[1,1]}>
                {
                  profile.About.Softwares.map((software, index) => (
                    <CardTextRight key={index} {...software} />
                  ))
                }
              </TableComponent>
            </div>
                  </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide><Footer /></SwiperSlide>
      </Swiper>
    </>
      
  );
}
