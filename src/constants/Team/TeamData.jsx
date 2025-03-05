// eslint-disable-next-line react/prop-types
const Card = ({ image, name, position }) => {
    return (
        <div className="mt-[91px]">
            <div>
                <img src={image} alt={name} className="" />
                <p className="text-[#121212] font-semibold text-[44px] text-center mt-6">{name}</p>
                <p className="text-[#5D5D5D] font-medium text-2xl leading-6 text-center mt-6">{position}</p>
            </div>
        </div>
    );
};

export default Card;
