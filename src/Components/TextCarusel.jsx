import React, { useEffect, useState } from 'react';

const texts = [
    {
        title: "Kelajak kasblarini biz bilan o‘rganing!",
        description:
            "Hozirgi kunda istalgan biznes va startupning rivojlanishi uchun dasturchi, dizayner va marketolog muhim mutaxassislardan biri hisoblanadi. Shuning uchun ham ushbu sohalarda talab doimiy tarzda o‘sib bormoqda.",
    },
    {
        title: "Frontend dasturlashni o‘rganing!",
        description:
            "HTML, CSS, JavaScript va ReactJs orqali kuchli va zamonaviy web sahifalar yaratishni o‘rganing. Frontend rivojlanmoqda va talab yuqori!",
    },
    {
        title: "7500 dan ortiq bitiruvchilar safiga qo‘shiling!",
        description:
            "Shu kunga qadar “Najot Ta'lim” 7500 dan ortiq muvaffaqiyatli bitiruvchilarga ta‘lim bergan. Ularning 85-95 foizi doimiy tarzda ishli bo‘lib kelmoqda.",
    },
    {
        title: "1 yil ichida talabgir va daromadli mutaxassis bo‘ling!",
        description:
            "“DataSite Academy”da dasturlash yo‘nalishlarini 8 oydan 1 yilgacha bo‘lgan muddatda o‘rganib, bozorda talabgir kasb egasi bo‘ling.",
    },
];

const TextCarusel = ({ color = false }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <div className={`max-w-[370px] p-4 lg:max-w-[644px] min-h-[414px] lg:p-8 rounded-2xl ${color ? "bg-[#d9e8ff] text-[#5378af]" : "bg-[#f5ede2] text-[#9c7b4b]"} shadow-md relative`}>
                <h2 className="lg:text-4xl text-2xl font-bold mb-4">{texts[index].title}</h2>
                <p className="lg:text-2xl text-base">{texts[index].description}</p>

                <div className="flex px-10 gap-3 mt-6 absolute bottom-5 left-0 right-0">
                    {texts.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-2 w-8 rounded-full transition-all duration-300 
                                ${color
                                    ? (idx === index ? "bg-[#5378af]" : "bg-[#7298cf]")
                                    : (idx === index ? "bg-[#9c7b4b]" : "bg-[#d6c4a3]")
                                }
                            `}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TextCarusel;
