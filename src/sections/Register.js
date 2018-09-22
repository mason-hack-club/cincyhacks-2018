import React from 'react';

class Register extends React.Component {
	render() {
		return (
			<div className="section" id="register-container">
				<h1>Resources</h1>
				<form action="https://cincyhacks2018.devpost.com/" method="get" target="_blank">
					<button type="submit" className="register-btn" >Submit Project</button>
				</form>
			</div>
		);
	}
}

export default Register;
