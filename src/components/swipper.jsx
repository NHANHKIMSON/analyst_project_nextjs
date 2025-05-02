'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Card } from './ui/card';

const slides = [
  {
    id: 1,
    title: 'Event Analytics',
    image: 'https://yi-files.yellowimages.com/products/959000/959722/1620666-full.jpg',
  },
  {
    id: 3,
    title: 'Top Events by Revenue',
    image: 'https://s3-alpha.figma.com/hub/file/4957635841/3138ea22-c543-4070-b24d-6c575cd99d3f-cover.png',
  },
];

export default function Carousel() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        className="rounded-2xl shadow-xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Card className="relative h-64 md:h-96 overflow-hidden rounded-2xl">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}