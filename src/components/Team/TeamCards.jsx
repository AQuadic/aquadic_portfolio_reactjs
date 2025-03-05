import TeamData from '@/constants/Team/TeamData'
import teammember from '@/assets/images/teammember.webp'
const TeamCard = () => {
    const cardData = [
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
        },
    ];

    return (
        <section className='container pt-[72px]'>
            <h2 className="text-[#121212] font-semibold text-5xl leading-[48px]">Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">

                {cardData.map((item, index) => (
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
