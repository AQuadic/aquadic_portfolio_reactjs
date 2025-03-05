import contactBg from '../../assets/images/contactBG.webp'
import location from '../../assets/images/location.svg'
import phone from '../../assets/images/phone.svg'
import email from '../../assets/images/email.svg'
const ContactUs = () => {
    return (
        <section className="container md:py-[120px]">
            <h1 className="text-[#121212] md:text-[32px] text-lg flex justify-center md:leading-8">Contact Us</h1>
            <h2 className="text-[#121212] md:text-[56px] text-2xl font-bold flex justify-center md:leading-[56px] md:mt-6"><span className="text-brandColor">Connect with us&nbsp;</span>Today</h2>
            <div className='mt-12 flex lg:flex-row flex-col items-center lg:gap-[210px] gap-5'>
                <div>
                    <img src={contactBg} className='w-[547px] h-[366px]' alt="Placeholder" />
                    <div className='flex md:flex-row flex-col gap-[36px] mt-6'>
                        <div className='flex flex-col items-center md:gap-4'>
                            <img src={location} alt="Location" />
                            <p className='md:w-[176px] text-center text-[#5D5D5D] text-xl leading-[30px]'>Zizinia, Alexandria, Egypt</p>
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                            <img src={phone} alt="Phone" />
                            <p className='text-[#5D5D5D] text-xl leading-5'>(+20) 110 178 2890</p>
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                            <img src={email} alt="Email" />
                            <p className='text-[#5D5D5D] text-xl leading-5'>hello@aquadic.com</p>
                        </div>
                    </div>
                </div>
                <form className='flex flex-col items-center gap-4'>
                    <input type="text" name='name' className='sm:w-[421px] w-[350px] h-[58px] rounded-[10px] border border-[#A9A7A7] p-2 focus:outline-0 placeholder:text-[#5D5D5D] placeholder:font-medium placeholder:text-base' placeholder='Full Name' />
                    <input type="text" name='phone' className='sm:w-[421px] w-[350px] h-[58px] rounded-[10px] border border-[#A9A7A7] p-2 focus:outline-0 placeholder:text-[#5D5D5D] placeholder:font-medium placeholder:text-base' placeholder='Enter Phone Number' />
                    <input type="text" name='email' className='sm:w-[421px] w-[350px] h-[58px] rounded-[10px] border border-[#A9A7A7] p-2 focus:outline-0 placeholder:text-[#5D5D5D] placeholder:font-medium placeholder:text-base' placeholder='Enter Your E-mail' />
                    <input type="text" name='text' className='sm:w-[421px] w-[350px] h-[58px] rounded-[10px] border border-[#A9A7A7] p-2 focus:outline-0 placeholder:text-[#5D5D5D] placeholder:font-medium placeholder:text-base' placeholder='Subject' />
                    <input type="text" name='text' className='sm:w-[421px] w-[350px] h-[120px] rounded-[10px] border border-[#A9A7A7] p-2 focus:outline-0 placeholder:text-[#5D5D5D] placeholder:font-medium placeholder:text-base' placeholder='Message' />
                    <button className='w-[206px] h-14 bg-brandColor rounded-[50px] text-white text-base font-bold'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default ContactUs
