import React from 'react';
import './Mobile.css';

class SHelp extends React.Component {
  render() {
    return(
      <div className="help__container">
        <h1>Partners</h1>
        <div className="partner">
          <img src="http://p10cdn4static.sharpschool.com/UserFiles/Servers/Server_391035/Templates/images/mason_logo.png" />
          <p>Mason High School</p>
        </div>

        <div className="partner">
          <a href="https://masonhackclub.com">
      <img src="https://masonhackclub.com/images/mason-hack-club-white.png"/>
        <p>Mason Hack Club</p>
        </a>

      </div>
      <div className="additionalhelp">
        <h3>Additional Help</h3>
        <img src="https://www.logolynx.com/images/logolynx/6b/6bddf128c9cd51635d2c9961fef52302.png"/>
        </div>
  </div>
    )
  }
}

export default SHelp;
