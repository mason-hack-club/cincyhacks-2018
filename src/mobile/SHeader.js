import React from 'react';
import './Mobile.css';
import logo from '../chlogo.png';

class SHeader extends React.Component {
  render() {
    return(
      <div className="header__container">
        <img src={logo} />
        <h1 id="h__title">CincyHacks</h1>
          <h2 id="h__desc">Cincinnati's original high school hackathon</h2>

        <h2 id="h__date">September {22}nd to {23}rd, {2018}</h2>
        <button className="apply">Apply now!</button>
      </div>
    )
  }
}

export default SHeader;
