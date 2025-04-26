import React, { useState } from 'react';
import TextCarusel from './TextCarusel';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const BOT_TOKEN = "8031185324:AAGmZD4h_gdCsIlEmDMmTkDCHAffryzQ6jo";
const CHAT_ID = "@eslatmalr";

const Main = ({ img, color }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!agreed) {
            alert("Iltimos, rozilik belgilang.");
            return;
        }

        const message = `
            📞 Yangi so'rov:\n
            👤 Ismi: ${name}\n
            📱 Telefon: +${phone}
        `;

        try {
            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                }),
            });

            alert("So‘rovingiz muvaffaqiyatli yuborildi!");
            setName('');
            setPhone('');
            setAgreed(false);
        } catch (error) {
            console.error("Xatolik:", error);
            alert("Xatolik yuz berdi. Keyinroq urinib ko‘ring.");
        }
    };

    return (
        <div className="bace flex flex-col lg:flex-row items-center gap-8 mb-20">
            {img ? (
                <img
                    src={img}
                    alt="Kurs rasmi"
                    className="lg:max-w-[650px] max-w-[350px] rounded-2xl object-cover"
                />
            ) : (
                <TextCarusel color={color} />
            )}
            <div className={`w-full max-w-[435px] mx-auto ${img ? "bg-[#F3F8FF]" : "bg-[#FAF7F3]"} p-8 rounded-2xl shadow-lg`}>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Bepul konsultatsiya</h2>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    Telefon raqamingizni qoldiring, biz siz bilan tez orada bog‘lanamiz va barcha savollaringizga javob beramiz.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <input
                        type="text"
                        placeholder="Ismingiz"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <PhoneInput
                        country="uz"
                        onlyCountries={['uz']}
                        value={phone}
                        onChange={setPhone}
                        inputClass="!w-full !py-3 !px-4 !border !border-gray-300 !rounded-md focus:!border-blue-500"
                        containerClass="!w-full"
                        buttonClass="!border-none"
                        inputProps={{
                            name: 'phone',
                            required: true,
                        }}
                    />
                    <label className="flex items-center gap-3 text-sm text-gray-600">
                        <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            className="w-4 h-4"
                        />
                        Shaxsiy ma'lumotlarimni <a href="#" className="text-green-600 underline">qayta ishlashga</a> roziman
                    </label>
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-semibold transition-all duration-300"
                    >
                        So‘rov yuborish
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Main;
