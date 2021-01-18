import React from "react";
import Images from "../assets/Images";
/**
 * About page component.
 */
const About = () => {
    return(
        <div className="about-cont">
        <div className="about">
            I'm Yasmin, an illustrator and software developer based in Glasgow. Currently, open for commissions.
            <br/>
            <br/>
            Want to connect?
            <br/>
            <br/>
            Email me at: handyheart_art@gmail.com
            <br/>
            <br/>
            <div className="social-cont" style={{display:"flex", justifyContent:"center"}}>
            <a href="https://www.instagram.com/handyheart_art/"><img className="social-logos" src={Images.instagram} width="auto" height="32px" alt="Instagram"/></a>
            <a href="https://handyheart.tumblr.com/"><img className="social-logos" src={Images.tumblr} width="auto" height="32px" alt="Tumblr"/></a>
            <a href="https://github.com/Yasmojam"><img className="social-logos" src={Images.gitHub} alt="GitHub"/></a>
            </div>
        </div>
        </div>
    )
}
export default About