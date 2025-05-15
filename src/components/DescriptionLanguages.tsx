import {type JSONLanguages } from "../types/types"
import "../styles/styles.scss"

export default function DescriptionLanguage({languages}: JSONLanguages){
    return(
        <div className="description-content">
            <ul>
                {languages.map((language) => (
                    <li>{language}</li>
                ))}
            </ul>
        </div>
    )
}