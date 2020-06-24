import React, { Component } from "react";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
      <div style={{  marginTop:40, paddingTop:40, paddingBottom:30}}>
        <h1 >
          Currently working on converting projects into React components...
        </h1>
        <h2>To be updated... </h2>
        <img src="images/t.png" alt="Thank you!" style={{top:10}}/>
        <h2>Check out my github page for some of my projects <a href="https://github.com/brotherhui521" target="_blank">here </a></h2>
      </div>
      </div>
    );
  }
}

export default Projects;
