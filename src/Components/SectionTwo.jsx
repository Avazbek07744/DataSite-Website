import React from 'react';

const SectionTwo = (props) => {
    const {features,title} = props
    return (
        <div className="bace my-20">
            <h2 className="lg:text-5xl mb-12 text-3xl font-bold text-center lg:text-left">{title}</h2>
            <div className="flex flex-col justify-center items-center gap-6 lg:grid grid-cols-2 ">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="max-w-[619px] p-8 me-4 mb-7 bg-[#f3f8ff] rounded-[20px]"
                    >
                        <img
                            className="w-[48px] min-h-[52px] mb-4 object-cover"
                            src={item.icon}
                            alt="icon"
                        />
                        <h3 className="text-2xl text-[#101828] font-bold mb-4">
                            {item.title}
                        </h3>
                        <p className="text-[#667085] text-lg font-semibold">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SectionTwo;
