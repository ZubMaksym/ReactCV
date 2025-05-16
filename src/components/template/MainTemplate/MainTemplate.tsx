import classNames from "classnames"
import styles from "./MainTemplate.module.scss"
import Description from "../parts/description/Description/Description"
import Details from "../parts/details/Details/Details"

export default function MainTemplate(){
    return(
        <div className={classNames(styles.mainTemplate)}>
            <Description/>
            <Details/>
        </div>
    )
}