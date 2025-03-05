import logo from '@/assets/images/logo.svg'
import facebook from '@/assets/images/facebook.svg'
import linkedin from '@/assets/images/linkedin.svg'
import Be from '@/assets/images/Be.svg'
import instagram from '@/assets/images/instagram.svg'
import X from '@/assets/images/X.svg'
import phone from '@/assets/images/footerPhone.svg'
import email from '@/assets/images/footerEmail.svg'
import location from '@/assets/images/footerLoc.svg'
import { Link, NavLink } from 'react-router'
const Footer = () => {
  return (
    <footer className="">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to='/' className="flex items-center">
              <img src={logo} className='w-[183px] h-[55px]' alt="Logo" />
            </Link>
            <p className='w-[377px] mt-8 text-[#121212] text-xl leading-8'>Hire top web & mobile developers for your short-term and long-term projects, from MVPs to a completed solution.</p>
            <div className='mt-12'>
              <p className='text-[#121212] text-[28px] leading-[28px] font-medium'>Follow Us</p>
              <div className='flex gap-2 mt-6'>
                <NavLink to='/'><img src={facebook} alt="Facebook" /></NavLink>
                <NavLink to='/'><img src={linkedin} alt="LinkedIn" /></NavLink>
                <NavLink to='/'><img src={Be} alt="Be" /></NavLink>
                <NavLink to='/'><img src={instagram} alt="Instagram" /></NavLink>
                <NavLink to='/'><img src={X} alt="X" /></NavLink>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2  sm:gap-6 lg:grid-cols-3">
            <div>
              <h2 className="mb-6 text-[28px] font-semibold text-black">Company</h2>
              <ul>
                <li className="mb-4">
                  <NavLink to='/aboutus' className='text-black text-base left-8'>About Us</NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to='/team' className='text-black text-base left-8'>Team</NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to='/process' className='text-black text-base left-8'>Process</NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to='/flog' className='text-black text-base left-8'>Flog</NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to='/portfolio' className='text-black text-base left-8'>Portfolio</NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to='/joinus' className='text-black text-base left-8'>Join Us</NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to='/contactus' className='text-black text-base left-8'>Contact Us</NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-[28px] font-semibold text-black">Services</h2>
              <ul>
                <li className="mb-4">
                  <NavLink to='/webdev' className='text-black text-xl left-8'>Web Development</NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to='/mobiledesign' className='text-black text-xl left-8'>Mobile App Design</NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to='/webdesign' className='text-black text-xl left-8'>Web Design</NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to='/mobiledev' className='text-black text-xl left-8'>Mobile App Development</NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to='/testing' className='text-black text-xl left-8'>Software Testing</NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-[28px] font-semibold text-black">Contact Us</h2>
              <ul >
                <li className="mb-4 flex items-center gap-4">
                  <img src={phone} alt="Phone" />
                  <p className='text-black text-xl left-8'>(+20) 110 178 2890</p>
                </li>
                <li className="mb-4 flex items-center gap-4">
                  <img src={email} alt="Email" />
                  <p className='text-black text-xl left-8'>hello@aquadic.com</p>
                </li>
                <li className="mb-4 flex items-center gap-4">
                  <img src={location} alt="Location" />
                  <p className='text-black text-xl left-8'>Zizinia, Alexandria, Egypt</p>
                </li>
                <li>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer
