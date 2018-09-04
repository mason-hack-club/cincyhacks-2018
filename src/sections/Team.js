import React from 'react';

// Import team members
import megan from '../team/megan.png';
import alishaan from '../team/Alishaan.jpeg';
import ava from '../team/Ava.JPG';
import mark from '../team/mark.jpg';
import nicholas from '../team/NicholasIten.jpg';
import unknown from '../team/unknown.png';
import emily from '../team/emily.jpg';
import jack from '../team/jackmargeson.png';
import katherine from '../team/katherinehu.jpeg';
import vikram from '../team/vikram.PNG';
import kabir from '../team/kabir.jpeg';
import scott from '../team/scott.jpg';
import will from '../team/will.JPG';
import christian from '../team/christiangalang.jpg';
import suhaas from '../team/Suhaas.JPG';


class Team extends React.Component {
	render() {
		return (
			<div className="section" id="team-container">
				<h1>Our Team</h1>
				<p>Reach us at team@cincyhacks.com</p>
				<div className="team__member">
					<img src={megan}/>
					<span>Megan Cui</span><br/>
					<span><i>Executive Director</i></span>
					<br/>
					<a href="https://linkedin.com/in/megancui" class="icon"><i class="fa fa-linkedin"></i></a>
					<a href="https://github.com/megancui" class="icon"><i class="fa fa-github"></i></a>
					<a href="https://instagram.com/megscui" class="icon"><i class="fa fa-instagram"></i></a>
					<a href="mailto:megan@cincyhacks.com" class="icon"><i class="fa fa-envelope"></i></a>
				</div>
				<div className="team__member">
					<img src={mark}/>
					<span>Mark Senne</span><br/>
					<span><i>Head of Logistics</i></span>
					<br/>
					<a href="https://www.linkedin.com/in/mark-senne-b45807138/" class="icon"><i class="fa fa-linkedin"></i></a>
					<a href="https://github.com/sennem" class="icon"><i class="fa fa-github"></i></a>
						<a href="https://instagram.com/mark_senne" class="icon"><i class="fa fa-instagram"></i></a>
							<a href="mailto:mark@cincyhacks.com" class="icon"><i class="fa fa-envelope"></i></a>

				</div>
				<div className="team__member">
					<img src={nicholas}/>
					<span>Nicholas Iten</span><br/>
					<span><i>Head of Finance</i></span>
					<br/>
						<a href="https://linkedin.com/in/paul-nicholas-iten-332967168" class="icon"><i class="fa fa-linkedin"></i></a>
						<a href="https://github.com/itenpn" class="icon"><i class="fa fa-github"></i></a>
						<a href="mailto:nicholas@cincyhacks.com" class="icon"><i class="fa fa-envelope"></i></a>
							<a href="https://instagram.com/nick.iten" class="icon"><i class="fa fa-instagram"></i></a>

				</div>
				<div className="team__member">
					<img src={will}/>
					<span>Will Mechler</span><br/>
					<span><i>Head of Marketing</i></span>
						<a href="https://linkedin.com/in/willmechler" class="icon"><i class="fa fa-linkedin"></i></a>
						<a href="https://github.com/hackwill" class="icon"><i class="fa fa-github"></i></a>
						<a href="https://williammechler.com" class="icon"><i class="fa fa-star"></i></a>
						<a href="mailto:will@cincyhacks.com" class="icon"><i class="fa fa-envelope"></i></a>
				</div>
				<div className="team__member">
					<img src={vikram}/>
					<span>Vikram Deepak</span><br/>
					<span><i>Head of Experience</i></span>
					<br/>
					<a href="https://linkedin.com/in/vikramdeepak" class="icon"><i class="fa fa-linkedin"></i></a>
					<a href="https://github.com/vikramdeepak" class="icon"><i class="fa fa-github"></i></a>
					<a href="https://www.instagram.com/vikram_deepak" class="icon"><i class="fa fa-instagram"></i></a>
					<a href="mailto:vikram@cincyhacks.com" class="icon"><i class="fa fa-envelope"></i></a>
				</div>
				<div className="team__member">
					<img src={christian}/>
					<span>Christian Galang</span><br/>
					<span><i>Webmaster</i></span>
					<br/>
						<a href="https://www.linkedin.com/in/christian-galang-7a066216b/" class="icon"><i class="fa fa-linkedin"></i></a>
						<a href="https://github.com/nxvgalang" class="icon"><i class="fa fa-github"></i></a>
						<a href="https://instagram.com/cristiano_01" class="icon"><i class="fa fa-instagram"></i></a>
						<a href="mailto:christian@cincyhacks.com" class="icon"><i class="fa fa-envelope"></i></a>
				</div>
				<div className="team__member">
					<img src={unknown}/>
					<span>Alan Guo</span><br/>
					<span><i>Marketing Coordinator</i></span>
				</div>
				<div className="team__member">
					<img src={katherine}/>
					<span>Katherine Hu</span><br/>
					<span><i>Marketing Coordinator</i></span>
					<br/>

					<a href="https://www.linkedin.com/in/katherine-h-b35593161/" class="icon"><i class="fa fa-linkedin"></i></a>
					<a href="mailto:katherine@cincyhacks.com" class="icon"><i class="fa fa-envelope"></i></a>
				</div>
				<div className="team__member">
					<img src={suhaas}/>
					<span>Suhaas Ravela</span><br/>
					<span><i>Marketing Coordinator</i></span>
				</div>
				<div className="team__member">
					<img src={kabir}/>
					<span>Kabir Doshi</span><br/>
					<span><i>Logistics Coordinator</i></span>
					<br/>
						<a href="https://www.linkedin.com/in/kabirdoshi/" class="icon"><i class="fa fa-linkedin"></i></a>
						<a href="https://twitter.com/KabirDoshi" class="icon"><i class="fa fa-twitter"></i></a>
						<a href="https://instagram.com/kabirdoshi" class="icon"><i class="fa fa-instagram"></i></a>
						<a href="mailto:kabir@cincyhacks.com" class="icon"><i class="fa fa-envelope"></i></a>
				</div>
				<div className="team__member">
					<img src={scott}/>
					<span>Scott Shepherd</span><br/>
					<span><i>Logistics Coordinator</i></span>
					<br/>
						<a href="https://www.linkedin.com/in/scott-shepherd-77140a151/" class="icon"><i class="fa fa-linkedin"></i></a>
						<a href="https://github.com/shepherdsc" class="icon"><i class="fa fa-github"></i></a>
						<a href="https://instagram.com/scottshepherd_" class="icon"><i class="fa fa-instagram"></i></a>
						<a href="mailto:scott@cincyhacks.com" class="icon"><i class="fa fa-envelope"></i></a>
				</div>
				<div className="team__member">
					<img src={jack}/>
					<span>Jack Margeson</span><br/>
					<span><i>Logistics Coordinator</i></span>
					<br/>
					<a href="https://twitter.com/margeson_jack" class="icon"><i class="fa fa-linkedin"></i></a>
					<a href="https://github.com/jack-margeson" class="icon"><i class="fa fa-github"></i></a>
					<a href="https://www.instagram.com/margeson.jack/" class="icon"><i class="fa fa-instagram"></i></a>
					<a href="mailto:jack@cincyhacks.com" class="icon"><i class="fa fa-envelope"></i></a>
				</div>
				<div className="team__member">
					<img src={ava}/>
					<span>Ava Scherocman</span><br/>
					<span><i>Experience Coordinator</i></span>
					<br/>
						<a href="https://www.linkedin.com/in/ava-scherocman/" class="icon"><i class="fa fa-linkedin"></i></a>
						<a href="https://github.com/avascherocman" class="icon"><i class="fa fa-github"></i></a>
							<a href="https://instagram.com/avascherocman" class="icon"><i class="fa fa-instagram"></i></a>
								<a href="mailto:ava@cincyhacks.com" class="icon"><i class="fa fa-envelope"></i></a>
				</div>
				<div className="team__member">
					<img src={emily}/>
					<span>Emily Yang</span><br/>
					<span><i>Experience Coordinator</i></span>
					<br/>
						<a href="https://www.instagram.com/eyangx" class="icon"><i class="fa fa-instagram"></i></a>
						<a href="mailto:emily@cincyhacks.com" class="icon"><i class="fa fa-envelope"></i></a>
				</div>
				<div className="team__member">
					<img src={alishaan}/>
					<span>Alishaan Ali</span><br/>
					<span><i>Finance <br/>Coordinator</i></span>
					<br/>
						<a href="https://linkedin.com/in/alishaan-ali-645026152" class="icon"><i class="fa fa-linkedin"></i></a>
						<a href="https://twitter.com/alishaan64?lang=en" class="icon"><i class="fa fa-twitter"></i></a>
						<a href="mailto:alishaan@cincyhacks.com" class="icon"><i class="fa fa-envelope"></i></a>
						<a href="https://instagram.com/alishaan.ali" class="icon"><i class="fa fa-instagram"></i></a>
				</div>
			</div>
		);
	}
}

export default Team;
