import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegramPlane, FaYoutube } from 'react-icons/fa';
import logo from "../assets/logo.svg"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-50 py-10 px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">

                <div className="flex flex-col items-start gap-4">
                    <Link to="/" >
                        <img className='w-40' src={logo} alt="" />
                    </Link>
                    <p className="text-lg font-semibold text-gray-800">+998 95 061 64 66</p>
                    <p className="text-gray-600">
                        Nmangan shahri Davlat xizmatlari 4-etaji, 31-maktab yonida
                    </p>
                    <div className="text-xs text-gray-400">
                        © “DataSite“, 2025 – Barcha huquqlar himoyalangan.
                    </div>
                </div>

                <div className="grid grid-cols-2 mt-10 items-center gap-3">
                    <a href="#" className="text-gray-600 hover:text-black text-sm">Kurslar</a>
                    <a href="#" className="text-gray-600 hover:text-black text-sm">Ommaviy Oferta</a>
                </div>

                <div className="flex flex-col mt-10 items-end gap-6">
                    <div className="flex gap-4">
                        <a href="#" className="text-gray-500 hover:text-black text-lg"><FaFacebookF /></a>
                        <a href="https://www.instagram.com/datasite_academy/" target='_blank' className="text-gray-500 hover:text-black text-lg"><FaInstagram /></a>
                        <a href="https://t.me/Datasite_Academy" target='_blank' className="text-gray-500 hover:text-black text-lg"><FaTelegramPlane /></a>
                        <a href="https://www.youtube.com/@Datasiteacademy" target='_blank' className="text-gray-500 hover:text-black text-lg"><FaYoutube /></a>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <img src="/images/tasdiqnoma.jpg" alt="Tasdiqnoma" className="w-20 h-16 object-cover rounded" />
                            <span className="text-xs text-gray-500 mt-1">Tasdiqnoma</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/images/itpark.jpg" alt="IT Park rezidenti" className="w-20 h-16 object-cover rounded" />
                            <span className="text-xs text-gray-500 mt-1">IT Park rezidenti</span>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
