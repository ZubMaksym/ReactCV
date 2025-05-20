import classNames from "classnames"
import { type DescriptionLanguagesProps } from "../../../../../types/types"
import styles from "../sharedStyles/DescriptionContent.module.scss"

export default function DescriptionLanguage({ languages }: DescriptionLanguagesProps) {
    return (
        <div className={classNames(styles.DescriptionContent)}>
            <ul>
                {languages.map((language) => (
                    <li>{language}</li>
                ))}
            </ul>
        </div>
    )
}