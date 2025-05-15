import "../styles/styles.scss"
import { type JSONAboutAndContacts } from "../types/types"

export default function DescriptionContent({ value }: JSONAboutAndContacts) {
    return (
        <p className="description-content">
            {value}
        </p>
    )
}