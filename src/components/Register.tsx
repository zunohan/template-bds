const Register: React.FC = () => {
    return (
        <section className="container mx-auto my-4">
            <div className="flex flex-col items-center my-4 text-center">
                <p className="w-3/5 text-4xl font-bold">
                    Đăng ký nhận thông tin và hỗ trợ tư vấn về dự án Venezia Beach
                </p>
                <p>Quý khách vui lòng liên hệ trực tiếp theo Hotline tư vấn 24/07:</p>
                <p>Hoặc cung cấp thông tin theo mẫu bên dưới, chúng tôi sẽ liên hệ lại ngay.</p>
            </div>
            <div className="flex justify-center my-4">
                <form className="w-full max-w-2lg p-10 rounded bg-red-100">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-first-name"
                            >
                                Ho va ten *
                            </label>
                            <input
                                className="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name"
                                type="text"
                                placeholder="Jane"
                            />
                            {/* <p className="text-red-500 text-xs italic">
                                Please fill out this field.
                            </p> */}
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-last-name"
                            >
                                So dien thoai *
                            </label>
                            <input
                                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name"
                                type="text"
                                placeholder="Doe"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Email
                            </label>
                            <input
                                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-password"
                                type="password"
                                placeholder="******************"
                            />
                            <p className="text-gray-600 text-xs italic">
                                Make it as long and as crazy as you'd like
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Noi dung
                            </label>
                            <textarea
                                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                rows={5}
                                placeholder="******************"
                            />
                            {/* <p className="text-gray-600 text-xs italic">
                                Make it as long and as crazy as you'd like
                            </p> */}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                            type="submit"
                        >
                            NHAN THONG TIN
                        </button>
                    </div>
                </form>
            </div>
            <p className="text-center">Chân thành cảm ơn Quý khách đã quan tâm đến dự án Venezia Beach.</p>
        </section>
    )
}

export default Register
