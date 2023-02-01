import React from "react";
import Expriences from "../components/knowledges/Expriences";
import Formation from "../components/knowledges/Formation";
import Hobbies from "../components/knowledges/Hobbies";
import Languages from "../components/knowledges/Languages";
import OtherSkills from "../components/knowledges/OtherSkills";
import Navigation from "../components/Navigation";

const Knowledges = () => {
  return (< div className="knowledges">
    <Navigation/>
    <div className="knowledgesContent"> 
      <Languages/>
      <Expriences/>
      <OtherSkills/>
      <Formation/>
      <Hobbies/>
    </div>
    </div>);
};

export default Knowledges;
