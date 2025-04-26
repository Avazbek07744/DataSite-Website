import React from 'react'
import TextCarusel from './TextCarusel'
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Main = (props) => {
    const { img, color } = props
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (agreed) {
            console.log({ name, phone });
            alert('So‘rovingiz yuborildi!');
        } else {
            alert('Iltimos, rozilik belgilang.');
        }
    };

    return (
        <div className='bace flex flex-col lg:flex-row items-center gap-5 mb-20'>
            {
                img ? <img className='lg:max-w-[650px] max-w-[350px]' src={img} alt="rasm" /> : <TextCarusel color={color} />
            }
            <div className={`max-w-[330px] md:max-w-[435px] min-h-[414px] mx-auto ${img ? "bg-[#F3F8FF]" : "bg-[#faf7f3]"} p-6 rounded-2xl shadow-md mt-10`}>
                <h2 className="text-2xl font-bold mb-2">Bepul konsultatsiya</h2>
                <p className="text-gray-600 mb-4 text-sm">
                    Telefon raqamingizni yozib qoldiring, biz sizga qo‘ng‘iroq qilamiz va birorta ham savolingiz javobsiz qolmasligiga harakat qilamiz
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <input
                        type="text"
                        placeholder="Ismingiz"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border border-gray-300 bg-white rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                        required
                    />
                    <PhoneInput
                        className="bg-transparent"
                        country={'uz'}
                        onlyCountries={['uz']}
                        value={phone}
                        onChange={setPhone}
                        inputClass="!w-full !py-2 mx-4 !border !border-gray-300 !rounded-md focus:!border-blue-500"
                        containerClass="!w-full"
                        buttonClass="!border-none"
                        inputProps={{
                            name: 'phone',
                            required: true,
                        }}
                    />
                    <div className="flex items-center gap-4 text-sm">
                        <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            className="w-4 h-4"
                        />
                        <span>
                            Shaxsiy ma'lumotlarni <a href="#" className="text-green-600 underline">qayta ishlanishiga</a> roziman
                        </span>
                    </div>
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white py-4 mt-6 rounded-md font-semibold transition"
                    >
                        So‘rov yuborish
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Main
