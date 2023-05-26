import "./Footer.css";
import { AiFillMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";


export default function Footer(){
    return(
        <div id="footer">
            <div className="logo">
                <p className="logo3">TECH</p><span className="logo4">CORP</span>
            </div>
            <div className="footer-container">
            <div className="locatin">
                <h5 className="contact">CONTACT US</h5>
                <div className="location">
                <a href="/" className="locate"><AiFillMail /> techcorp@yahoo.com</a>
                <a href="/" className="locate"><BsTelephoneFill /> +2348107265575</a>
                </div>
            </div>
            <div className="qlink">
                <h5 className="contact">QUICK LINKS</h5>
                <div className="quicklink">
                <a className="quick" href="#slider-container">Home</a>
                <a className="quick" href="#about">About</a>
                <a className="quick" href="#services">Service</a>
                <a className="quick" href="#footer">Contact</a>
                </div>
            </div>
            <div className="contacts">
                <h5 className="contact">FOLLOW TECHCORP</h5>
                <div className="media">
                        <a href="/" className="twitter"><AiFillTwitterSquare/></a>
                        <a href="/" className="facebook"><AiFillFacebook /></a>
                        <a href="/" className="linkedin"><AiFillLinkedin/></a>
                        <a href="/" className="instagram"><AiFillInstagram /></a>
                    </div>
            </div>
            </div>
            <p className="copyright">&copy; All Right Reserved. Designed by <a href="/" className="sp">Faruq Olaniyi Gbadegesin</a></p>
        </div>
    )
}