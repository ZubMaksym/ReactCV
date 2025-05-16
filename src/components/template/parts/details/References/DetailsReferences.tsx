import classNames from "classnames"
import { type DetailsReferencesProps } from "../../../../../types/types"
import styles from "./DetailsReferences.module.scss"

export default function DetailsReferences({references}: DetailsReferencesProps){
    return(
        <div className={classNames(styles.DetailsReferences)}>
            <div>
                GitHub:
            </div>
            <div>
                <a href={references} target="_blank">
                    {references}
                </a>
            </div>
        </div>
    )
}