import "../styles/styles.scss"
import {type JSONDetailsDescription } from "../types/types"

export default function DetailsProjectsContent({description}: JSONDetailsDescription){
    return(
        <div className="details-projects-content">
            {description}
        </div>
    )
}