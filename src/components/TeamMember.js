import React from 'react';

class TeamMember extends React.Component {
	render() {
        const { name } = this.props;
		return (
			<div>
				<h3>{name}</h3>
			</div>
		);
	}
}

export default TeamMember;