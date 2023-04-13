import Footer from 'components/Footer'
import Header from 'components/Header'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper';
import style from './Projetos.module.scss'
import Pagination from 'components/Pagination';
import profile from 'mocks/profile';
import TableComponent from 'components/TableComponent';
import CardImage from 'components/Card/CardImage';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import { useSpring, animated } from 'react-spring';

export default function Projetos() {
    const [slide, setSlide] = useState([1, false]);
    const handleSlideChange = (swiper) => {
        setSlide([swiper.activeIndex + 1, swiper.isEnd]);
    };

    const springs = useSpring({
        from: {x: -200, opacity: 0},
        to: {x: 10, opacity: 1}
    })

  return (
    <>
        <Pagination slide={slide} slideLength={Object.keys(profile.Projects).length}/>
        <Header />
            <Swiper
            direction={'vertical'}
            slidesPerView={1}
            mousewheel={true}
            onSlideChange={handleSlideChange}
            modules={[Mousewheel]}
            className={style.swiper}
            speed={700}>
                <SwiperSlide className={style.swiperSlide}>
                    <animated.div style={{...springs}}>
                        <Container>
                            <TableComponent title={profile.Projects.Title} column={[2,3,4]}>
                                {
                                    profile.Projects.Repositories.map((repository, index) => (
                                        <Link key={index} to={repository.Link}>
                                            <CardImage  image={repository.Image} />
                                        </Link>
                                    ))
                                }
                            </TableComponent>
                        </Container>
                    </animated.div>
                </SwiperSlide>
                <SwiperSlide><Footer /></SwiperSlide>
            </Swiper>
    </>
  )
}
