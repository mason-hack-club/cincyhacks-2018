import React from 'react';
import './Mobile.css';

class SSchedule extends React.Component {

  render() {
    return(
      <div className="schedule__container">
        <h1>Schedule</h1>
        <div>
        <table>
					<caption><h3>Saturday, 9/22*</h3></caption>
						<tr className="table__header">
							<td>Time</td>
							<td>Event</td>
						</tr>
						<tr>
							<td>8:30 AM</td>
							<td>Registration opens</td>
						</tr>
						<tr>
							<td>9:15 AM</td>
							<td>Opening ceremony begins</td>
						</tr>
						<tr>
							<td>10:00 AM</td>
							<td>Hacking starts</td>
						</tr>
						<tr>
							<td>10:15 AM</td>
							<td>Intro to HTML & CSS workshop</td>
						</tr>
						<tr>
							<td>11:30 AM</td>
							<td>Lunch</td>
						</tr>
						<tr>
							<td>12:30 PM</td>
							<td>Intro to JavaScript workshop</td>
						</tr>
						<tr>
							<td>6:00 PM</td>
							<td>Dinner</td>
						</tr>
				</table>

				<table>
					<caption><h3>Sunday, 9/23*</h3></caption>
						<tr className="table__header">
							<td>Time</td>
							<td>Event</td>
						</tr>
						<tr>
							<td>12:00 AM</td>
							<td>Midnight snack</td>
						</tr>
						<tr>
							<td>7:30 AM</td>
							<td>Breakfast</td>
						</tr>
						<tr>
							<td>9:00 AM</td>
							<td><a href="https://cincyhacks2018.devpost.com/">Start submissions</a></td>
						</tr>
						<tr>
							<td>10:00 AM</td>
							<td>Hacking ends</td>
						</tr>
						<tr>
							<td>10:15 AM</td>
							<td>Judging begins</td>
						</tr>
						<tr>
							<td>11:15 AM</td>
							<td>Closing/Awards ceremony begins</td>
						</tr>
						<tr>
							<td>12:00 PM</td>
							<td>End of CincyHacks 2018</td>
						</tr>
				</table>
        </div>
        <p><i>*Specific times/events are subject to change.</i></p>
      </div>
    )
  }
}

export default SSchedule;
