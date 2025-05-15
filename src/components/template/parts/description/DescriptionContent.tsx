import { type DescriptionContentProps } from "../../../../types/types"
import styles from "./styles/DescriptionContent.module.scss"
import classNames from "classnames"

export default function DescriptionContent({ value }: DescriptionContentProps) {
    return (
        <p className={classNames(styles.DescriptionContent)}>
            {value}
        </p>
    )
}