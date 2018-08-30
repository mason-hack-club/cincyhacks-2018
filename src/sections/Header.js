import React from 'react';

// Import navigation bar
import NavBar from './NavBar';

class Header extends React.Component {
	render() {
		return (
			<div id="header-container" className="section">
				<NavBar />
				<div id="title">
					<h1>CincyHacks 2018</h1>
					<h3>September 22nd - 23rd, 2018</h3>
					<form action="https://goo.gl/forms/y8JIe0QPVXsw48uD2" method="get" target="_blank">
						<button type="submit" className="register-btn" >Apply Now!</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Header;