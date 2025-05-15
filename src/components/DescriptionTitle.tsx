import "../styles/styles.scss"
import DescriptionLine from "./DescriptionLine"

export default function DescriptionTitle({title}: any){
    return(
        <div>
            <h3 className="description-title">{title}</h3>
            <DescriptionLine/>
        </div>
    )
}