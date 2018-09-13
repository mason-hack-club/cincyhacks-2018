import React from 'react';
import '../mobile/Mobile.css';
import mason from '../mason.jpg';

class SHelp extends React.Component {
  render() {
    return(
      <div className="help__containerbig" id="help-container">
        <h1>Our Partners</h1>
        <p style={{color: "white", marginBottom: "30px", maxWidth: "700px", marginLeft: "auto", marginRight: "auto"}}>Though we are not accepting financial contributions from outside organizations this year, please email us at <a style={{color: "white"}} href="mailto:team@cincyhacks.com">team@cincyhacks.com</a> if you'd like to run a workshop or a keynote speech.</p>
        <div className="partner__big">
          <img src={mason} />
          <p>Mason High School</p>
        </div>

        <div className="partner__big">
          <a href="https://masonhackclub.com">
      <img src="https://masonhackclub.com/images/mason-hack-club-white.png"/>
        <p>Mason Hack Club</p>
        </a>

      </div>
      <div className="additionalhelp__big">
        <h3>Additional Help</h3>
        <img src="https://www.logolynx.com/images/logolynx/6b/6bddf128c9cd51635d2c9961fef52302.png"/>
        <br />
         <img src="https://cdn1.valpak.com/img/print/TwinDragonChinese_4CTI.tif">
        </div>
  </div>
    )
  }
}

export default SHelp;
