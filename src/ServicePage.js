import React from 'react';
import './ServicePage.css';
import videoBG from "./image/VideoBG.mp4";



function ServicePage() {
 return ( 
    <div className="ServicePage">
        <h1>Our Services</h1>
        <p className='ServiceDesc'>
At Guardify, we fortify your digital defenses, offering cutting-edge<br></br>cybersecurity solutions to safeguard your digital assets.</p>
      
      <video src={videoBG} autoPlay loop muted></video>
      
      <div className='TextService'>
      <p className='Service1'>Network Security Assessment</p>
      <p className='Service2'>Endpoint Protection Solutions</p>
      <p className='Service3'>Incident Response and Digital Forensics</p>
      </div>

      <div className='DetailService'>
      <p className='Det1'>Guardify conducts thorough assessments of your network infrastructure to identify vulnerabilities, assess potential risks, and provide tailored recommendations. Ensure the resilience and integrity of your digital assets with our expert network security analysis.</p>
      <p className='Det2'>Safeguard your devices and endpoints from evolving cyber threats with Guardify's advanced endpoint protection solutions. Our comprehensive approach includes real-time threat detection, proactive response mechanisms, and continuous monitoring to fortify your digital perimeter.</p>
      <p className='Det3'>Guardify specializes in rapid incident response to cybersecurity breaches. Our team employs advanced digital forensics techniques to analyze and mitigate the impact of security incidents. Count on Guardify to minimize downtime and protect your organization's digital assets with efficient incident response strategies.</p>
      </div>

      <footer>
        {/*<p>Copyright © 2022 Guardify. All rights reserved.</p>*/}
      </footer>

    </div>
    
 );
}

export default ServicePage;