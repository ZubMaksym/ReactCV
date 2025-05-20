import { type DescriptionSkillsProps } from "../../../../../types/types"
import styles from "../sharedStyles/DescriptionContent.module.scss"
import classNames from "classnames"

export default function DescriptionSkills({ skills }: DescriptionSkillsProps) {
    return (
        <div className={classNames(styles.DescriptionContent)}>
            <ul>
                {skills.map((skill) => (
                    <li>{skill}</li>
                ))}
            </ul>
        </div>
    )
}