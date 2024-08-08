import React from 'react';
import { testimonialsData } from '../Services/Constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto text-center p-6 rounded-lg md:p-8">
      <h2 className="text-3xl md:text-5xl font-bold">Testimonials</h2>
      <p className="mt-3 text-lg md:text-xl">What our users say about us</p>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mt-6"
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center p-4 bg-white md:h-96 rounded-md shadow-md mt-4">
              { /* Stars Rating */}
              <span className='text-yellow-500 text-2xl'>★★★★★</span>
              <p className="italic mb-3 text-lg md:h-36">"{testimonial.text} "</p>
              <img src={testimonial.image} alt={testimonial.name}
                className="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover bottom-2"
              />
              <span className="mt-2 text-lg font-bold">{testimonial.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
