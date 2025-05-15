import {type JSONHeadingSection } from "../types/types"
import DetailsLine from "./DetailsLine"

export default function DetailsSection({section}: JSONHeadingSection){
    return(
        <div className="details-section">
            <h2>{section}</h2>
            <DetailsLine/>
        </div>
    )
}