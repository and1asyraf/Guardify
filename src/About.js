import './About.css'
import TeamSlider from './TeamSlider';
import prop2 from './image/Prop2.png';
const  About = () => {
    return ( 

            <div className="AboutContainer">
                <p className="AboutUs"> ABOUT US</p>
                <p className="Guardify">"Safeguarding Your Digital Frontier, One Byte at a Time"</p>
                <p className="GetKnow "> Get to know more about our company</p>
                <p className="WhoAre "> WHO ARE WE?</p>
                <p className="Detail "> Welcome to Guardify, where cybersecurity meets innovation.<br></br> At Guardify, we are dedicated to providing unparalleled<br></br> digital protection, securing your organization's assets in an <br></br>ever-evolving digital landscape.
                <br></br><br></br>Our team of seasoned cybersecurity experts is committed to safeguarding your digital frontier with cutting-edge solutions. We specialize in developing robust security measures that shield your data, networks, and systems from the myriad threats that lurk in the digital realm
                <br></br><br></br>We pride ourselves on staying ahead of the curve, anticipating emerging threats, and adapting our strategies to counteract them. Guardify is not just a cybersecurity company; we are your trusted partner in the ongoing battle against cyber threats.
                <br></br><br></br>We pride ourselves on staying ahead of the curve, anticipating emerging threats, and adapting our strategies to counteract them. Guardify is not just a cybersecurity company; we are your trusted partner in the ongoing battle against cyber threats.</p>
                <img src={prop2} alt="prop2"></img>

                <div className='MV'>
                <div className='Vision'>
                    <h1>Our Vision</h1>
                    <h2 className='box1'> </h2>
                    <p>Guardify envisions a world where businesses thrive, free from digital threats, through innovative and robust cybersecurity measures.</p>
                </div>
                <div className='Mission'>
                    <h1>Our Mission</h1>
                    <h2 className='box2'> </h2>
                    <p>Guardify's mission is to fortify digital landscapes, ensuring resilient cybersecurity solutions for a secure online future.</p>
                </div>
                </div>

                <div className='Team'><TeamSlider/></div>
            </div>
            
            

     );
}
 
export default About ;