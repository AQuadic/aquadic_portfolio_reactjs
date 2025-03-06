
// eslint-disable-next-line react/prop-types
const Projects = ({ image, title, type }) => {
    return (
        <div className="flex flex-col items-center mt-14">
            <img src={image} className="w-[389px] h-[317px] rounded-2xl" alt="Project Image" />
            <h2 className="text-[#121212] text-[32px] font-semibold my-6">{title}</h2>
            <p className="text-[#5D5D5D] font-medium text-2xl">{type}</p>
        </div>
    )
}

export default Projects
