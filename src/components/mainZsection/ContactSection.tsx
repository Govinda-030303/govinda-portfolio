import github from "../../assets/icons/githubIcon.png";
import linkedin from "../../assets/icons/linkedIcon.png";
import mail from "../../assets/icons/mailIcon.png";

const ContactSection = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "developer@example.com",
      href: "mailto:developer@example.com",
    },
    {
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: github, label: "GitHub", href: "https://github.com" },
    { icon: linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: mail, label: "Email", href: "mailto:developer@example.com" },
  ];

  return (
    <section id="contact" className="relative px-6 py-24 overflow-hidden min-h-screen">
      {/* Soft background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-150 h-150 bg-[#14b8a5]/20 blur-[120px] rounded-full" />
      </div>

      {/* Heading */}
      <div className="text-center mb-20 animate-fade-up">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Let’s <span className="text-[#14b8a5]">Connect</span>
        </h1>
        <p className="max-w-xl mx-auto text-gray-500 text-lg">
          Have a project idea, collaboration, or just want to say hi? I’d love to hear from you.
        </p>
      </div>

      {/* Main Card */}
      <div
        className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10 p-10 rounded-3xl
                   bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl
                   animate-fade-up"
      >
        {/* Form */}
        <form className="lg:col-span-2 flex flex-col gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/80
                           focus:outline-none focus:ring-2 focus:ring-[#14b8a5]/40"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/80
                           focus:outline-none focus:ring-2 focus:ring-[#14b8a5]/40"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Subject</label>
            <input
              type="text"
              placeholder="Project inquiry"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/80
                         focus:outline-none focus:ring-2 focus:ring-[#14b8a5]/40"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/80
                         focus:outline-none focus:ring-2 focus:ring-[#14b8a5]/40"
            />
          </div>

          <button
            type="submit"
            className="w-fit px-10 py-3 rounded-full bg-[#14b8a5] text-white font-medium
                       hover:bg-[#0f766e]
                       hover:shadow-[0_0_25px_rgba(20,184,165,0.45)]
                       active:scale-95 transition"
          >
            Send Message
          </button>
        </form>

        {/* Right Panel */}
        <div className="flex flex-col justify-between gap-10">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-[#14b8a5] mb-5">Contact Information</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li
                  key={index}
                  className="p-4 rounded-2xl border border-gray-200 bg-[#14b8a5]/5
                             hover:bg-[#14b8a5]/10 hover:-translate-y-0.5 transition"
                >
                  <p className="text-xs uppercase tracking-wide text-gray-500">{info.label}</p>
                  <a
                    href={info.href}
                    className="text-gray-800 font-medium hover:text-[#14b8a5]"
                  >
                    {info.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xl font-semibold text-[#14b8a5] mb-4">Find Me Online</h3>
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

                  </div>
      </div>

      {/* Freelance Highlight */}
      <div className="max-w-4xl mx-auto mt-16 animate-fade-up">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6
                        p-6 rounded-3xl
                        bg-linear-to-r from-[#1fe8d0] to-[#94f1e7]
                        shadow-[0_0_40px_rgba(20,184,165,0.35)]">
          <div>
            <h3 className="text-xl font-semibold mb-1">Available for Freelance</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Open to freelance projects & consulting. Let’s build something impactful together.
            </p>
          </div>
          <button
            type="button"
            className="px-7 py-3 rounded-full bg-white/80 backdrop-blur
                       border border-[#0f766e]/40 text-sm font-medium text-[#0f766e]
                       hover:bg-white hover:shadow-[0_0_20px_rgba(20,184,165,0.4)]
                       active:scale-95 transition"
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
