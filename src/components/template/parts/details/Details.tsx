import data from "../../../../data.json"
import DetailsHeading from "./DetailsHeading"
import DetailsSection from "./DetailsSection"
import DetailsProjectsHeading from "./DetailsProjectsHeading"
import DetailsProjectsContent from "./DetailsProjectsContent"
import DetailsReferences from "./DetailsReferences"
import DetailsEducation from "./DetailsEducation"
import styles from "./styles/Details.module.scss"
import classNames from "classnames"


export default function Details() {
    return (
        <div className={classNames(styles.Details)}>
            <DetailsHeading />
            <DetailsSection section="Project Experience">
                <DetailsProjectsHeading
                    heading={data.projects.YelpCamp.name}
                    years={data.projects.YelpCamp.years}
                />
                <DetailsProjectsContent
                    description={data.projects.YelpCamp.description}
                />
                <DetailsProjectsHeading
                    heading={data.projects.MuseumOfCandy.name}
                    years={data.projects.MuseumOfCandy.years}
                />
                <DetailsProjectsContent
                    description={data.projects.MuseumOfCandy.description}
                />
                <DetailsProjectsHeading
                    heading={data.projects.Arcanoid.name}
                    years={data.projects.Arcanoid.years}
                />
                <DetailsProjectsContent
                    description={data.projects.Arcanoid.description}
                />
            </DetailsSection>
            <DetailsSection section="Education And References">
                <DetailsEducation details={[data.education.details]}/>
                <DetailsReferences references={data.references.github} />
            </DetailsSection>
        </div>
    )
}