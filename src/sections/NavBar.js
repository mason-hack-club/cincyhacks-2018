import React from 'react';

class NavBar extends React.Component {
	render() {
		return (
			<div id="nav-bar">
				<div id="nav-logo-container"></div>
				<div id="tabs-container">
					<div className="tab" id="about-tab">
						<p>About</p>
					</div>
					<div className="tab" id="faq-tab">
						<p>FAQs</p>
					</div>
					<div className="tab" id="schedule-tab">
						<p>Schedule</p>
					</div>
					<div className="tab" id="help-tab">
						<p>Help</p>
					</div>
					<div className="tab" id="team-tab">
						<p>Team</p>
					</div>
					<div className="tab" id="register-tab">
						<p>Register</p>
					</div>
				</div>
			</div>
		);
	}
}

export default NavBar;