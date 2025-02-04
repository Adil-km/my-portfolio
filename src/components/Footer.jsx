import { Button } from "./Button";
import '../App.css';

export const Footer= ()=>{
    const icon1 = "/icon1.svg";
    const icon2 = "/icon2.svg";
    const icon3 = "/icon3.svg";
    return(
    <>
        <footer>
            <div className="footer-content">

                <div className="footer-btn">    
                    <blockquote>"Stay humble. Work hard. Be kind."</blockquote>
                    <Button className="btn" text="Get in touch" link="/contact"/>
                </div>

                <div className="link-container">
                    <span>Other Links</span>
                    <ul className="links">
                        <li>
                        <img src={icon1} className="icon-1" alt="linkedin icon" onClick={()=>{window.location.href="#"}}/>
                            <a href="">social media link</a>
                        </li>

                        <li>
                        <img src={icon2} className="icon-2" alt="linkedin icon" onClick={()=>{window.location.href="#"}}/>
                            <a href="">social media link</a>
                        </li>

                        <li>
                        <img src={icon3} className="icon-2" alt="linkedin icon" onClick={()=>{window.location.href="#"}}/>
                            <a href="">social media link</a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="copyright">
                <p>Designed by Adil km</p>
            </div>
                
        </footer>
    </>
    );
}