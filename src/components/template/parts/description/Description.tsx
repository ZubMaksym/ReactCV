import DescriptionTitle from "./DescriptionTitle"
import data from '../../../../data.json'
import DescriptionImg from "./DescriptionImg"
import DescriptionContent from "./DescriptionContent"
import DescriptionSkills from "./DescriptionSkills"
import DescriptionLanguage from "./DescriptionLanguages"
import styles from "./styles/Description.module.scss"
import classNames from "classnames"

export default function Description() {
    return (
        <div className={classNames(styles.Description)}>
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