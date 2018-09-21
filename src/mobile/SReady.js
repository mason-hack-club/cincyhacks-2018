import React from 'react';
import './Mobile.css';

class SReady extends React.Component {
  handleClick = () => {
    window.open("https://cincyhacks2018.devpost.com/");
  }

  render() {
    return(
      <div className="ready__container">
        <h1>Resources</h1>
        <button className="r__apply" onClick={this.handleClick}>Submit Project!</button>
      </div>
    )
  }
}

export default SReady;
