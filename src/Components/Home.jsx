import React from 'react'
import Header from './Header'
import Main from './Main'
import Carusel from './Carusel'
import Crds from './Crds'
import SectionOne from './SectionOne'
import ImageCarousel from './ImageCarusel'
import SectionTwo from './SectionTwo'
import Manzil from './Manzil'
import Yonalish from './Yonalish'
import Footer from './Footer'
import img from '../assets/image.png'
import icon1 from '../assets/bepul.png'
import icon2 from '../assets/sifat.png'
import icon3 from '../assets/musobaqa.png'
import icon4 from '../assets/mahorat.png'
import icon5 from '../assets/kafolat.png'
import icon6 from '../assets/sertificat.png'

const Home = () => {
    const features = [
        {
            title: "Bepul kovorking",
            description: "24/7 formatida tun-u kun ishlaydigan bepul kovorking va wifi.",
            icon: icon1,
        },
        {
            title: "Sifatli ta'lim",
            description: "Doimiy yangilanib boradigan kurslar va katta tajribaga ega ustozlar.",
            icon: icon2,
        },
        {
            title: "Doimiy musobaqalar",
            description: "Dasturlash, dizayn va marketing sohalari bo‘yicha haftalik sovrinli musobaqalar.",
            icon: icon3,
        },
        {
            title: "Bepul mahorat darslari",
            description: "Soha mutaxassislari bilan doimiy o‘tkaziladigan bepul master-klasslar.",
            icon: icon4,
        },
        {
            title: "Ish taklif qilish kafolati *",
            description: "“Najot Ta'lim” intensiv kurslarni muvaffaqiyatli bitirgan o‘quvchilarga ish taklif qilish kafolatini beradi. *",
            icon: icon5,
        },
        {
            title: "Sertifikat",
            description: "Kursni muvaffaqiyatli tamomlagan o‘quvchilar “Najot Ta'lim”ning diplomi va sertifikatiga ega bo‘ladi.",
            icon: icon6,
        },
    ];
    return (
        <div>
            <Header />
            <div className="pt-36">
                <Main />
            </div>
            <Crds title={"Kurslar"} />
            <SectionOne />
            <ImageCarousel />
            <SectionTwo features={features} title="Nima uchun “DataSite”" />
            <Carusel />
            <div className="md:block hidden">
                <SectionTwo features={features} title="Nima uchun “DataSite”" />
            </div>
            <Main img={img} />
            <Yonalish />
            <Main color="#d9e8ff" />
            <div className="md:block hidden">
                <Crds title={"Kurslar"} />
            </div>
            <Manzil />
            <Footer />
        </div>
    )
}

export default Home
