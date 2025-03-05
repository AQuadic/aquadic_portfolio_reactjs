import img from '@/assets/images/testimonials.webp'
import Card from "../constants/Home/Card";
const Testimonials = () => {
    return (
        <section className="container md:py-[120px]">
            <h1 className="text-[#121212] md:text-[32px] text-lg flex justify-center md:leading-8">Testimonials</h1>
            <h2 className="text-[#121212] md:text-[56px] text-2xl font-bold flex justify-center md:leading-[56px] md:mt-6"><span className="text-brandColor">Hear&nbsp;</span> From Us </h2>
            <div className="mt-12 grid lg:grid-cols-2 grid-cols-1 gap-4">
                <Card
                    text1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever..."
                    text2="At AQuadic, we specialize in delivering innovative software and design-driven solutions that help startups and businesses thrive. Our team works closely with clients to bring their ideas to life..."
                    imgSrc={img}
                    rating="8.9"
                />

                <Card
                    text1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever..."
                    text2="At AQuadic, we specialize in delivering innovative software and design-driven solutions that help startups and businesses thrive. Our team works closely with clients to bring their ideas to life..."
                    imgSrc={img}
                    rating="8.9"
                />

                <Card
                    text1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever..."
                    text2="At AQuadic, we specialize in delivering innovative software and design-driven solutions that help startups and businesses thrive. Our team works closely with clients to bring their ideas to life..."
                    imgSrc={img}
                    rating="8.9"
                />

                <Card
                    text1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever..."
                    text2="At AQuadic, we specialize in delivering innovative software and design-driven solutions that help startups and businesses thrive. Our team works closely with clients to bring their ideas to life..."
                    imgSrc={img}
                    rating="8.9"
                />
            </div>
        </section>
    )
}

export default Testimonials
