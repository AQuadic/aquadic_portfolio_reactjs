// eslint-disable-next-line react/prop-types
const PagesHeader = ({ header, title }) => {
    return (
        <section className="container flex flex-col items-center justify-center text-center py-10">
            <h1 className="text-[#121212] md:text-5xl text-3xl font-semibold md:leading-[48px]">{header}</h1>
            <p className="text-[#5D5D5D] text-2xl font-medium leading-[38.4px] mt-8">{title}</p>
        </section>
    )
}

export default PagesHeader
