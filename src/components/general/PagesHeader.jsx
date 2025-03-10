// eslint-disable-next-line react/prop-types
const PagesHeader = ({ fheader, sheader, title }) => {
    return (
        <section className="container flex flex-col items-center justify-center text-center pt-10">
            <h1 className="text-brandColor md:text-5xl text-3xl font-semibold md:leading-[48px] flex rtl:flex-row-reverse"> {fheader} <span className="text-[#121212]"> &nbsp;{sheader} </span></h1>
            <p className="text-[#5D5D5D] text-2xl font-medium leading-[38.4px] mt-8">{title}</p>
        </section>
    )
}

export default PagesHeader
