import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

// Import images
import Banner1 from '../Assets/Banners/B1.png';
import Banner2 from '../Assets/Banners/B2.png';
import Banner3 from '../Assets/Banners/B3.png';
import Banner4 from '../Assets/Banners/B4.png';
import Poster from '../Assets/Banners/Poster.png';

const banners = [Banner1, Banner2, Banner3, Banner4];

const CarouselBanner = () => {
  return (
    <div className="flex justify-center items-center md:mt-4">
      <div className="md:flex flex-col md:flex-row max-w-screen-2xl mx-auto items-center space-y-6 md:space-y-0 md:space-x-6">
        
        {/* Static poster */}
        <div className="hidden md:flex md:justify-center">
          <img src={Poster} alt="Static Poster" className="h-96 md:h-[30rem] rounded-lg border-4 border-white"/>
        </div>
        
        {/* Swiper carousel */}
        <div className="w-[360px] md:w-[60rem]">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {banners.map((banner, index) => (
              <SwiperSlide key={index}>
                <img
                  src={banner}
                  alt="posters"
                  className="w-full md:w-fit h-[184px] md:h-[30rem] object-contain rounded-lg border-4 border-white"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CarouselBanner;
