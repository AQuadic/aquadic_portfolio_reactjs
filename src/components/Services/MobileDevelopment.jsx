import Services from "../general/Services"
import android from "../../assets/images/android.svg"
import ios from "../../assets/images/ios.svg"
import userFriendly from "../../assets/images/userFriendly.svg"
import testing from '../../assets/images/testing.svg'
import quality from '../../assets/images/quality.svg'
import scalable from '../../assets/images/scalable.svg'
import pinkBG from '../../assets/images/pinkBG.webp'
import Projects from "../general/Projects"
import { useInView } from "react-intersection-observer";
import AnimateOnScroll from "@/components/general/AnimateOnScroll.jsx";

const MobDevelopment = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-300px 0px",
    });
    return (
        <section ref={ref} className="container mt-[72px] mb-[120px]">
            <AnimateOnScroll inView={inView} direction={"rightToLeft"}>
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
                    <Services
                        image={android}
                        title="Android"
                        paragraph="Building Android apps using Gradle building tool and Android Studio, for different devices and screen sizes."
                    />
                    <Services
                        image={ios}
                        title="iOS"
                        paragraph="Building iOS apps using Swift programming language, for both iPhone and iPad."
                    />
                    <Services
                        image={scalable}
                        title="DevOps"
                        paragraph="Continuous integration for the project life cycle, starting from development and ending with automatic store submission."
                    />
                    <Services
                        image={userFriendly}
                        title="User-Friendly Designs"
                        paragraph="Using the latest platform specific guidelines and trends, we develop professional apps that are not only easy on the eyes but also easy to use."
                    />
                    <Services
                        image={quality}
                        title="Quality"
                        paragraph="Our mobile apps pass through different types of testing: functional testing, compatibility testing, security testing and UI testing."
                    />
                    <Services
                        image={testing}
                        title="Testing on Different"
                        paragraph="We test our applications on different devices, using manual testing and automated testing to deliver high-quality apps."
                    />
                </div>
            </AnimateOnScroll>

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
        </section>
    )
}

export default MobDevelopment
