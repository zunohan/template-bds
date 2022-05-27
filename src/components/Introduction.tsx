const Introduction: React.FC = () => {
    return (
        <section className="relative">
            <div className="mx-4 lg:py-10">
                <div className="relative md:w-3/5 bg-gray-100 rounded-lg py-10 sm:px-6 lg:px-8 z-10">
                    <div className="text-orange-500 text-3xl font-semibold">
                        Giới thiệu tổng quan
                    </div>
                    <p className="text-lg">
                        Venezia Beach là dự án bất động sản nhà phố, biệt thự có pháp lý sở hữu lâu
                        dài. Nằm trên vị trí chiến lược vàng, tọa độ kim cương trên cung đường
                        “triệu đô” Hồ Tràm – Bình Châu. Với tổng diện tích xây dựng lên đến hơn
                        5.000 m2, cùng ý tưởng kiến tạo như một nước Ý xa hoa thu nhỏ. Đây là dự án
                        khu du lịch sinh thái biển cao cấp hứa hẹn mang đến một không gian sống trứ
                        danh “thành phố kênh đào” lý tưởng và hiện đại.
                    </p>
                </div>
            </div>
            <div className="absolute top-0 right-0">
                <div className="flex justify-end">
                    <div className="w-1/2">
                        <img
                            className="object-center"
                            src="https://venezia.net.vn/wp-content/webp-express/webp-images/uploads/2022/05/VB_PV_03_TongtheC-1280x768.jpeg.webp"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduction
