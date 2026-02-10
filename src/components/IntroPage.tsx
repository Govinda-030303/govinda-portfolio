const IntroPage = () => {
    return (
        <section className="min-h-screen bg-linear-to-r from-[#172f2c] via-[#14b8a5] to-[#172f2c] text-white flex items-center">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left animate-slideInLeft">

                        {/* Hire Badge */}
                        <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                            <span className="text-sm text-teal-300 font-medium tracking-wide">
                                Available for Hire
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                            Building Digital <br />
                            <span className="bg-linear-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                                Experiences
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                            I'm <span className="text-black font-semibold">Govinda Bitlani</span>, a
                            Full-stack Developer passionate about crafting scalable,
                            elegant, and high-performance web applications.
                        </p>

                        {/* ping horizontal  */}
                        <div className=" flex justify-evenly ">
                            {[1, 2, 3].map(() =>

                                <div className="px-5 py-1 rounded-full bg-teal-200 animate-ping duration-75 w-3"></div>
                            )}
                        </div>
                    </div>

                    {/* Image Area */}
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-teal-400/20 blur-3xl"></div>
                            <img
                                src="./govindabitlani.jpg"
                                alt="Govinda Bitlani"
                                className="relative w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl bg-[#818686] "
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default IntroPage;
