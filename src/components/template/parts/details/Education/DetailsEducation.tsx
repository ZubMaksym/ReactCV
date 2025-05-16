import classNames from "classnames"
import { type DetailsEducationProps } from "../../../../../types/types"
import styles from "./DetailsEducation.module.scss"

export default function DetailsEducation({ details }: DetailsEducationProps) {
    return (
        <div className={classNames(styles.DetailsEducation)}>
            <div className={styles.university}>
                <div>{details[0].educationalInstitution}:</div>
            </div>
            <div className={styles.years}>
                {details[0].years}
            </div>
        </div>
    )
}