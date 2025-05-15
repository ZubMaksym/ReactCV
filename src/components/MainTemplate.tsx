import "../styles/styles.scss"
import Description from "./Description"
import Details from "./Details"

export default function MainTemplate(){
    return(
        <div className="main-template">
            <Description/>
            <Details/>
        </div>
    )
}