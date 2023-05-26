import "./Nav.css";
import { AiOutlineMenu } from "react-icons/ai";
import {Link} from "react-router-dom";

export default function Nav (){
    function hamburger (){
        let mobileUl = document.querySelector (".mobile-ul");
        mobileUl.classList.toggle("show");
    }
    return(
        <>
        <nav>
            <div className="logoContainer">
                <Link to={"/"} className="link"><p className="logo1">TECH</p><span className="logo2">CORP</span></Link>
            </div>
            <ul className="desktop-ul">
                <li><a href="#slide-container">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#footer">Contact</a></li>
            </ul>
            <button className="toggle" onClick={hamburger}><AiOutlineMenu/></button>
        </nav>
            <ul className="mobile-ul">
                <li><a href="#slider-container">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#footer">Contact</a></li>
            </ul>
        </>
    )
}