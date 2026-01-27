const Footer = () => {
  return (
    <footer className="text-gray-600 px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto gap-10">
        
        {/* Left section */}
        <div className="md:w-1/3">
          <h3 className="text-xl font-bold text-[#14b8a5] mb-2">Govinda Bitlani</h3>
          <p className="text-sm leading-relaxed mb-4">
            Full-stack developer specializing in building exceptional digital experiences with modern technologies.
          </p>
          <div className="flex space-x-4">
            {/* Social icons placeholders */}
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-[#14b8a5]/40 hover:bg-[#14b8a5]/20 transition">
              {/* LinkedIn Icon */}
              <span className="text-[#14b8a5]">in</span>
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-[#14b8a5]/40 hover:bg-[#14b8a5]/20 transition">
              {/* GitHub Icon */}
              <span className="text-[#14b8a5]">GH</span>
            </a>
            <a href="mailto:yourmail@example.com" className="w-8 h-8 flex items-center justify-center rounded-full border border-[#14b8a5]/40 hover:bg-[#14b8a5]/20 transition">
              {/* Mail Icon */}
              <span className="text-[#14b8a5]">@</span>
            </a>
          </div>
        </div>

        {/* Center section */}
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold text-[#14b8a5] mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {["About", "Skills", "Projects", "Contact"].map((link) => (
              <li
                key={link}
                className="relative cursor-pointer hover:text-[#14b8a5] transition duration-300 group"
              >
                {link}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#14b8a5] transition-all duration-300 group-hover:w-16"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right section */}
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold text-[#14b8a5] mb-3">Services</h3>
          <ul className="space-y-2">
            <li>Full-Stack Development</li>
            <li>Mobile App Development</li>
            <li>AI Integration</li>
            <li>Technical Consulting</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 text-center text-sm text-gray-400">
        <p>Made with ❤️ by a passionate developer</p>
        <p>© 2026 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;