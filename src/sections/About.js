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
					<p>CincyHacks is Cincinnati's first hackathon dedicated to high school students. Our mission is to encourage students like you to learn and further explore the growing world of technology. After last year's huge success at CincyHacks 2017, we decided to do it again this year in hopes of reaching more students.</p>
				</div>
				<img src={CincyHacks1} className="ch-pics"/>
				<img src={CincyHacks2} className="ch-pics" />
				<img src={CincyHacks3} className="ch-pics" />
			</div>
		);
	}
}

export default About;