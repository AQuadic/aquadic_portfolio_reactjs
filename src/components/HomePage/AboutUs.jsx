import { useState } from "react";

import aboutus from '@/assets/images/aboutusImage.webp'
const AboutUs = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <section className="contaienr">
            <h1 className="text-[#121212] text-[32px] flex justify-center">About Us</h1>
            <div className='flex md:flex-row flex-col md:gap-[88px]'>
                <img src={aboutus} className='md:w-[475px] md:h-[475px]' alt="Image" />
                <div>
                    <h1 className='md:text-[56px] text-2xl font-bold md:leading-[78.4px] mt-4 md:mt-0'>
                        <span className='text-brandColor'>&quot;</span>
                        Shaping the <span className='text-brandColor'>Future</span> with Technology and Design
                        <span className='text-brandColor'>&quot;</span>
                    </h1>
                    <div className="md:w-[637px] md:text-[26px] text-xl text-[#5D5D5D] md:leading-[41.6px] md:mt-6 mt-4">
                        <p> At AQuadic, we specialize in delivering innovative software and design-driven solutions that help startups and businesses thrive. Our team works closely with clients to bring their ideas to life...
                            {!isExpanded && (
                                <span className="text-brandColor cursor-pointer ml-2" onClick={() => setIsExpanded(true)}>Learn More</span>
                            )}
                        </p>
                        {isExpanded && (
                            <div>
                                <p>At AQuadic, we specialize in delivering innovative software and design-driven solutions that help startups and businesses thrive. Our team works closely with clients to bring their ideas to life...
                                    <span className="text-brandColor cursor-pointer mt-2" onClick={() => setIsExpanded(false)}>Show Less</span>
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center justify-center md:gap-[152px] gap-20 mt-6">
                        <div>
                            <p className="text-brandColor font-bold text-[40px]">+27</p>
                            <p className="text-[#121212] text-xl leading-5 font-semibold">Project</p>
                        </div>
                        <div>
                            <p className="text-brandColor font-bold text-[40px]">+5</p>
                            <p className="text-[#121212] text-xl leading-5 font-semibold">Client</p>
                        </div>
                        <div>
                            <p className="text-brandColor font-bold text-[40px]">+12</p>
                            <p className="text-[#121212] text-xl leading-5 font-semibold">Countries</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
