import githubIcon from "../../assets/icons/githubIcon.png";

const ProjectSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution featuring secure payment integration, real-time inventory management, and a responsive UI. Built with Spring Boot and React, handling thousands of transactions daily.",
      tags: ["Spring Boot", "React", "PostgreSQL", "Stripe API", "Redis"],
      features: [
        "Secure payment processing",
        "Real-time inventory tracking",
        "Advanced search & filtering",
        "Admin dashboard",
      ],
      github: "https://github.com/Govinda-030303",
      demo: "#",
    },
    {
      title: "Educational ERP System",
      description:
        "End-to-end ERP platform with dedicated modules for students, teachers, and administrators. Designed to streamline academic operations and improve communication.",
      tags: ["Java", "Spring Boot", "React", "TypeScript", "MySQL"],
      features: [
        "Role-based access control",
        "Automated attendance system",
        "Grade analytics dashboard",
        "Integrated messaging system",
      ],
      github: "https://github.com/Govinda-030303",
      demo: "#",
    },
    {
      title: "Healthcare Management System",
      description:
        "Modern healthcare application for managing patient records, appointments, and medical history with AI-powered analytics for predictive insights.",
      tags: ["Spring Boot", "React Native", "AI/ML", "MongoDB", "TensorFlow"],
      features: [
        "Electronic health records",
        "AI-powered diagnostics",
        "Appointment scheduling",
        "Prescription management",
      ],
      github: "https://github.com/Govinda-030303",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="px-6 py-20 text-gray-800 min-w-screen">
      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Featured <span className="text-[#14b8a5]">Projects</span>
        </h1>
        <p className="max-w-xl mx-auto text-gray-500 text-lg">
          Real-world applications showcasing scalable architecture, clean UI, and robust backend systems
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col p-6 rounded-2xl border border-gray-200 bg-white/60
                       hover:border-[#14b8a5]/50 hover:shadow-xl transition-all duration-300"
          >
            {/* Project Title */}
            <h3 className="text-xl font-semibold mb-2 group-hover:text-[#14b8a5] transition">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mb-5">
              <h4 className="text-xs font-semibold text-gray-400 uppercase mb-2">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-[#14b8a5]/10 text-[#14b8a5]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-gray-400 uppercase mb-2">
                Key Features
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#14b8a5]">▹</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="mt-auto flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg border
                           border-gray-300 text-gray-700 hover:text-[#14b8a5]
                           hover:border-[#14b8a5]/50 transition"
              >
                <img src={githubIcon} alt="GitHub" className="w-4 h-4" />
                Source Code
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm rounded-lg border
                           border-[#14b8a5]/40 text-[#14b8a5]
                           hover:bg-[#14b8a5]/10 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
