
// eslint-disable-next-line react/prop-types
const Services = ({ image, title, paragraph }) => {
    return (
        <div>
            <img src={image} className="w-10 h-10 rounded-2xl" alt="Icon" />
            <h1 className="text-[#121212] font-bold text-4xl mt-4">{title}</h1>
            <p className="w-[373px] text-[#5D5D5D] font-medium text-2xl mt-4">{paragraph}</p>
        </div>
    )
}

export default Services
