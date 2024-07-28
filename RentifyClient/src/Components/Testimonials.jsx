import React from 'react';
import testimonialsData from '../Services/TestimonialsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-slate-300 text-center p-6 mt-6 rounded-lg md:p-8">
      <h2 className="text-2xl text-slate-800 font-nunito font-bold mb-2 md:text-4xl">What Our Users Say</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mt-6"
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center p-3 bg-white md:h-64 rounded-lg shadow-md">
              <p className="italic mb-2">"{testimonial.text}"</p>
              <img src={testimonial.image} alt={testimonial.name}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover my-2"
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
