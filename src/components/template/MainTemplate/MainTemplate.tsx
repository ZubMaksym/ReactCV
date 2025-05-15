import classNames from "classnames"
import styles from "./MainTemplate.module.scss"
import Description from "../parts/description/Description"
import Details from "../parts/details/Details"

export default function MainTemplate(){
    return(
        <div className={classNames(styles.mainTemplate)}>
            <Description/>
            <Details/>
        </div>
    )
}