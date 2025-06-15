import DescriptionTitle from "../Title/DescriptionTitle"
import data from '../../../../../data.json'
import DescriptionImg from "../Image/DescriptionImg"
import DescriptionContent from "../Content/DescriptionContent"
import DescriptionSkills from "../Skills/DescriptionSkills"
import DescriptionLanguage from "../Languages/DescriptionLanguages"
import styles from "./Description.module.scss"
import classNames from "classnames"

export default function Description() {
    return (
        <div className={classNames(styles.description)}>
            <DescriptionImg />
            <DescriptionTitle title="About Me" >
                <DescriptionContent value={data.aboutMe.about} />
            </DescriptionTitle>
            <DescriptionTitle title="Contact">
                <DescriptionContent value={data.aboutMe.phoneNumber} />
                <DescriptionContent value={data.aboutMe.email} />
                <DescriptionContent value={data.aboutMe.address} />
            </DescriptionTitle>
            <DescriptionTitle title="Skills">
                <DescriptionSkills skills={data.skills} />
            </DescriptionTitle>
            <DescriptionTitle title="Language">
                <DescriptionLanguage languages={data.languages} />
            </DescriptionTitle>
        </div>
    )
}