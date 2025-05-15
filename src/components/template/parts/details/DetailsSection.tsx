import DetailsLine from "./DetailsLine"
import styles from "./styles/DetailsSection.module.scss"
import classNames from "classnames"
import {type DetailsSectionProps } from "../../../../types/types"

export default function DetailsSection({section, children}: DetailsSectionProps){
    return(
        <div className={classNames(styles.DetailsSection)}>
            <h2>{section}</h2>
            <DetailsLine/>
            {children}
        </div>
    )
}