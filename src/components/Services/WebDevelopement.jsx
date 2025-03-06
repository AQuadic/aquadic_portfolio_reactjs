import Services from "../general/Services"
import performace from '../../assets/images/performace.svg'
import quality from '../../assets/images/quality.svg'
import scalable from '../../assets/images/scalable.svg'
import business from '../../assets/images/business.svg'
import ecommerce from '../../assets/images/ecommerce.svg'
import support from '../../assets/images/support.svg'
import pinkBG from '../../assets/images/pinkBG.webp'
import { useInView } from "react-intersection-observer";
import AnimateOnScroll from "@/components/general/AnimateOnScroll.jsx";

import Projects from "../general/Projects"
const WebDevelopement = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-300px 0px",
    });
    return (
        <section ref={ref} className="container mt-[72px] mb-[120px]">
            <AnimateOnScroll inView={inView} direction={"leftToRight"}>
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
                    <Services
                        image={performace}
                        title="Performance"
                        paragraph="We are using the latest technologies either in web design or in web development to provide the best performance for our delivered web applications."
                    />
                    <Services
                        image={quality}
                        title="Quality"
                        paragraph="Our web applications are passing through different types of testing: functional testing, integration testing, security testing and load testing."
                    />
                    <Services
                        image={scalable}
                        title="Scalable Applications"
                        paragraph="We care about software architecture and different types of optimizations to deliver scalable applications in terms of functionality and number of concurrent users."
                    />
                    <Services
                        image={business}
                        title="Business Applications"
                        paragraph="AQuadic has developed a large number of web-based web applications that serve different scales of an organization starting from small companies to enterprises"
                    />
                    <Services
                        image={ecommerce}
                        title="E-Commerce"
                        paragraph="AQuadic successfully delivered many e-commerce websites on different platforms."
                    />
                    <Services
                        image={support}
                        title="Support"
                        paragraph="Our job doesn’t end by delivering the application but it continues after delivery to support the web application with a very high response and professional support team."
                    />
                </div>
            </AnimateOnScroll>

            <AnimateOnScroll inView={inView} direction={"rightToLeft"}>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-14">
                    <Projects
                        image={pinkBG}
                        title='MS Player'
                        type='Media / Social'
                    />
                    <Projects
                        image={pinkBG}
                        title='Fresh Farm'
                        type='E-commerce / Food'
                    />
                    <Projects
                        image={pinkBG}
                        title='Find Help'
                        type='Services'
                    />
                    <Projects
                        image={pinkBG}
                        title='Reaya'
                        type='Medical'
                    />
                    <Projects
                        image={pinkBG}
                        title='Mamulaat'
                        type='Books / Reading'
                    />
                    <Projects
                        image={pinkBG}
                        title='Spacey'
                        type='Services / Management'
                    />
                    <Projects
                        image={pinkBG}
                        title='Pharmacy'
                        type='E-commerce / Medical'
                    />
                    <Projects
                        image={pinkBG}
                        title='Al-Watania HR'
                        type='Services / HR'
                    />
                    <Projects
                        image={pinkBG}
                        title='Eshhaar'
                        type='E-commerce / Exchange'
                    />
                </div>
            </AnimateOnScroll>
        </section>
    )
}

export default WebDevelopement
