import { type JSONSkills } from "../types/types"
import "../styles/styles.scss"

export default function DescriptionSkills({skills}: JSONSkills){
    return(
        <div className="description-content">
            <ul>
                {skills.map((skill) => (
                    <li>{skill}</li>
                ))}
            </ul>
        </div>
    )
}