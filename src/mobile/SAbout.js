import React from 'react';
import './Mobile.css';

class SAbout extends React.Component {
  render() {
    return(
      <div className="about__container">
        <h1>What is CincyHacks?</h1>
<p>
						CincyHacks is Cincinnati's first hackathon dedicated to high school students. Our mission is to encourage students like you to learn and further explore the growing world of technology.
					</p>

					<p>
						The brainchild of Mason Hack Club, CincyHacks began in 2017 as a milestone event to increase student involvement in techology. Hosted at the University of Cincinnati, CincyHacks 2017 boasted over 90 attendees from 24 schools and 3 states, made possible by support from our event partner, Cengage Learning, and our other sponsors.
					</p>

					<p>
						This year's event is run by <a style={{color: "white"}} href="https://masonhackclub.com">Mason Hack Club</a> and in partnership with Mason High School.
					</p>      </div>
    )
  }
}

export default SAbout;
