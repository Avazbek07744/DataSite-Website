import React from 'react'

const SectionOne = () => {
    const blogPosts = [
        {
            title: "DataSite jamoa a’zolari uchun teambuilding tashkil etildi",
            date: "24-aprel, 2025",
            views: 30,
            category: "DataSite jamoasi",
            description: "Najot Ta’lim jamoasi navbatdagi teambuilding tadbirida birlashtirildi...",
            image: "https://najottalim.uz/_next/image?url=https%3A%2F%2Fnws.cdn.najottalim.uz%2Fmain-server%2Fposts%2F6e43b5bb-9108-434d-99d0-d785d1e4c6cd.jpg&w=1920&q=100",
        },
        {
            title: "MFaktor rahbari Hasan Mamasadikov bilan DataSitemda master-klass",
            date: "24-aprel, 2025",
            views: 28,
            category: "Tadbirlar",
            description: "19-aprel kuni Hasan Mamasadikov bilan soft skill'larni rivojlantirish master-klass...",
            image: "https://najottalim.uz/_next/image?url=https%3A%2F%2Fnws.cdn.najottalim.uz%2Fmain-server%2Fposts%2Ff2c4ca10-fa8e-430f-a36c-596a795e0df9.jpg&w=1920&q=100",
        },
        {
            title: "Samaradorlikni oshirish uchun texnikalar",
            date: "22-aprel, 2025",
            views: 76,
            category: "Yangiliklar",
            description: "Ish unumdorligini oshirish uchun 7 samarali texnika haqida ma'lumot...",
            image: "https://najottalim.uz/_next/image?url=https%3A%2F%2Fnws.cdn.najottalim.uz%2Fmain-server%2Fposts%2Ff141dcdb-b478-4389-a671-bef4f384ef22.png&w=1920&q=100",
        },
    ];

    const datasitebu = [
        {
            icon: "/icons/code.svg",
            text: "Dasturlash, dizayn va marketing kabi zamonaviy kasblar o'rgatiladigan markaz.",
        },
        {
            icon: "/icons/future.svg",
            text: "Zamonaviy kasblar yordamida insonlar hayotini yaxshilovchi va kelajakka bo'lgan ishonchni mustahkamlovchi maskan.",
        },
        {
            icon: "/icons/group.svg",
            text: "Bir vaqting o'zida 2500 dan ortiq o'quvchilar va 350 dan ortiq katta jamoani birlashtirgan ta'lim va innovatsiya markazi.",
        },
    ];
    return (
        <section className="bace py-10">
            <h2 className="text-5xl font-bold mb-16 text-center lg:text-left">Blog</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full mb-2">
                                {post.category}
                            </span>
                            <div className="text-gray-400 text-sm mb-2 space-x-2">
                                <span>{post.date}</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                            <a href="#" className="text-green-600 font-semibold text-sm hover:underline">
                                Batafsil
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="text-3xl font-bold my-10 text-center lg:text-left">“DataSite” bu -</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {datasitebu.map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
                        <img src={item.icon} alt="icon" className="w-14 h-14 mb-4" />
                        <p className="text-gray-700">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SectionOne