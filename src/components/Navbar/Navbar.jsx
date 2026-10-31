import React from "react";
import Logo from "../../assets/Logo.png";
const NavLinks = [
  {
    id: 1,
    title: "About",
    link: "#",
  },
  {
    id: 2,
    title: "Services",
    link: "#services",
  },
  {
    id: 3,
    title: "Project",
    link: "#project",
  },
  {
    id: 4,
    title: "Contact",
    link: "#contact",
  },
];
const Navbar = () => {
  return (
    <div className="container">
      <div className="flex justify-between items-center py-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="" className="w-10 h-10" />
          <h1 className="text-2xl font-bold ">Interior</h1>
        </div>
        {/* Links */}
        <div className="hidden mx-3 md:block">
          {NavLinks.map((link) => {
            return (
              <a
                key={link.id}
                href={link.link}
                className="inline-block mx-4 text-lg font-semibold"
              >
                {link.title}
              </a>
            );
          })}
        </div>
        {/* Button */}
        <div>
          <button
            className="text-sm font-semibold lg:text-base border-[1px] border-black px-4 py-2 shadow-[5px_5px_0px_0px] hover:bg-black hover:text-white duration-300 hover:shadow-[5px_5px_0px_0px_#6c6c6c];
"
          >
            Try For Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
