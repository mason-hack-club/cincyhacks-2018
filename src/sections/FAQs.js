import React from 'react';

class FAQs extends React.Component {
	render() {
		return (
			<div className="section" id="faqs-container">
				<h1>Frequently Asked Questions</h1>
					<div className="faq" id="question1">
						<h3>When and where is CincyHacks?</h3>
						<p>CincyHacks is being hosted at William Mason High School from Saturday, September 22nd to Sunday, September 23rd!</p>
					</div>
					<div className="faq" id="question2">
						<h3>What is a hackathon?</h3>
						<p>A hackathon is a type of coding marathon. Anyone with an interest in computer programming is able to come and work on projects for 24 hours straight, forming teams and sharing knowledge with each other. You don’t have to be a programmer--or even know how to code!</p>
					</div>
					<div className="faq" id="question3">
						<h3>Is there a code of conduct?</h3>
						<p>CincyHacks follows the <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</a>.</p>
					</div>
					<div className="faq" id="question4">
						<h3>What should I bring?</h3>
						<p>At the minimum, you'll need a student ID, laptop, and charger. We also recommend bringing a change of clothes, toiletries, and a sleeping bag or pillow. You won't be able to leave CincyHacks after the event starts, so make sure you have any medications you'll need.</p>
					</div>
					<div className="faq" id="question5">
						<h3>Who can come?</h3>
						<p>Any current high school is welcome to come to CincyHacks--all we ask is that you bring a school issued ID with you. Additionally, teachers and parents are welcome to come to the final awards ceremony.</p>
					</div>
					<div className="faq" id="question6">
						<h3>What else is at CincyHacks?</h3>
						<p>CincyHacks will have several booths where you can meet representatives from companies interested in helping students pursue technology. We will also have lightning talks about technology!</p>
					</div>
					<div className="faq" id="question7">
						<h3>I've never coded!</h3>
						<p>Great, no prior knowledge is required! You're more than welcome to learn as you go!</p>
					</div>
					<div className="faq" id="question8">
						<h3>How much does CincyHacks cost?</h3>
						<p>CincyHacks is completely free! We will be providing food, swag, snacks, and drinks at no cost.</p>
					</div>
					<div className="faq" id="question9">
						<h3>How long is CincyHacks?</h3>
						<p>You will have 24 hours to work on your projects at CincyHacks. We will also have activities before and after the block of coding, so expect to be there from Saturday morning to Sunday afternoon.</p>
					</div>
			</div>
		);
	}
}

export default FAQs;
