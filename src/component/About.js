import "./About.css";
import tech from "../Image/tech.png";
export default function About (){
    return(
        <div id="about">
            <p className="about-title">About</p>
            <hr></hr>
            <div className="about-container">
            <div className="about-image-container">
                <img src={tech} alt="img" className="about-image" />
            </div>
            <div className="about-image-container">
                <p className="about-text">TechCorp Technology company is a company that focuses primarily on the manufacturing, support, research and development of — most commonly computing, telecommunication and consumer electronics-based — technology-intensive products and services, which include businesses relating to digital electronics.</p>
            </div>
            </div>

        </div>
    )
}