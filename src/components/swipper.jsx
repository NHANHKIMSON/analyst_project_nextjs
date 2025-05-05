'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function Carousel(data){
  const slides = data.data;
  return (
    <div className='px-6 py-4'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        className="rounded-2xl shadow-xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide?.id}>
            <div className="relative h-64 md:h-96 overflow-hidden">
              <img
              src={slide.image_url}
                alt={slide?.title}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* {slices.map((item) => (
        <p key={item.id}>
          <img src={item.image_url} alt="" />
          
          </p>
      ))} */}

    </div>
  );
}