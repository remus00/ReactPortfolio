import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/person1.jpg'
import AVT2 from '../../assets/person2.jpg'
import AVT3 from '../../assets/person3.jpg'
import AVT4 from '../../assets/person4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        id_review: 1,
        avatar: AVT1,
        name: 'Martha Washington',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quo blanditiis! Pariatur tempora earum repellendus natus obcaecat placeat minima saepe tempore, optio ad perferendis odit nostrum aliquam vero doloribus expedita!'
    },
    {
        id_review: 2,
        avatar: AVT2,
        name: 'Edward J. Hall',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quo blanditiis! Pariatur tempora earum repellendus natus obcaecat placeat minima saepe tempore, optio ad perferendis odit nostrum aliquam vero doloribus expedita!'
    },
    {
        id_review: 3,
        avatar: AVT3,
        name: 'Michelle W. Williams',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quo blanditiis! Pariatur tempora earum repellendus natus obcaecat placeat minima saepe tempore, optio ad perferendis odit nostrum aliquam vero doloribus expedita!'
    },
    {
        id_review: 4,
        avatar: AVT4,
        name: 'Ronnie Coleman',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quo blanditiis! Pariatur tempora earum repellendus natus obcaecat placeat minima saepe tempore, optio ad perferendis odit nostrum aliquam vero doloribus expedita!'
    },
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2> 

            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({id_review, avatar, name, review}) => {
                        return (
                            <SwiperSlide key={id_review} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt={name} />
                                </div>
                                <h5 className='clients__name'>{name}</h5>
                                <small className='clients__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials

/* 
<article className="testimonial">
                    <div className="client__avatar">
                        <img src={AVT1} alt="Person one" />
                    </div>
                    <h5 className='clients__name'>Martha Washington</h5>
                    <small className='clients__review'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Doloremque, quo blanditiis! Pariatur tempora earum repellendus natus obcaecati 
                        placeat minima saepe tempore, optio ad perferendis odit nostrum aliquam vero doloribus expedita!
                    </small>
                </article>
*/