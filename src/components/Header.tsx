import { useState } from "react";

const Header = () => {

  const [isHamOpen, setHamOpen] = useState(false);
  const navItems = ["About", "Skills", "Projects", "Contacts"]

  return (
    <header className="w-full rounded-4xl px-8 py-4 fixed z-50
  backdrop-blur-xl
  bg-white
  border-t
  border-white/30
  shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">

        {/* Left side - Logo/Name */}
        <div>
          <p className="text-xl font-bold text-[#14b8a5] tracking-wide">
            &lt;GB.&gt;
          </p>
        </div>

        {/* Right side - Nav items  for desktop */}
        <div className="md:flex items-center space-x-6 hidden">
          <ul className="flex space-x-6 text-gray-600 font-medium">
            {navItems.map((item) => (
              <li
                key={item}
                className="relative cursor-pointer hover:text-[#14b8a5] transition duration-300 group"
              >
                <a href={`#${item.toLowerCase()}`} >

                {item}
                </a>
                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#14b8a5] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
        {/* mobile hamburger */}
        <div className="md:hidden">
          <div className="md:hidden ml-4 flex flex-col space-y-1.5" onClick={() => setHamOpen(!isHamOpen)}>
            <span className="w-6 h-0.5 bg-gray-700"></span>
            <span className="w-6 h-0.5 bg-gray-700"></span>
            <span className="w-6 h-0.5 bg-gray-700"></span>
          </div>
        </div>
        {isHamOpen &&
          <div className="md:hidden border-t backdrop-blur-xl rounded-b-3xl bg-white absolute top-full left-0 right-0 w-full  overflow-hidden animate-in slide-in-from-top-5 fade-in duration-200">
            <ul className="flex flex-col py-4 px-6 space-y-4 text-center">
              {navItems.map((item) => (
                <li
                  key={item}
                  className="text-black font-medium hover:text-[#14b8a5] transition-colors duration-200"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setHamOpen(false)}
                    className="block w-full py-2"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        }

      </nav>
    </header>
  );
};

export default Header;