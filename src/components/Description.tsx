import "../styles/styles.scss"
import DescriptionTitle from "./DescriptionTitle"
import data from '../data.json'
import DescriptionImg from "./DescriptionImg"
import DescriptionContent from "./DescriptionContent"
import DescriptionSkills from "./DescriptionSkills"
import DescriptionLanguage from "./DescriptionLanguages"

export default function Description() {
    return (
        <div className="description">
            <DescriptionImg />
            <DescriptionTitle title="About Me" />
            <DescriptionContent value={data.aboutMe.about} />
            <DescriptionTitle title="Contact" />
            <DescriptionContent value={data.aboutMe.phoneNumber} />
            <DescriptionContent value={data.aboutMe.email} />
            <DescriptionContent value={data.aboutMe.address} />
            <DescriptionTitle title="Skills" />
            <DescriptionSkills skills={data.skills}/>
            <DescriptionTitle title="Language"/>
            <DescriptionLanguage languages={data.languages}/>
        </div>
    )
}