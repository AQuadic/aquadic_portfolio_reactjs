import PagesHeader from "@/components/general/PagesHeader"
import TeamCards from "@/components/Team/TeamCards"
const Team = () => {
    return (
        <div>
            <PagesHeader
                header="Work with the best technical talent"
                title="Our teams are built of top talent from managers, designers, web developers and mobile developers who deliver projects on time and maintain the highest development standards."
            />
            <TeamCards />
        </div>
    )
}

export default Team
