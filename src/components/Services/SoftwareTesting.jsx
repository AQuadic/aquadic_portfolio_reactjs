import Services from "../general/Services"
import mobApp from '../../assets/images/mobApp.svg'
import quality from '../../assets/images/quality.svg'
import webTesting from '../../assets/images/webTesting.svg'
import usability from '../../assets/images/usability.svg'
import automation from '../../assets/images/automation.svg'
import performance from '../../assets/images/performance.svg'
import { useInView } from "react-intersection-observer";
import AnimateOnScroll from "@/components/general/AnimateOnScroll.jsx";

const SoftwareTesting = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-300px 0px",
    });
    return (
        <section ref={ref} className="container mt-[72px] mb-[120px]">
            <AnimateOnScroll inView={inView} direction={"leftToRight"}>
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
                    <Services
                        image={mobApp}
                        title="Mobile App Testing"
                        paragraph="Mobile application testing is a process by which application software developed for handheld mobile devices is tested for its functionality, usability, and consistency."
                    />
                    <Services
                        image={quality}
                        title="Functional Testing"
                        paragraph="Functional testing is a way of checking software to ensure that it has all the required functionality that's specified within its functional requirements."
                    />
                    <Services
                        image={webTesting}
                        title="Web Testing"
                        paragraph="Web application testing is a technique exclusively adopted to test the applications that are hosted on web in which the application interfaces and other functionalities are tested."
                    />
                    <Services
                        image={usability}
                        title="Usability Testing"
                        paragraph="Usability testing is a way to see how easy to use something is by testing it with real users. Users are asked to complete tasks, typically while they are being observed by a researcher, to see where they encounter problems and experience confusion."
                    />
                    <Services
                        image={automation}
                        title="Automation Testing"
                        paragraph="Automated software testing can increase the depth and scope of tests to help improve software quality, saving cost and time."
                    />
                    <Services
                        image={performance}
                        title="Performance Testing"
                        paragraph="In software engineering, performance testing is in general, a testing practice performed to determine how a system performs in terms of responsiveness and stability under a particular workload."
                    />
                </div>
            </AnimateOnScroll>
        </section>
    )
}

export default SoftwareTesting
