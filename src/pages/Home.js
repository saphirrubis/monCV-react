import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
  <div className="home">
  <Navigation/>
  
  <div div className="homeContent"> 
   <div className="content">
    <h1>DUBUS Tatiana</h1>
    <h2>Développeur Web, Web Mobile junior</h2>
    <div className="pdf">
      <a href="./src/CV/monCV.pdf" target="_blank">Télécharger CV</a>
    </div>
    
   </div>
  </div>
  </div>
  );
};

export default Home;
