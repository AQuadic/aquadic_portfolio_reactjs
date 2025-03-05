import TeamData from '@/constants/Team/TeamData'
import teammember from '@/assets/images/teammember.webp'
const TeamCard = () => {
    const leadData = [
        {
            image: teammember,
            name: "Hassan Hamdy",
            position: "CEO",
        },
        {
            image: teammember,
            name: "Seif Allah Khaled",
            position: "CTO",
        },
        {
            image: teammember,
            name: "Islam Al-Faqi",
            position: "Team Lead Flutter",
        }
    ];

    const designersData = [
        {
            image: teammember,
            name: "Jiana Sakr",
            position: "Team Lead UI/UX Design",
        },
        {
            image: teammember,
            name: "Youssef Mohamed",
            position: "Mid Level UI/UX Design",
        },
        {
            image: teammember,
            name: "Alaa Khamis",
            position: "Fresh UI/UX Design",
        },
        {
            image: teammember,
            name: "Fahed Nafez",
            position: "Graphic Design",
        },
    ];

    const flutterData = [
        {
            image: teammember,
            name: "Ahmed Ali",
            position: "Senior Flutter",
        },
        {
            image: teammember,
            name: "Asmaa Magdy",
            position: "Junior Flutter",
        },
    ];

    const backendData = [
        {
            image: teammember,
            name: "Mohamed Galal",
            position: "Mid Level Backend Development",
        },
        {
            image: teammember,
            name: "Mohamed Amr",
            position: "Junior Backend Development",
        },
        {
            image: teammember,
            name: "Sherif Hamdy",
            position: "Junior Backend Development",
        },
    ];

    const frontendData = [
        {
            image: teammember,
            name: "Ahmed Abozaid",
            position: "Head Frontend",
        },
        {
            image: teammember,
            name: "Asmaa Elbanna",
            position: "Junior Frontend",
        },
    ];

    const testersData = [
        {
            image: teammember,
            name: "Salma Nasr",
            position: "Team Lead Testing",
        },
        {
            image: teammember,
            name: "Ahmed Gomaa",
            position: "Mid Level Tester",
        },
    ];

    return (
        <section className='container flex flex-col items-center md:items-start md:py-[72px]'>

            <h2 className="text-[#121212] font-semibold md:text-5xl text-2xl md:leading-[48px]">Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-8 md:mt-[91px] mt-10">
                {leadData.map((item, index) => (
                    <TeamData
                        key={index}
                        image={item.image}
                        name={item.name}
                        position={item.position}
                    />
                ))}
            </div>

            <div className='mt-[72px]'>
                <h2 className='text-[#121212] font-semibold text-5xl leading-[48px]'>Meet our team</h2>
                <p className='md:w-[763px] text-[#5D5D5D] text-2xl font-medium leading-[38.4px] mt-6'>We have assembled our AQuadic team of top talent from professionals in the fields of design, web development and mobile development.</p>
            </div>

            <h2 className="text-brandColor font-semibold md:text-5xl text-2xl md:leading-[48px] mt-[72px]">Designer Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-8 mt-6">
                {designersData.map((item, index) => (
                    <TeamData
                        key={index}
                        image={item.image}
                        name={item.name}
                        position={item.position}
                    />
                ))}
            </div>

            <h2 className="text-brandColor font-semibold md:text-5xl text-2xl md:leading-[48px] mt-[72px]">Flutter Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-8 mt-6">
                {flutterData.map((item, index) => (
                    <TeamData
                        key={index}
                        image={item.image}
                        name={item.name}
                        position={item.position}
                    />
                ))}
            </div>

            <h2 className="text-brandColor font-semibold md:text-5xl text-2xl md:leading-[48px] mt-[72px]">Backend Development Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-8 mt-6">
                {backendData.map((item, index) => (
                    <TeamData
                        key={index}
                        image={item.image}
                        name={item.name}
                        position={item.position}
                    />
                ))}
            </div>

            <h2 className="text-brandColor font-semibold md:text-5xl text-2xl md:leading-[48px] mt-[72px]">Frontend Development Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-8 mt-6">
                {frontendData.map((item, index) => (
                    <TeamData
                        key={index}
                        image={item.image}
                        name={item.name}
                        position={item.position}
                    />
                ))}
            </div>

            <h2 className="text-brandColor font-semibold md:text-5xl text-2xl md:leading-[48px] mt-[72px]">Tester Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-8 mt-6">
                {testersData.map((item, index) => (
                    <TeamData
                        key={index}
                        image={item.image}
                        name={item.name}
                        position={item.position}
                    />
                ))}
            </div>
        </section>
    );
};

export default TeamCard;
