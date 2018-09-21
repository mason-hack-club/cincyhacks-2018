import React from 'react';

// Import smooth scrolling
import AnchorLink from 'react-anchor-link-smooth-scroll';

class NavBar extends React.Component {
	handleClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSd7h-synW9Serf1norecyFGU3XcIvW5GrwY-2s7fkjrON-86Q/viewform?usp=sf_link");
  }

	render() {
		return (
			<div id="nav-bar">
				<div id="nav-logo-container"></div>
				<div id="tabs-container">
					<AnchorLink href="#about-container" className="tab" id="about-tab">
						<div>
							<p>About</p>
						</div>
					</AnchorLink>

					<AnchorLink href="#schedule-container" className="tab" id="schedule-tab">
						<div>
							<p>Schedule</p>
						</div>
					</AnchorLink>
					<AnchorLink href="#faqs-container" className="tab" id="faq-tab">
						<div>
							<p>FAQs</p>
						</div>
					</AnchorLink>

					<AnchorLink href="#team-container" className="tab" id="team-tab">
						<div>
							<p>Team</p>
						</div>
					</AnchorLink>
					<AnchorLink href="#help-container" className="tab" id="help-tab">
						<div>
							<p>Partners</p>
						</div>
					</AnchorLink>
				</div>
			</div>
		);
	}
}

export default NavBar;
