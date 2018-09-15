import React from 'react';

// Import CincyHacks 2017 Pics
import CincyHacks1 from './CincyHacks1.JPG';
import CincyHacks2 from './CincyHacks2.JPG';
import CincyHacks3 from './CincyHacks3.JPG';

class About extends React.Component {
	render() {
		return (
			<div className="section" id="about-container">
				<h1>What is CincyHacks?</h1>
				<div id="about-paragraphs">
					<p>
						CincyHacks is Cincinnati's first hackathon dedicated to high school students. Our mission is to encourage students like you to learn and further explore the growing world of technology.
					</p>

					<p>
						The brainchild of Mason Hack Club, CincyHacks began in 2017 as a milestone event to increase student involvement in techology. Hosted at the University of Cincinnati, CincyHacks 2017 boasted over 90 attendees from 24 schools and 3 states, made possible by support from our event partner, Cengage Learning, and our other sponsors.
					</p>

					<p>
						This year's event is run by <a href="https://masonhackclub.com">Mason Hack Club</a> in partnership with Mason High School. Cincyhacks is not associated with any other non-profit organization.
					</p>
				</div>
				<img src={CincyHacks1} className="ch-pics"/>
				<img src={CincyHacks2} className="ch-pics" />
				<img src={CincyHacks3} className="ch-pics" />
			</div>
		);
	}
}

export default About;
