const IntroPage = () => {
    return (
        <section className="min-h-screen bg-[#0f172a] text-white flex items-center overflow-hidden">
            <div className="container mx-auto px-6 lg:px-16">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>

                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 mb-8">
                            <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                            <span className="text-sm text-teal-300">
                                Available for Freelance & Full-Time Roles
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                            Hi, I'm{" "}
                            <span className="text-teal-400">
                                Govinda Bitlani
                            </span>
                        </h1>

                        <h2 className="text-2xl md:text-3xl text-slate-300 font-semibold mb-6">
                            Full Stack Developer
                        </h2>

                        {/* Description */}
                        <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-10">
                            I build scalable web applications, REST APIs, and
                            modern user experiences using React, Spring Boot,
                            Java, Docker, and cloud technologies.
                        </p>

                        

                       

                    </div>

                    {/* Right Side */}
                    <div className="flex justify-center">

                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute inset-0 bg-teal-500/20 blur-3xl rounded-full"></div>

                            {/* Image Frame */}
                            <div className="relative p-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500">

                                <img
                                    src="./govindabitlani.jpg"
                                    alt="Govinda Bitlani"
                                    className="w-80 h-80 lg:w-[420px] lg:h-[420px]
                                    object-cover rounded-full border-4 border-[#0f172a]"
                                />

                            </div>

                            {/* Floating Card */}
                            <div className="absolute -bottom-5 -left-5 backdrop-blur-lg bg-white/10 border border-white/10 px-6 py-4 rounded-2xl">
                                <p className="text-sm text-slate-300">
                                    Currently Building
                                </p>
                                <h4 className="font-semibold">
                                    Scalable Web Applications
                                </h4>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default IntroPage;