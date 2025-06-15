import {type DetailsProjectsContentProps } from "../../../../../types/types"
import classNames from "classnames"
import styles from "./DetailsProjectsContent.module.scss"

export default function DetailsProjectsContent({description}: DetailsProjectsContentProps){
    return(
        <div className={classNames(styles.detailsProjectsContent)}>
            {description}
        </div>
    )
}