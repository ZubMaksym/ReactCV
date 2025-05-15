import "../styles/styles.scss"
import { type JSONDetailsSection } from "../types/types"

export default function DetailsProjectsHeading({heading, years}: JSONDetailsSection){
    return(
        <div className="details-projects-heading">
            <h4>{heading}</h4>
            <div>{years}</div>
        </div>
    )
}