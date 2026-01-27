const Header = () => {
  return (
    <header className="w-full rounded-4xl px-8 py-4 fixed
  backdrop-blur-xl
  bg-white/20
  border-t
  border-white/30
  shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">

        {/* Left side - Logo/Name */}
        <div>
          <p className="text-xl font-bold text-[#14b8a5] tracking-wide">
            Govinda Bitlani
          </p>
        </div>

        {/* Right side - Nav items */}
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6 text-gray-600 font-medium">
            {["About", "Skills", "Projects", "Contacts"].map((item) => (
              <li
                key={item}
                className="relative cursor-pointer hover:text-[#14b8a5] transition duration-300 group"
              >
                {item}
                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#14b8a5] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Theme toggle placeholder */}
          <span className="ml-4 w-6 h-6 rounded-full border border-[#14b8a5]/40 hover:bg-[#14b8a5]/20 transition cursor-pointer"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;