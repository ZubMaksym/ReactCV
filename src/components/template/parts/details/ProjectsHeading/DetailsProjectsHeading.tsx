import styles from "./DetailsProjectsHeading.module.scss"
import { type DetailsProjectsHeadingProps } from "../../../../../types/types"
import classNames from "classnames"

export default function DetailsProjectsHeading({heading, years}: DetailsProjectsHeadingProps){
    return(
        <div className={classNames(styles.DetailsProjectsHeading)}>
            <h4>{heading}</h4>
            <div>{years}</div>
        </div>
    )
}