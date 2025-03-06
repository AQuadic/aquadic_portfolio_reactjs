import Services from "../general/Services"
import performace from '../../assets/images/performace.svg'
import pinkBG from '../../assets/images/pinkBG.webp'
import Projects from "../general/Projects"

const MobDevelopment = () => {
    return (
        <section className="container my-[72px]">
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
                <Services
                    image={performace}
                    title="Android"
                    paragraph="Building Android apps using Gradle building tool and Android Studio, for different devices and screen sizes."
                />
                <Services
                    image={performace}
                    title="iOS"
                    paragraph="Building iOS apps using Swift programming language, for both iPhone and iPad."
                />
                <Services
                    image={performace}
                    title="DevOps"
                    paragraph="Continuous integration for the project life cycle, starting from development and ending with automatic store submission."
                />
                <Services
                    image={performace}
                    title="User-Friendly Designs"
                    paragraph="Using the latest platform specific guidelines and trends, we develop professional apps that are not only easy on the eyes but also easy to use."
                />
                <Services
                    image={performace}
                    title="Quality"
                    paragraph="Our mobile apps pass through different types of testing: functional testing, compatibility testing, security testing and UI testing."
                />
                <Services
                    image={performace}
                    title="Testing on Different"
                    paragraph="We test our applications on different devices, using manual testing and automated testing to deliver high-quality apps."
                />
            </div>

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
