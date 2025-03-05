import { NavLink } from "react-router";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import arrow from "@/assets/images/down_arrow.svg";
import logo from "@/assets/images/logo.svg";
import lang from "@/assets/images/lang.svg";
import toggle from "@/assets/images/toggle.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav className="container z-10 relative h-[100px] py-8 mb-8">
        <div className="flex items-center justify-between mx-auto md:px-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <button className="md:hidden flex" onClick={toggleSidebar}>
              <img src={toggle} className="w-6 h-6" alt="Menu Icon" />
            </button>
            <NavLink to="/">
              <img src={logo} alt="Logo" />
            </NavLink>
          </div>
          <div
            className={`fixed inset-y-0 ${isSidebarOpen ? "left-0" : "-left-full"} bg-white w-64 md:hidden z-50 transition-all duration-300 ease-in-out`}
          >
            <div className="flex items-center justify-between px-5">
              <p onClick={toggleSidebar} className="relative top-0 left-48">
                x
              </p>
            </div>
            <div className="flex flex-col gap-5 font-normal text-lg rtl:space-x-reverse">
              <NavLink
                to="/"
                className="block py-1 px-4 md:p-0 text-xs text-[#1E1E1E] transform hover:text-brandColor hover:underline transition-all duration-300"
                aria-current="page"
              >
                asmaa
              </NavLink>
              <NavLink
                to="/whoWeAre"
                className="block py-1 px-4 md:p-0 text-xs text-[#1E1E1E] transform hover:text-brandColor hover:underline transition-all duration-300"
              >
                asmaa
              </NavLink>
              <NavLink
                to="/contactUs"
                className="block py-1 px-4 md:p-0 text-xs text-[#1E1E1E] transform hover:text-brandColor hover:underline transition-all duration-300"
              >
                asmaa
              </NavLink>
              <NavLink
                to="/faqs"
                className="block py-1 px-4 md:p-0 text-xs text-[#1E1E1E] transform hover:text-brandColor hover:underline transition-all duration-300"
              >
                asmaa
              </NavLink>
              <div className="h-px w-60 bg-[#EAEAEA] mx-auto"></div>
              <div className="px-4 flex gap-2">
                <div>
                  <p className="text-[#1E1E1E] text-xs">asmaa</p>
                  <button className="w-[113px] h-6 rounded-sm bg-brandColor text-white text-xs">
                    asmaa
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-language"
          >
            <ul className="flex flex-col gap-[59px] font-normal p-4 md:p-0 mt-4 text-lg rtl:space-x-reverse md:flex-row">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 px-3 md:p-0 text-[#121212] font-medium text-base transform  hover:text-brandColor hover:underline transition-all duration-300"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li
                className="flex items-center gap-1 relative"
                onClick={toggleDropdown}
              >
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    <p className="block py-2 px-3 md:p-0 text-[#121212] font-medium text-base transform  hover:text-brandColor hover:underline transition-all duration-300">
                      Company
                    </p>
                    <img src={arrow} alt="Arrow" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>
                      <ul>
                        <li className="mb-4">
                          <NavLink to='/aboutus' className='text-black text-base font-normal left-8'>About Us</NavLink>
                        </li>
                        <li className="mb-4">
                          <NavLink to='/team' className='text-black text-base font-normal left-8'>Team</NavLink>
                        </li>
                        <li className="mb-4">
                          <NavLink to='/process' className='text-black text-base font-normal left-8'>Process</NavLink>
                        </li>
                        <li className="mb-4">
                          <NavLink to='/flog' className='text-black text-base font-normal left-8'>Flog</NavLink>
                        </li>
                        <li className="mb-4">
                          <NavLink to='/portfolio' className='text-black text-base font-normal left-8'>Portfolio</NavLink>
                        </li>
                        <li className="mb-4">
                          <NavLink to='/joinus' className='text-black text-base font-normal left-8'>Join Us</NavLink>
                        </li>
                        <li className="mb-4">
                          <NavLink to='/contactus' className='text-black text-base font-normal left-8'>Contact Us</NavLink>
                        </li>
                      </ul>
                    </DropdownMenuLabel>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>

              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    <p className="block py-2 px-3 md:p-0 text-[#121212] font-medium text-base transform  hover:text-brandColor hover:underline transition-all duration-300">
                      Services
                    </p>
                    <img src={arrow} alt="Arrow" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    <DropdownMenuLabel>
                      <ul>
                        <li className="mb-4">
                          <NavLink to='/webdev' className='text-black text-xl font-normal left-8'>Web Development</NavLink>
                        </li>
                        <li className="mb-4">
                          <NavLink to='/mobiledesign' className='text-black text-xl font-normal left-8'>Mobile App Design</NavLink>
                        </li>
                        <li className="mb-4">
                          <NavLink to='/webdesign' className='text-black text-xl font-normal left-8'>Web Design</NavLink>
                        </li>
                        <li className="mb-4">
                          <NavLink to='/mobiledev' className='text-black text-xl font-normal left-8'>Mobile App Development</NavLink>
                        </li>
                        <li className="mb-4">
                          <NavLink to='/testing' className='text-black text-xl font-normal left-8'>Software Testing</NavLink>
                        </li>
                      </ul>
                    </DropdownMenuLabel>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
                <NavLink
                  to="/contactUs"
                  className="block py-2 px-3 md:p-0 text-[#121212] font-medium text-base transform  hover:text-brandColor hover:underline transition-all duration-300"
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faqs"
                  className="block py-2 px-3 md:p-0 text-[#121212] font-medium text-base transform  hover:text-brandColor hover:underline transition-all duration-300"
                >
                  Flog
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="order-3 flex items-center gap-2">
            <img src={lang} alt="Language" />
            <p className="text-brandColor font-medium text-[28px]">العربية</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
