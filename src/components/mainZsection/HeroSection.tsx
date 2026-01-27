import ButtonM from "../uiZcomponents/ButtonM";
import githubIcon from '../../assets/icons/githubIcon.png'
import linkedIn from '../../assets/icons/linkedIcon.png'
import mailIcon from '../../assets/icons/mailIcon.png'

const HeroSection = () => {
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
                <ButtonM
                    content="Hire Me →"
                    styles="border border-[#14b8a5]/30 bg-[#14b8a5]/10 text-[#14b8a5] rounded-lg px-6 py-2 font-medium hover:bg-[#14b8a5]/20 transition"
                />
                <ButtonM
                    content="View My Work"
                    styles="border border-[#14b8a5]/30 text-[#14b8a5] rounded-lg px-6 py-2 font-medium hover:bg-[#14b8a5]/10 transition"
                />
            </div>
{/* icons for github, linkedin and mail */}
            <div className=" flex size-7 justify-center space-x-2 m-3">
                {
                    [linkedIn,githubIcon,mailIcon].map(icons=>
                        <img src={icons} alt="" className="hover:cursor-pointer active:scale-85" />
                    )
                }
                {/* <img src={linkedIn} alt=" linkedIn icon" />
                <img src={githubIcon} alt=" Github icon" />
                <img src={mailIcon} alt=" mail icon" /> */}
            </div>
        </section>
    );
};

export default HeroSection;