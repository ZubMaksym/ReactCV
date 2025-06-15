import classNames from "classnames"
import data from "../../../../../data.json"
import styles from "./DetailsHeading.module.scss"

export default function DetailsHeading(){
    return(
        <div className={classNames(styles.detailsHeading)}>
            <h1>{data.name.first}<span>{data.name.last}</span></h1>
            <h5>{data.field}</h5>
        </div>
    )
}