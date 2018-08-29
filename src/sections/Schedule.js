import React from 'react';

class Schedule extends React.Component {
	render() {
		return (
			<div className="section" id="schedule-container">
				<h1>Schedule</h1>
				<div className="time-mark" id="time1">
					<h4>5:00 AM</h4>
					<p>Go to sleep</p>
				</div>
				<div className="time-mark" id="time1">
					<h4>6:30 AM</h4>
					<p>Wake up</p>
				</div>
				<div className="time-mark" id="time1">
					<h4>7:14 AM</h4>
					<p>Arrive at school</p>
				</div>
				<div className="time-mark" id="time1">
					<h4>7:15 AM</h4>
					<p>Go to sleep</p>
				</div>
				<div className="time-mark" id="time1">
					<h4>2:15 PM</h4>
					<p>Wake up</p>
				</div>
				<div className="time-mark" id="time1">
					<h4>2:16 PM</h4>
					<p>Go to sleep</p>
				</div>
			</div>
		);
	}
}

export default Schedule;