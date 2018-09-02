import React from 'react';
import logo from '../chlogo.png';


// Import navigation bar
import NavBar from './NavBar';

class Header extends React.Component {
	handleClick = () => {
		window.location = "https://goo.gl/forms/y8JIe0QPVXsw48uD2";
	}

	render() {
		return (
			<div id="header-container" className="section">
				<NavBar />

				<div id="title">
					<img src={logo} />
					<h1>CincyHacks</h1>
						<h2 id="h__desc" style={{fontSize: '28px'}}>Cincinnati's original high school hackathon</h2>

					<h2 id="h__date" style={{fontSize: '24px'}}>September 22nd to 23rd, 2018</h2>
						<button type="submit" className="register-btn" >Apply Now!</button>
				</div>
			</div>
		);
	}
}

export default Header;
