import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
  state={
    languages: [
      { id:1, value:"Javascript"},
      { id:2, value:"Html/Css"},
      { id:3, value:"PHP"},
      { id:4, value:"Node.JS"}
    ],
    frameworks:[
      { id:1, value:"React"},
      { id:2, value:"Symfony"},
      { id:4, value:"Express"},
      { id:3, value:"Angular"},

      
    ]
  }
  render() {
    let {languages, frameworks} = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar languages={languages} className='languagesDisplay de' title="Languages"/>
        <ProgressBar languages={frameworks} className="frameworksDissplay" title="Frameworks & Bibliothèques"/>
      </div>
    );
  }
}

export default Languages;
