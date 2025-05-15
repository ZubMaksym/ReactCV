import { type JSONDetailsReferences } from "../types/types"
import "../styles/styles.scss"

export default function DetailsReferences({references}: JSONDetailsReferences){
    return(
        <div className="details-references">
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