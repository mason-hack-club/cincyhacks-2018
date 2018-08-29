import React from 'react';

// Import team members
import Megan from '../team/Megan';
import Mark from '../team/Mark';
import Will from '../team/Will';
import Vikram from '../team/Vikram';
import Christian from '../team/Christian';

class Team extends React.Component {
	render() {
		return (
			<div className="section" id="team-container">
				<h1>CincyHacks 2018 Team</h1>
				<div id="top-row-members" className="row-members">
					<Megan />
					<Mark />
					<Will />
				</div>
				<div id="bottom-row-members" className="row-members">
					<Vikram />
					<Christian />
				</div>
			</div>
		);
	}
}

export default Team;