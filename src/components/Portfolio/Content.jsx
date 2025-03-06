import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import pinkBG from '../../assets/images/pinkBG.webp'
import Projects from "../general/Projects"

const Content = () => {
    return (
        <section className="container">
            <h1 className="text-[#121212] md:text-[56px] text-3xl font-semibold flex justify-center"> <span className="text-brandColor"> Portfolio&nbsp;</span> Company</h1>
            <Tabs defaultValue="all" className="">
                <TabsList className="flex flex-wrap md:gap-4">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="booking">Booking</TabsTrigger>
                    <TabsTrigger value="Business">business</TabsTrigger>
                    <TabsTrigger value="medical">Medical</TabsTrigger>
                    <TabsTrigger value="e-ommerce">E-commerce</TabsTrigger>
                    <TabsTrigger value="islamic">Islamic</TabsTrigger>
                    <TabsTrigger value="crm">CRM</TabsTrigger>
                    <TabsTrigger value="hotel">Hotel</TabsTrigger>
                    <TabsTrigger value="carServices">Car Services</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="lg:!w-[1200px]">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10 mb-[120px]">
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
                </TabsContent>

                <TabsContent value="booking" className="lg:!w-[1200px]">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10 mb-[120px]">
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
                </TabsContent>
            </Tabs>
        </section>
    )
}

export default Content
