import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
  state={
    languages: [
      { id:1, value:"Javascript", xp:1},
      { id:2, value:"Html/Css", xp:1.05},
      { id:3, value:"PHP", xp:.94}
    ],
    frameworks:[
      { id:1, value:"React", xp:.85},
      { id:2, value:"Angular", xp:.10},
      { id:3, value:"Symfony", xp:.75}
    ]
  }
  render() {
    let {languages, frameworks} = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar languages={languages} className='languagesDisplay' title="Languages"/>
        <ProgressBar languages={frameworks} className="frameworksDissplay" title="Frameworks & Bibliothèques"/>
      </div>
    );
  }
}

export default Languages;
