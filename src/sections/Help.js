import React from 'react';
import '../mobile/Mobile.css';
import mason from '../mason.jpg';
import zoup from '../images/Zoup-Logo.png';

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
         <img src="https://cdn1.valpak.com/img/print/TwinDragonChinese_4CTI.tif" id="twin-dragons-logo" class="big-logo" />
      <img src="https://news.cengage.com/wp-content/uploads/2011/05/CL_Logo_RGB_JPG.jpg" id="cengage-logo" class="big-logo" />
      <br />
        <img src="https://www.logolynx.com/images/logolynx/6b/6bddf128c9cd51635d2c9961fef52302.png" id="playstation-logo" class="medium-logo" />
       <img src={zoup} id="zoup-logo" class="medium-logo" />
        </div>
  </div>
    )
  }
}

export default SHelp;
