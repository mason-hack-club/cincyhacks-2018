import React from 'react';
import './Mobile.css';
import megan from '../team/megan.png';
import alishaan from '../team/Alishaan.jpeg';
import ava from '../team/Ava.JPG';
import mark from '../team/mark.jpg';
import nicholas from '../team/NicholasIten.jpg';
import unknown from '../team/unknown.png';

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
        <img src={unknown} />
        <img src={unknown} />
        <img src={unknown} />
        <img src={unknown} />
        <img src={unknown} />
        <img src={unknown} />
        <img src={unknown} />
        <a href="https://www.linkedin.com/in/ava-scherocman"><img src={ava} /></a>
        <img src={unknown} />
        <img src={unknown} />
        <a href="https://www.linkedin.com/in/alishaan-ali-645026152/"><img src={alishaan} /></a>
      </div>
    )
  }
}

export default STeam;
