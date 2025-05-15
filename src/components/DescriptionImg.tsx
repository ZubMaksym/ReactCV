import img from "../assets/1.jpg"
import "../styles/styles.scss"

export default function DescriptionImg(){
    return(
        <div className="description-img">
            <img src={img} alt="image not found" />
        </div>
    )
}