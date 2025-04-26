import React, { useState } from 'react';
import data from '../data.json';

const Crds = (props) => {
    const { title } = props;
    const [showAll, setShowAll] = useState(false);

    const handleLoadMore = () => {
        setShowAll(!showAll);
    };

    const visibleCards = showAll ? data.slice(0, 8) : data.slice(0, 4);

    return (
        <div className='bace'>
            <h2 className='text-5xl mb-16 font-bold text-center lg:text-left'>{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 lg:px-0">
                {visibleCards.map((arr, index) => (
                    <div key={index}
                        className="bg-[#F9FAFB] max-w-[389px] rounded-2xl shadow-sm p-4 w-full hover:shadow-md transition flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <img src={arr.icon} alt={arr.title} className="w-12 h-12 rounded" />
                            <div>
                                <h3 className="text-lg font-semibold">{arr.name}</h3>
                                <p className="text-gray-500 text-sm">{arr.duration} oy</p>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col gap-2">
                            <span className='font-bold text-gray-400'>{arr.category[0]}</span>
                            <span
                                className={`px-3 py-1 rounded-full text-sm font-medium ${arr.type === 'Bootcamp'
                                    ? 'bg-green-100 text-green-800'
                                    : arr.type === 'Standard'
                                        ? 'bg-orange-100 text-orange-800'
                                        : arr.type === 'boshqa'
                                            ? 'bg-blue-100 text-blue-800'
                                            : 'bg-gray-100 text-gray-800'
                                    }`}
                            >
                                {arr.type}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {showAll ?
                <div className="flex justify-center mt-10">
                    <button
                        onClick={handleLoadMore}
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition"
                    >
                        Ko‘proq ko‘rish
                    </button>
                </div>
                : <div className="flex justify-center mt-10">
                    <button
                        onClick={handleLoadMore}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition"
                    >
                        Kamroq ko‘rish
                    </button>
                </div>
            }
        </div>
    );
};

export default Crds;
