import classNames from "classnames"
import img from "../../../../../assets/1.jpg"
import styles from "./DescriptionImg.module.scss"

export default function DescriptionImg(){
    return(
        <div className={classNames(styles.DescriptionImg)}>
            <img src={img} alt="image not found" />
        </div>
    )
}