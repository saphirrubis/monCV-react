import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (<div className="contact">
    <Navigation/>
    
    <div className="contactContent">
      <div className="header"></div>
      <div className="contactBox">
        <h4>Contactez-moi </h4>
        <ul>
          <li className="position"> <i className="fas fa-map-marker-alt"></i>
           <span>LOOS</span></li>
           <li> <i className="far fa-envelope"></i>
           <CopyToClipboard text="t.dubus59@gmail.com">
            <span className="clickInput" onClick={()=> alert ('Téléphone copi" !')}>t.dubus59@gmail.com</span>
            </CopyToClipboard></li>
        </ul>
      </div>
      <div className="socialNetworks">
       <ul>
              <li>
                  <a href="https://fr.linkedin.com/in/tatiana-dubus-10a580245" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>              
              </li>
              <li>
                  <a href="https://github.com/saphirrubis" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>              
              </li>
              
            </ul>
      </div>
     </div>
    </div>);
};

export default Contact;
