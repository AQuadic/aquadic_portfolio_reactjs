import PagesHeader from "@/components/general/PagesHeader"
import SoftwareTesting from "@/components/Services/SoftwareTesting"

const Testing = () => {
    return (
        <div>
            <PagesHeader
                header="Software Testing"
                title="Software testing is the process of evaluating software to identify defects and ensure it performs as expected. It helps improve software quality and reliability and is carried out using various techniques and tools by dedicated testers."
            />
            <SoftwareTesting />
        </div>
    )
}

export default Testing
