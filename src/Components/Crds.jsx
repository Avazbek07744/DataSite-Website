import React, { useEffect, useState } from 'react';
import data from '../data.json';

const Crds = ({ title }) => {
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 800);
        };

        handleResize(); 
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleToggleShow = () => {
        setShowAll((prev) => !prev);
    };

    const visibleCards = isMobile
        ? (showAll ? data.slice(0, 12) : data.slice(0, 6))
        : data; 

    return (
        <section className="bace">
            <h2 className="text-4xl md:text-5xl mb-16 font-bold text-center lg:text-left">{title}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-0">
                {visibleCards.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#F9FAFB] max-w-[389px] w-full rounded-2xl shadow-sm hover:shadow-md transition p-4 flex justify-between items-center"
                    >
                        <div className="flex items-center space-x-4">
                            <img src={item.icon} alt={item.name} className="w-12 h-12 object-cover rounded" />
                            <div>
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <p className="text-gray-500 text-sm">{item.duration} oy</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 text-right">
                            <span className="font-bold text-gray-400">{item.category[0]}</span>
                            <span
                                className={`px-3 py-1 rounded-full text-sm font-medium ${
                                    item.type === 'Bootcamp'
                                        ? 'bg-green-100 text-green-800'
                                        : item.type === 'Standard'
                                        ? 'bg-orange-100 text-orange-800'
                                        : item.type === 'boshqa'
                                        ? 'bg-blue-100 text-blue-800'
                                        : 'bg-gray-100 text-gray-800'
                                }`}
                            >
                                {item.type}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Faqat mobilda button ko‘rsatiladi */}
            {isMobile && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={handleToggleShow}
                        className="px-6 py-2 rounded-full text-white transition
                        bg-green-600 hover:bg-green-700"
                    >
                        {showAll ? 'Kamroq ko‘rish' : 'Ko‘proq ko‘rish'}
                    </button>
                </div>
            )}
        </section>
    );
};

export default Crds;
