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
			<div>
				<h1>Team</h1>
				<Megan />
				<Mark />
				<Will />
				<Vikram />
				<Christian />
			</div>
		);
	}
}

export default Team;