const Utility: React.FC = () => {
    return (
        <section className="container mx-auto my-4 space-y-8">
            <div className="flex flex-col items-center text-center">
                <p className="w-3/5 text-4xl text-green-900 font-bold">Tiện ích đặc biệt</p>
                <p className="mx-4">
                    Theo đó, dự án Venezia Beach có 3 trục đường chính rộng 25m lần lượt là Da Vinci
                    Road, Pavarotti Road và Guccio Road. Được chia thành 4 phân khu chính lớn, bao
                    gồm:
                </p>
            </div>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="grid grid-cols-4 grid-flow-row gap-8">
                    <div className="relative">
                        <p className="absolute w-full bottom-10 text-center text-white text-4xl">
                            Phân khu The Venice
                        </p>
                        <img
                            className="object-cover shadow rounded-lg max-w-full h-full align-middle border-none"
                            src="https://venezia.net.vn/wp-content/webp-express/webp-images/uploads/2021/07/THE-VENICE-640x427.jpeg.webp"
                            alt=""
                        />
                    </div>
                    <div className="relative">
                        <p className="absolute w-full bottom-10 text-center text-white text-4xl">
                            Phân khu The Catania
                        </p>
                        <img
                            className="object-cover shadow rounded-lg max-w-full h-full align-middle border-none"
                            src="https://venezia.net.vn/wp-content/webp-express/webp-images/uploads/2021/07/THE-CATANIA-640x800.jpeg.webp"
                            alt=""
                        />
                    </div>
                    <div className="relative">
                        <p className="absolute w-full bottom-10 text-center text-white text-4xl">
                            Phân khu The Milano
                        </p>
                        <img
                            className="object-cover shadow rounded-lg max-w-full h-full align-middle border-none"
                            src="https://venezia.net.vn/wp-content/webp-express/webp-images/uploads/2021/07/THE-MILANO-640x285.jpeg.webp"
                            alt=""
                        />
                    </div>
                    <div className="relative">
                        <p className="absolute w-full bottom-10 text-center text-white text-4xl">
                            Phân khu The Vicenza
                        </p>
                        <img
                            className="object-cover shadow rounded-lg max-w-full h-full align-middle border-none"
                            src="https://venezia.net.vn/wp-content/webp-express/webp-images/uploads/2021/07/THE-VICENZA-640x980.jpeg.webp"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Utility
