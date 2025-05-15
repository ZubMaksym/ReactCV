import { type JSONDetilsEducation } from "../types/types"
import "../styles/styles.scss"

export default function DetailsEducation({ university, years }: JSONDetilsEducation) {
    return (
        <div className="details-education">
            <div className="details-education-university">
                <div>{university}:</div>
            </div>
            <div className="details-education-years">
                {years}
            </div>
        </div>
    )
}