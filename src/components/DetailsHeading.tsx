import "../styles/styles.scss"
import data from "../data.json"

export default function DetailsHeading(){
    return(
        <div className="details-heading">
            <h1>{data.name.first}<span>{data.name.last}</span></h1>
            <h5>{data.field}</h5>
        </div>
    )
}