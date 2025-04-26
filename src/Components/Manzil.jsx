import React from 'react';

const BizningManzillar = () => {
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96350.95157694622!2d71.56222474806933!3d41.00409030000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4de37952b8cb%3A0x7b79ef0e9d1e341a!2sDavlat%20xizmatlari!5e0!3m2!1sen!2s!4v1745648367962!5m2!1sen!2s";

    return (
        <section className="py-16 px-4 bg-white" aria-labelledby="manzillar-heading">
            <div className="max-w-7xl mx-auto">
                <h2 id="manzillar-heading" className="text-4xl font-bold text-center mb-12 text-gray-800">
                    Bizning Manzillar
                </h2>
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                    {/* Map Section */}
                    <div className="flex-1">
                        <iframe
                            src={mapUrl}
                            title="Bizning manzilimiz xaritada"
                            className="w-full h-[500px] rounded-xl shadow-md"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Info Section */}
                    <div className="flex-1 bg-gray-50 p-8 rounded-xl shadow-md space-y-4">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Namangan</h3>
                        <img
                            src="/images/najot-talimguruh.jpg"
                            alt="DataSite binosi rasmi"
                            className="w-full h-auto rounded-lg mb-6 object-cover"
                        />
                        <ul className="space-y-3 text-gray-700">
                            <li>
                                <span className="font-semibold">Manzil:</span> Namangan shahar
                            </li>
                            <li>
                                <span className="font-semibold">Mo'ljal:</span> Rayhon milliy taomlar ro'parasida
                            </li>
                            <li>
                                <span className="font-semibold">Ish vaqti:</span> 09:00 - 18:00
                            </li>
                            <li>
                                <span className="font-semibold">Telefon:</span>{' '}
                                <a
                                    href="tel:+998950616466"
                                    className="text-[#bc8e5b] hover:underline"
                                >
                                    +998 95 061 64 66
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BizningManzillar;
