import "./Service.css";
import ntn from "../Image/ntn.jpg";
import elect from "../Image/elect.jpg";
import comput from "../Image/comput.jpeg";
export default function Service (){
    return(
        <div id="services">
            <p className="service-title">What We Are Into</p>
            <hr></hr>
            <div className="service-up">
                <figure className="up">
                <img src={ntn} alt="research" className="researchimage1" />
                <h3 className="service-heading">Telecommunication</h3>
                <p className="service-text">Telecommunications are the means of electronic transmission of information over distances. The information may be in the form of voice telephone calls, data, text, images, or video. Today, telecommunications are used to organize more or less remote computer systems into telecommunications networks.</p>
                </figure>
                <figure className="up">
                <img src={elect} alt="research" className="researchimage2" />
                <h3 className="service-heading">Computing</h3>
                <p className="service-text">Computing includes designing and building hardware and software systems for a wide range of purposes; processing, structuring, and managing various kinds of information; doing scientific studies using computers; making computer systems behave intelligently; creating and using communications and entertainment media</p>
                </figure>
                <figure className="up">
                    <img src={comput} alt="research" className="researchimage3" />
                <h3 className="service-heading">Electronics</h3>
                <p className="service-text">An electronics repair technician assists in the design, development, testing, repair, and maintenance of electronic and electrical equipment and devices such as computers, navigational equipment, and communication equipment.</p>
                </figure>
            </div>
        </div>
    )
}