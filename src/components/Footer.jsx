import { Button } from "./Button";


export const Footer= ()=>{
    return(
    <>
        <div className="footer">
                <div className="links">
                    <span>Contact Information</span>
                </div>
                <div className="location">
                    <span>Location</span>
                </div>
                <div>
                    <Button text="Contact me"/>
                </div>
                <div>
                    <p>Designed by Adil km</p>
                </div>
                
        </div>
    </>
    );
}