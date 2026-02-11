import { useState } from "react";

const SkillsSection = () => {
    const skills = [
        { name: "Java", level: 95, category: "Backend" },
        { name: "Spring Boot", level: 92, category: "Backend" },
        { name: "React", level: 90, category: "Frontend" },
        { name: "TypeScript", level: 88, category: "Frontend" },
        { name: "JavaScript", level: 90, category: "Frontend" },
        { name: "AI Integration", level: 85, category: "Specialized" },
        { name: "React Native", level: 87, category: "Mobile" },
        { name: "Kotlin Multiplatform", level: 83, category: "Mobile" },
        { name: "Android Development", level: 86, category: "Mobile" },
    ];

    const categories = ["All", "Backend", "Frontend", "Mobile", "Specialized"];
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredSkills =
        selectedCategory === "All"
            ? skills
            : skills.filter((skill) => skill.category === selectedCategory);

    return (
        <section id="skills" className="px-6 py-20 min-h-screen text-gray-800">
            {/* Title */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    My <span className="text-[#14b8a5]">Skills</span>
                </h1>
                <p className="max-w-xl mx-auto text-gray-500 text-lg">
                    Technologies I use to build scalable and modern applications
                </p>
            </div>

            {/* Category Filters */}
            <div className="flex justify-center gap-4 mb-14 flex-wrap">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-6 py-2 rounded-full border transition-all duration-300
              ${selectedCategory === cat
                                ? "bg-[#14b8a5]/15 text-[#14b8a5] border-[#14b8a5]"
                                : "border-gray-300 text-gray-700 hover:text-[#14b8a5] hover:border-[#14b8a5]/50 font-bold"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Skills Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {filteredSkills.map((skill) => (
                    <div
                        key={skill.name}
                        className="group p-6 rounded-2xl border border-gray-200 bg-white/60
                       hover:border-[#14b8a5]/50 hover:shadow-lg
                       transition-all duration-300"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold group-hover:text-[#14b8a5] transition">
                                {skill.name}
                            </h3>
                            {/* <span className="text-sm text-gray-500">{skill.level}%</span> */}
                        </div>

                        {/* Progress Bar */}
                        {/* <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
                            <div
                                className="h-full rounded-full bg-linear-to-r from-[#14b8a5] to-[#22d3ee]
                           transition-all duration-700 ease-out"
                                style={{ width: `${skill.level}%` }}
                            />
                        </div> */}

                        {/* Category Tag */}
                        <div className="mt-4 text-xs inline-block px-3 py-1 rounded-full
                            bg-[#14b8a5]/10 text-[#14b8a5]">
                            {skill.category}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
