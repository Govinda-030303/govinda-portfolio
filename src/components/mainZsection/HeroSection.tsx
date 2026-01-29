import github from '../../assets/icons/githubIcon.png'
import linkedin from '../../assets/icons/linkedIcon.png'
import mail from '../../assets/icons/mailIcon.png'

const HeroSection = () => {

    const socialLinks = [
        { icon: github, label: "GitHub", href: "https://github.com/Govinda-030303" },
        { icon: linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/govinda-bitlani-8674bb201/" },
        { icon: mail, label: "Email", href: "mailto:govidna.boj@gmail.com" },
    ];


    return (
        <section className="flex flex-col items-center justify-center text-center px-6 py-16 min-h-screen">

            {/* Role badge */}
            <div className="inline-block mb-6 px-6 py-2 text-[#14b8a5] bg-[#14b8a5]/10 border border-[#14b8a5]/20 rounded-full text-sm font-medium tracking-wide">
                Full-Stack Developer
            </div>

            {/* Tagline */}
            <div className="mb-6">
                <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#172f2c] via-[#14b8a5] to-[#172f2c] bg-clip-text text-transparent">
                    Building Scalable <h1 className="text-[#14b8a5]">Modern Applications</h1>
                </h1>
            </div>

            {/* Subheading */}
            <p className="max-w-2xl mb-8 text-lg text-gray-300 leading-relaxed">
                Expert in <span className="text-[#14b8a5] font-semibold">Java, Spring Boot, React, TypeScript, and AI integration</span>.
                Transforming ideas into robust, enterprise-grade solutions.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
                <button className="border border-[#14b8a5]/30 bg-[#14b8a5]/10 text-[#14b8a5] rounded-lg px-6 py-2 font-medium hover:bg-[#14b8a5]/20 transition">
                    <a href="mailto:govidna.boj@gmail.com">
                        Hire Me →
                    </a>
                </button>
                
            </div>
            {/* icons for github, linkedin and mail */}
            <div className=" flex size-7 justify-center space-x-2 m-3">
                <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 flex items-center justify-center rounded-full
                             bg-white border border-gray-300
                             hover:border-[#14b8a5]/50
                             hover:shadow-[0_0_20px_rgba(20,184,165,0.35)]
                             hover:-translate-y-1 transition"
                        >
                            <img src={social.icon} alt={social.label} className="w-5 h-5" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;