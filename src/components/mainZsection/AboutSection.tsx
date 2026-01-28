import codingIcon from "../../assets/icons/coding.png";
import rocketIcon from "../../assets/icons/rocket.png";
import peopleIcon from "../../assets/icons/people.png";

const AboutSection = () => {
    const content = [
        {
            id: 1,
            icon: codingIcon,
            tagline: "Full-Stack Expertise",
            para: "Proficient in both frontend and backend technologies, delivering end-to-end solutions.",
        },
        {
            id: 2,
            icon: rocketIcon,
            tagline: "Scalable Architecture",
            para: "Building robust systems that grow with your business needs and handle enterprise-level demands.",
        },
        {
            id: 3,
            icon: peopleIcon,
            tagline: "Collaborative Approach",
            para: "Adaptable to both enterprise and startup environments, ensuring smooth project delivery.",
        },
    ];

    return (
        <section id="about" className="px-8 py-16 text-gray-600 min-h-screen">
            {/* Title */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-2">
                    About <span className="text-[#14b8a5]">Me</span>
                </h1>
                <p className="text-lg text-gray-600">
                    A passionate developer dedicated to creating innovative solutions
                </p>
            </div>

            {/* Two-column layout */}
            <div className="flex flex-col md:flex-row justify-between gap-12 max-w-6xl mx-auto">
                {/* Left side - description */}
                <div className="md:w-1/2 leading-relaxed text-gray-700">
                    <p>
                        With extensive experience in both enterprise and startup environments, I specialize in
                        building scalable, high-performance applications using modern technologies.
                    </p>
                    <p className="mt-4">
                        My journey began with <span className="text-[#14b8a5] font-semibold">Java</span> and{" "}
                        <span className="text-[#14b8a5] font-semibold">Spring Boot</span>, creating robust
                        backend systems that power mission-critical applications. Over the years, I've expanded
                        my expertise to include <span className="text-[#14b8a5] font-semibold">React</span>,{" "}
                        <span className="text-[#14b8a5] font-semibold">TypeScript</span>, and cutting-edge{" "}
                        <span className="text-[#14b8a5] font-semibold">AI integration</span>, enabling me to
                        deliver complete full-stack solutions.
                    </p>
                    <p className="mt-4">
                        From mobile applications using React Native and Kotlin Multiplatform to complex
                        enterprise systems, I bring a versatile skill set that adapts to your project's unique
                        requirements. I'm passionate about clean code, optimal performance, and creating
                        exceptional user experiences.
                    </p>
                </div>

                {/* Right side - specialized boxes */}
                <div className="md:w-1/2 flex flex-col gap-6">
                    {content.map((items) => (
                        <div
                            key={items.id}
                            className="flex items-start gap-4 p-4 border border-[#14b8a5]/30 rounded-lg bg-[#14b8a5]/5 hover:bg-[#14b8a5]/10 transition"
                        >
                            {/* Icon */}
                            <div className="shrink-0 pt-5">
                                <img src={items.icon} alt={items.tagline} className="w-8 h-8" />
                            </div>
                            {/* Text */}
                            <div>
                                <h3 className="text-lg font-semibold text-[#14b8a5]">{items.tagline}</h3>
                                <p className="text-sm text-gray-800 mt-1">{items.para}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;