import { Swiper, SwiperSlide } from 'swiper/react'

import classes from './SwiperSample.module.css'

const SwiperSample = () => {
    return (
        <Swiper
            slidesPerView="auto"
            initialSlide={0}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className={classes.content}>
                this row contains name and price
            </SwiperSlide>
            <SwiperSlide className={classes.menu}>
                <button>Edit</button>
                <button>Delete</button>
            </SwiperSlide>
        </Swiper>
    )
}

export default SwiperSample
