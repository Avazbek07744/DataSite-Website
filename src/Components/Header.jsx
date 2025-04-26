import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from "../data.json";
import logo from "../assets/logo.svg"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [coursesMenuOpen, setCoursesMenuOpen] = useState(false);
    const [showAllCourses, setShowAllCourses] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);
    const courses = data;

    const handleMenuToggle = (e) => {
        e.preventDefault();
        setMenuOpen(prev => !prev);
    };

    const handleCoursesMenuToggle = () => {
        setCoursesMenuOpen(prev => !prev);
        if (window.innerWidth >= 1024) {
            setShowAllCourses(true);
        } else {
            setShowAllCourses(false);
        }
    };

    const handleResize = () => {
        const smallScreen = window.innerWidth < 1024;
        setIsSmallScreen(smallScreen);
        if (!smallScreen) {
            setShowAllCourses(true);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const visibleCourses = showAllCourses || !isSmallScreen ? courses : courses.slice(0, 6);

    const navLinks = [
        { label: 'Bitiruvchilar', to: '/' },
        { label: "Individual Ta'lim", to: '/' },
        { label: 'Blog', to: '/' },
    ];

    return (
        <header className="bg-[#f8f8f8] fixed w-full z-50 transition-all duration-300 shadow-sm">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 h-20">
                <div className="flex items-center gap-5">
                    <Link to="/" className="text-xl font-bold">
                        <img className='w-40' src={logo} alt="" />
                    </Link>
                    <button
                        onClick={handleCoursesMenuToggle}
                        className={`text-base font-medium flex gap-2 items-end ${coursesMenuOpen ? "text-[#bc8e5b]" : "text-black"} hover:text-[#bc8e5b]`}
                    >
                        Kurslar
                        {
                            coursesMenuOpen ? <i className="fa-regular fa-arrow-up"></i> : <i className="fa-regular fa-arrow-down"></i>
                        }
                    </button>
                </div>

                <ul className="hidden lg:flex gap-8 items-center">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={idx}
                            className="text-base font-medium hover:text-[#bc8e5b] transition"
                            to={link.to}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        className="border-2 border-[#bc8e5b] rounded-md px-4 py-2 text-[#bc8e5b] hover:bg-[#bc8e5b] hover:text-white transition text-sm font-semibold"
                        to="/"
                    >
                        <i className="fa-regular fa-phone mr-1"></i> +998 88 466 2209
                    </Link>
                </ul>

                <div className="flex lg:hidden">
                    <button
                        onClick={handleMenuToggle}
                        className='group w-9 h-9 pl-[9px] border border-transparent hover:border-gray-400 rounded-full transition-all duration-300 ease-in-out'
                    >
                        {menuOpen ? (
                            <div className="relative w-4 h-4 top-2">
                                <span className="absolute top-0 left-0 w-4 border-b-[3px] rounded-xl border-black rotate-45 group-hover:border-red-700 transition-transform duration-500"></span>
                                <span className="absolute top-0 left-0 w-4 border-b-[3px] rounded-xl border-black -rotate-45 group-hover:border-red-700 transition-transform duration-500"></span>
                            </div>
                        ) : (
                            <div>
                                <span className='block border-b-[3px] rounded-xl w-4 mb-1 border-black group-hover:border-red-700 transition-all duration-300'></span>
                                <span className='block border-b-[3px] rounded-xl w-4 mb-1 border-black group-hover:border-red-700 transition-all duration-300'></span>
                                <span className='block border-b-[3px] rounded-xl w-3 border-black group-hover:border-red-700 transition-all duration-300'></span>
                            </div>
                        )}
                    </button>
                </div>
            </nav>

            {menuOpen && (
                <div className="bg-white pt-6 flex flex-col items-center gap-8 py-10 shadow-md">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={idx}
                            className="text-xl font-semibold color border-b-2"
                            to="#"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        className="border-2 border-[#bc8e5b] rounded-md px-4 py-2 text-[#bc8e5b] hover:bg-[#bc8e5b] hover:text-white transition text-center text-lg font-semibold"
                        to="/"
                    >
                        <i className="fa-regular fa-phone"></i> +998 88 466 2209
                    </Link>
                </div>
            )}

            {coursesMenuOpen && (
                <div className="bg-white py-10 shadow-inner">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
                        {visibleCourses.map((course, idx) => (
                            <div key={idx} className="bg-[#f9fafb] rounded-xl p-5 grid grid-cols-2 items-start text-center hover:shadow-md transition">
                                <img
                                    src={course.image || "https://via.placeholder.com/80"}
                                    alt={course.name}
                                    className="w-10 h-10 rounded-md object-cover mb-4"
                                />
                                <span className="mt-2 bg-[#F2D6C0] text-[#BC8E5B] text-xs w-max py-1 px-3 rounded-full">{course.type}</span>
                                <h3 className="text-[#2a3040] text-left font-semibold">{course.name}</h3>
                                <p className="text-[#667085] text-left text-sm">{course.duration} davom etadi</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
