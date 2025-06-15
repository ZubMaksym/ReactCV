import DescriptionLine from "../Line/DescriptionLine"
import styles from "./DescriptionTitle.module.scss"
import classNames from "classnames"
import { type DescriptionTitleProps } from "../../../../../types/types"

export default function DescriptionTitle({ title, children }: DescriptionTitleProps) {
    return (
        <div>
            <h3 className={classNames(styles.descriptionTitle)}>{title}</h3>
            <DescriptionLine />
            {children}
        </div>
    )
}