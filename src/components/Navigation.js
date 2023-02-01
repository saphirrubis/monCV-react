import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return ( <>
<div className="sidebar">
    <div className="id">
      <div className="idContent">
        <img src="./src/media/avatar.jpg" alt="mon avatar" />
        <h3>Dubus Tatiana</h3>
      </div>
    </div>
  
  <div className="navigation">
    <ul>
      <li>
        <NavLink exact to="/" activeClassName="navActive">
          <i className="fas fa-home"></i>
          <span>Accueil</span>
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/competence" activeClassName="navActive">
          <i className="fas fa-mountain"></i>
          <span>Compétences</span>
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/portfolio" activeClassName="navActive">
          <i className="fas fa-images"></i>
          <span>Portfolio</span>
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/contact" activeClassName="navActive">
          <i className="fas fa-address-book"></i>
          <span>Contact</span>
        </NavLink>
      </li>
    </ul>
  </div>
  <div className="socialNetwork">
       <ul>
              <li>
                  <a href="https://fr.linkedin.com/in/tatiana-dubus-10a580245" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>              
              </li>
              <li>
                  <a href="https://github.com/saphirrubis" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>              
              </li>
        </ul>
         <div className="signature">
              <p>from Dubus -2023</p>
              </div>
  </div>
</div>
</>
);
};

export default Navigation;
