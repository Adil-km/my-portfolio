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
                    <span className="quote">"Stay humble. Work hard. Be kind."</span>
                    <Button className="btn" text="Get in touch" link="/contact"/>
                </div>

                <div className="link-container">
                    <span>Follow me on</span>

                    <ul className="links">
                        <li>
                            <a href="https://www.linkedin.com/in/Adil-km">

                            <img src={icon1} className="icon-1" alt="linkedin icon"/>
                            LinkedIn
                            </a>
                            
                        </li>

                        <li>
                            <a href="https://github.com/Adil-km/">
                            <img src={icon2} className="icon-2" alt="linkedin icon"/>
                            GitHub</a>
                        </li>

                        <li>
                    
                            <a href="https://www.instagram.com/adil_km_/">
                            <img src={icon3} className="icon-2" alt="linkedin icon"/>
                            Instagram</a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="copyright">
                <p>Designed by <a href="mailto:adilkmparappur@gmail.com">Adil km</a></p>
            </div>
                
        </footer>
    </>
    );
}