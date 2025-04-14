import prop1 from './image/Prop3.png';
const Services = () => {
    return (  

        <div className='Services'>
        
        <p className='Head'>OUR SERVICES</p>
        <p className='Box'></p>
        <p className='Subtext'>At Guardify, we take pride in providing comprehensive and cutting-edge cybersecurity solutions <br></br> to safeguard your digital assets. In an era where digital threats are evolving rapidly, our team of <br></br>experts is dedicated to fortifying your defenses and ensuring the integrity of your information.</p>
        <ul>
          <li>Cyber Threat Analysis and Prevention</li>
          <li>Secure Network Architecture</li>
          <li>Endpoint Security Solutions</li>
          <li>Incident Response and Recovery</li>
          <li>Employee Training and Awareness</li>
        </ul>
          <img src={prop1} alt='prop'></img>
          <div>
          <a href="/services">Explore Our Services</a></div>

    </div>
    );
}
 
export default Services;