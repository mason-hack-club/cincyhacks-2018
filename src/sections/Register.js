import React from 'react';

class Register extends React.Component {
	render() {
		return (
			<div className="section" id="register-container">
				<h1>Ready to Join?</h1>
				<form action="https://goo.gl/forms/y8JIe0QPVXsw48uD2" method="get" target="_blank">
					<button type="submit" className="register-btn" >Apply Now!</button>
				</form>
			</div>
		);
	}
}

export default Register;