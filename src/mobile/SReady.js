import React from 'react';
import './Mobile.css';

class SReady extends React.Component {
  handleClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSd7h-synW9Serf1norecyFGU3XcIvW5GrwY-2s7fkjrON-86Q/viewform?usp=sf_link");
  }

  render() {
    return(
      <div className="ready__container">
        <h1>Ready to join us?</h1>
        <button className="r__apply" onClick={this.handleClick}>Apply Now!</button>
      </div>
    )
  }
}

export default SReady;
