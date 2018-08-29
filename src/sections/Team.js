import React from 'react';

import TeamMember from '../components/TeamMember';

class Team extends React.Component {
	render() {
		return (
			<div>
				<h1>Team</h1>
				<TeamMember name="Megan" />
				<TeamMember name="Mark" />
				<TeamMember name="Will" />
				<TeamMember name="Vikram" />
				<TeamMember name="Christian" />
			</div>
		);
	}
}

export default Team;