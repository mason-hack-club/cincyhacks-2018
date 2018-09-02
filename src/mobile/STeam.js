import React from 'react';
import './Mobile.css';
import megan from '../team/megan.png';
import alishaan from '../team/Alishaan.jpeg';
import ava from '../team/Ava.JPG';
import mark from '../team/mark.jpg';
import nicholas from '../team/NicholasIten.jpg';
import unknown from '../team/unknown.png';
import emily from '../team/emily.jpg';
import jack from '../team/jackmargeson.jpg';
import katherine from '../team/katherinehu.jpg';
import vikram from '../team/vikram.jpg';

class STeam extends React.Component {
  render() {
    return(
      <div className="team__container">
        <h1>
          Our Team
        </h1>
        <p style={{letterSpacing: '.8px'}}>Click on one of our team members to learn more at their LinkedIn.</p>
        <a href="https://linkedin.com/in/megancui"><img src={megan} /></a>
        <a href="https://www.linkedin.com/in/mark-senne-b45807138/"><img src={mark} /></a>
        <a href="https://www.linkedin.com/in/paul-nicholas-iten-332967168//"><img src={nicholas} /></a>
        <img src={unknown} />
        <a href="https://linkedin.com/in/vikramdeepak"><img src={vikram} /></a>
        <img src={unknown} />
        <a href="https://www.linkedin.com/in/katherine-h-b35593161/"><img src={katherine} /></a>
        <img src={unknown} />
        <img src={unknown} />
        <img src={unknown} />
        <a href="https://github.com/jack-margeson"><img src={jack} /></a>
        <a href="https://www.linkedin.com/in/ava-scherocman"><img src={ava} /></a>
        <img src={unknown} />
        <a href="https://www.instagram.com/eyangx"><img src={emily} /></a>
        <a href="https://www.linkedin.com/in/alishaan-ali-645026152/"><img src={alishaan} /></a>
      </div>
    )
  }
}

export default STeam;
