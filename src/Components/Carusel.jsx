import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const videos = [
    { name: 'Dasturlash', type: 'youtube', videoUrl: 'https://www.youtube.com/embed/Uy2v15IIbQg' },
    { name: 'Kampyuter savodxonlik', type: 'youtube', videoUrl: 'https://www.youtube.com/embed/x0dUB_J8KMQ' },
    { name: 'Buhgalteriya', type: 'youtube', videoUrl: 'https://www.youtube.com/embed/qZkt8cW3jaI' },
    { name: 'Kampyuter savodxonlik', type: 'youtube', videoUrl: 'https://www.youtube.com/embed/PKVOT_YuwZo' },
    { name: 'Rus tili', type: 'youtube', videoUrl: 'https://www.youtube.com/embed/B8jnqMSKwXY' },
    { name: 'Ingliz tili', type: 'youtube', videoUrl: 'https://www.youtube.com/embed/Lbz98lCOJYs' },
];

const reviews = [
    { ism: "Ulug'bek Raxmonov", kasb: "Grafik dizayner", fikr: "Grafik Dizayn kursini 2022-yil noyabrda boshladim va 2023-yil iyunda tugatdim..." },
    { ism: "Akbar Ahmadjonov", kasb: "Fullstack dasturchi", fikr: "Najot ta'lim jamoasiga ustozlar va rahbariyatga katta rahmat..." },
    { ism: "Humoyun Mirzo", kasb: "Frontend dasturchi", fikr: "Frontend kursini tamomlab, hozirda Back-End kursida o'qiyapman..." },
    { ism: "Laylo Nurmatova", kasb: "UI/UX dizayner", fikr: "Najot Ta'limda o'qish orzuyim edi va bu orzuyim amalga oshdi!" },
    { ism: "Islom Yuldoshev", kasb: "Mobil dasturchi", fikr: "React Native bo'yicha juda kuchli bilimlarga ega bo'ldim." },
    { ism: "Zarina Karimova", kasb: "SMM mutaxassisi", fikr: "Marketing va SMM kurslaridan keyin ishim osonlashdi." },
    { ism: "Javohir Rasulov", kasb: "Backend dasturchi", fikr: "Backend sohasida PHP va Node.js ni yaxshi o'rganib chiqdim." },
    { ism: "Malika Shukurova", kasb: "Web dizayner", fikr: "Web dizayn asoslarini va Figma dasturini puxta o'rgandim." },
];

const Carusel = () => {
    return (
        <div className="bace mx-auto py-12 px-4">
            <section className="mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center lg:text-left">Video Darslar</h2>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    loop
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="rounded-xl"
                >
                    {videos.map((video, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative rounded-2xl overflow-hidden shadow-md">
                                <iframe
                                    src={video.videoUrl}
                                    title={video.name}
                                    className="w-full h-64 md:h-80 lg:h-96 rounded-xl"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <div className="absolute bottom-2 left-2 bg-white px-4 py-1 rounded-full text-xs font-semibold">
                                    {video.name}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section>
                <h2 className="text-3xl md:text-5xl font-bold mb-8">O‘quvchilarning fikrlari</h2>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    loop
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {reviews.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between h-[320px]">
                                <p className="text-gray-700 text-sm mb-4 line-clamp-3">{item.fikr}</p>
                                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-300">
                                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-2c-1.1 0-2-.9-2-2s.9-2 
                                            2-2 2 .9 2 2-.9 2-2 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold">{item.ism}</h4>
                                        <p className="text-xs text-gray-500">{item.kasb}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </div>
    );
};

export default Carusel;
