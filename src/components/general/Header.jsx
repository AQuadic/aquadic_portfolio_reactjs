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
import close from "@/assets/images/closeIcon.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleSidebar1 = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav className="container z-10 relative h-[100px] py-8 ">
        <div className="flex items-center justify-between gap-3 mx-auto">
          <div className="flex items-center  rtl:space-x-reverse">
            <button className="md:hidden flex" onClick={toggleSidebar1}>
              <img src={toggle} className="w-6 h-6" alt="Menu Icon" />
            </button>
            <NavLink to="/">
              <img className="max-sm:w-[130px]" src={logo} alt="Logo" />
            </NavLink>
          </div>
          <div
            className={`fixed inset-y-0 ${isSidebarOpen ? "left-0" : "-left-full"} bg-white w-64 md:hidden z-50 transition-all duration-300 ease-in-out`}
          >
            <div className="flex items-center justify-between px-5">
              <p onClick={toggleSidebar} className="relative top-4 left-48">
                <img src={close} alt="Close Icon" />
              </p>
            </div>
            <div className="flex flex-col gap-5 font-normal text-lg rtl:space-x-reverse mt-4">
              <ul className="flex flex-col gap-2 font-normal text-lg rtl:space-x-reverse md:flex-row">
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
                    <DropdownMenuContent className="w-56 mx-2">
                      <DropdownMenuLabel>
                        <ul>
                          <NavLink
                            to="aboutus"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>About Us</p>
                          </NavLink>
                          <NavLink
                            to="team"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>Team</p>
                          </NavLink>
                          <NavLink
                            to="process"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>Process</p>
                          </NavLink>
                          <NavLink
                            to="flog"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>Flog</p>
                          </NavLink>
                          <NavLink
                            to="portfolio"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>Portfolio</p>
                          </NavLink>
                          <NavLink
                            to="joinus"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>Join Us</p>
                          </NavLink>
                          <NavLink
                            to="contactus"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>Contact Us</p>
                          </NavLink>
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
                    <DropdownMenuContent className="w-full mx-2">
                      <DropdownMenuLabel>
                        <ul>
                          <NavLink
                            to="/webdev"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>Web Development</p>
                          </NavLink>
                          <NavLink
                            to="/mobiledesign"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>Mobile App Design</p>
                          </NavLink>
                          <NavLink
                            to="/webdesign"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>Web Design</p>
                          </NavLink>
                          <NavLink
                            to="/mobiledev"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>Mobile App Development</p>
                          </NavLink>
                          <NavLink
                            to="/testing"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>Software Testing</p>
                          </NavLink>
                        </ul>
                      </DropdownMenuLabel>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li>
                  <NavLink
                    to="/portfolio"
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
                        <NavLink
                          to="aboutus"
                          className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                        >
                          <p>About Us</p>
                        </NavLink>
                        <NavLink
                          to="team"
                          className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                        >
                          <p>Team</p>
                        </NavLink>
                        <NavLink
                          to="process"
                          className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                        >
                          <p>Process</p>
                        </NavLink>
                        <NavLink
                          to="flog"
                          className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                        >
                          <p>Flog</p>
                        </NavLink>
                        <NavLink
                          to="portfolio"
                          className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                        >
                          <p>Portfolio</p>
                        </NavLink>
                        <NavLink
                          to="joinus"
                          className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                        >
                          <p>Join Us</p>
                        </NavLink>
                        <NavLink
                          to="contactus"
                          className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                        >
                          <p>Contact Us</p>
                        </NavLink>
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
                        <NavLink
                          to="/webdev"
                          className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                        >
                          <p>Web Development</p>
                        </NavLink>
                        <NavLink
                          to="/mobiledesign"
                          className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                        >
                          <p>Mobile App Design</p>
                        </NavLink>
                        <NavLink
                          to="/webdesign"
                          className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                        >
                          <p>Web Design</p>
                        </NavLink>
                        <NavLink
                          to="/mobiledev"
                          className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                        >
                          <p>Mobile App Development</p>
                        </NavLink>
                        <NavLink
                          to="/testing"
                          className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                        >
                          <p>Software Testing</p>
                        </NavLink>
                      </ul>
                    </DropdownMenuLabel>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
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
            <p className="text-brandColor font-medium text-xl sm:text-[28px]">
              العربية
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
