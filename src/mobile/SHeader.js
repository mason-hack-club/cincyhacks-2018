import React from 'react';
import './Mobile.css';
import logo from '../chlogo.png';

class SHeader extends React.Component {
  handleClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSd7h-synW9Serf1norecyFGU3XcIvW5GrwY-2s7fkjrON-86Q/viewform?usp=sf_link");
  }

  render() {
    return(
      <div className="header__container">
        <img src={logo} />
        <h1 id="h__title">CincyHacks</h1>
          <h2 id="h__desc">Cincinnati's original high school hackathon</h2>

        <h2 id="h__date">September {22}nd to {23}rd, {2018}</h2>
        <button className="apply" onClick={this.handleClick}>Apply now!</button>
      </div>
    )
  }
}

export default SHeader;
