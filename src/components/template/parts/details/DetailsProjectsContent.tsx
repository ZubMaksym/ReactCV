import {type DetailsProjectsContentProps } from "../../../../types/types"
import classNames from "classnames"
import styles from "./styles/DetailsProjectsContent.module.scss"

export default function DetailsProjectsContent({description}: DetailsProjectsContentProps){
    return(
        <div className={classNames(styles.DetailsProjectsContent)}>
            {description}
        </div>
    )
}