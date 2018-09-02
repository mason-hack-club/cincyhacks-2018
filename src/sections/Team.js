import React from 'react';

// Import team members
import Megan from '../team/Megan';
import Mark from '../team/Mark';
import Will from '../team/Will';
import Vikram from '../team/Vikram';
import Christian from '../team/Christian';

class Team extends React.Component {
	render() {
		return (
			<div className="section" id="team-container">
				<h1>Our Team</h1>
				<div className="team__member">
					<img src="http://www.dberke.com/media/person_images/1178/square_Marc.jpg"/>
					<span>Megan Cui</span><br/>
					<span><i>Executive Director</i></span>
					<br/>
					<a href="https://linkedin.com/in/megancui" class="icon"><i class="fa fa-linkedin"></i></a>
					<a href="https://github.com/megancui" class="icon"><i class="fa fa-github"></i></a>
					<a href="https://instagram.com/megscui" class="icon"><i class="fa fa-instagram"></i></a>
					<a href="https://medium.com/@megancui" class="icon"><i class="fa fa-medium"></i></a>
				</div>
				<div className="team__member">
					<img src="http://www.dberke.com/media/person_images/1178/square_Marc.jpg"/>
					<span>Mark Senne</span><br/>
					<span><i>Head of Logistics</i></span>
				</div>
				<div className="team__member">
					<img src="http://www.dberke.com/media/person_images/1178/square_Marc.jpg"/>
					<span>Nicholas Iten</span><br/>
					<span><i>Head of Finance</i></span>
				</div>
				<div className="team__member">
					<img src="http://www.dberke.com/media/person_images/1178/square_Marc.jpg"/>
					<span>Will Mechler</span><br/>
					<span><i>Head of Marketing</i></span>
				</div>
				<div className="team__member">
					<img src="http://www.dberke.com/media/person_images/1178/square_Marc.jpg"/>
					<span>Vikram Deepak</span><br/>
					<span><i>Head of Experience</i></span>
				</div>
				<div className="team__member">
					<img src="http://www.dberke.com/media/person_images/1178/square_Marc.jpg"/>
					<span>Christian Galang</span><br/>
					<span><i>Webmaster</i></span><br/>
					&nbsp;
				</div>
				<div className="team__member">
					<img src="http://www.dberke.com/media/person_images/1178/square_Marc.jpg"/>
					<span>Alan Guo</span><br/>
					<span><i>Marketing Coordinator</i></span>
				</div>
				<div className="team__member">
					<img src="http://www.dberke.com/media/person_images/1178/square_Marc.jpg"/>
					<span>Katherine Hu</span><br/>
					<span><i>Marketing Coordinator</i></span>
				</div>
				<div className="team__member">
					<img src="http://www.dberke.com/media/person_images/1178/square_Marc.jpg"/>
					<span>Suhaas Ravela</span><br/>
					<span><i>Marketing Coordinator</i></span>
				</div>
				<div className="team__member">
					<img src="http://www.dberke.com/media/person_images/1178/square_Marc.jpg"/>
					<span>Kabir Doshi</span><br/>
					<span><i>Logistics Coordinator</i></span>
				</div>
				<div className="team__member">
					<img src="http://www.dberke.com/media/person_images/1178/square_Marc.jpg"/>
					<span>Scott Shepherd</span><br/>
					<span><i>Logistics Coordinator</i></span>
				</div>
				<div className="team__member">
					<img src="http://www.dberke.com/media/person_images/1178/square_Marc.jpg"/>
					<span>Jack Margeson</span><br/>
					<span><i>Logistics Coordinator</i></span>
				</div>
				<div className="team__member">
					<img src="http://www.dberke.com/media/person_images/1178/square_Marc.jpg"/>
					<span>Ava Scherocman</span><br/>
					<span><i>Experience Coordinator</i></span>
				</div>
				<div className="team__member">
					<img src="http://www.dberke.com/media/person_images/1178/square_Marc.jpg"/>
					<span>Emily Yang</span><br/>
					<span><i>Experience Coordinator</i></span>
				</div>
				<div className="team__member">
					<img src="http://www.dberke.com/media/person_images/1178/square_Marc.jpg"/>
					<span>Alishaan Ali</span><br/>
					<span><i>Finance <br/>Coordinator</i></span>
				</div>
			</div>
		);
	}
}

export default Team;
