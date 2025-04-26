import React from 'react';
import bootcamp from '../assets/bootcamp.png';
import standart from '../assets/standart.png';
import dasturlash from '../assets/dasturlash.png';
import dizayn from '../assets/dizayn.png';
import marketing from '../assets/marketing.png';

const yonalishlar = [
    { nomi: "Dasturlash", rasm: dasturlash, bg: "bg-blue-50" },
    { nomi: "Dizayn", rasm: dizayn, bg: "bg-purple-50" },
    { nomi: "Marketing", rasm: marketing, bg: "bg-yellow-50" },
];

const talimTurlari = [
    { nomi: "Bootcamp", rasm: bootcamp, bg: "bg-orange-50" },
    { nomi: "Standard", rasm: standart, bg: "bg-sky-50" },
];

const Yonalish = () => {
    return (
        <section className="py-16 px-4 bg-white" aria-labelledby="yonalishlar-heading">
            <div className="max-w-7xl mx-auto">
                <h2 id="yonalishlar-heading" className="text-4xl font-bold text-center lg:text-left mb-12 text-gray-800">
                    Bizning Yo‘nalishlar
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {yonalishlar.map((item, index) => (
                        <article
                            key={index}
                            className={`relative ${item.bg} p-8 rounded-2xl transition-all duration-500 group hover:shadow-lg w-full max-w-[392px] mx-auto`}
                        >
                            <h3 className="text-xl font-semibold mb-6 text-gray-800">{item.nomi}</h3>
                            <img
                                src={item.rasm}
                                alt={`${item.nomi} rasmi`}
                                className="h-24 w-24 object-contain mx-auto mb-8"
                            />
                            <div className="absolute bottom-6 right-6 bg-white p-3 px-4 rounded-full shadow-md transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                                <i className="fa-regular fa-arrow-right text-gray-700"></i>
                            </div>
                        </article>
                    ))}
                </div>

                <h2 id="talimturi-heading" className="text-4xl font-bold text-center lg:text-left mb-12 text-gray-800">
                    Ta’lim Turlari
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {talimTurlari.map((item, index) => (
                        <article
                            key={index}
                            className={`relative ${item.bg} p-8 rounded-2xl transition-all duration-500 group hover:shadow-lg w-full max-w-[604px] mx-auto`}
                        >
                            <h3 className="text-xl font-semibold mb-6 text-gray-800">{item.nomi}</h3>
                            <img
                                src={item.rasm}
                                alt={`${item.nomi} rasmi`}
                                className="h-52 w-56 object-contain mx-auto mb-6"
                            />
                            <div className="absolute bottom-6 right-6 bg-white p-3 rounded-full shadow-md transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                                <i className="fa-regular fa-arrow-right text-gray-700"></i>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Yonalish;
