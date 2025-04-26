import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function ImageCarousel() {
    const images = [
        "/images/img1.jpg",
        "/images/img2.jpg",
        "/images/img3.jpg",
        "/images/img4.jpg",
        "/images/img5.jpg",
        "/images/img6.jpg",
        "/images/img7.jpg",
        "/images/img8.jpg",
        "/images/img9.jpg",
        "/images/img10.jpg",
        "/images/img11.jpg",
        "/images/img12.jpg",
        "/images/img13.jpg",
        "/images/img14.jpg",
        "/images/img15.jpg",
    ];

    return (
        <div className="w-full px-4 py-8 mt-20">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    840: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1204: { slidesPerView: 5 },
                }}
                loop={true}
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={src}
                            alt={`Image ${index + 1}`}
                            className="maz-w-[366px] h-[303px] me-6 object-cover rounded-xl shadow-md"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
