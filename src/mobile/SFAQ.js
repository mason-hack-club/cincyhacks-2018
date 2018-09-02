import React from 'react';
import './Mobile.css';

class SFAQ extends React.Component {
  state = {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    ten: false,
    eleven: false,
    twelve: false,
    thirteen: false,
    two: false,
    one: false,
    two: false,
  }

  getSign(num) {
    var state;
    switch(num) {
      case 1:
      state = this.state.one;
      break;
      case 2:
      state = this.state.two;
      break;
      case 3:
      state = this.state.three;
      break;
      case 4:
      state = this.state.four;
      break;
      case 5:
      state = this.state.five;
      break;
      case 6:
      state = this.state.six;
      break;
      case 7:
      state = this.state.seven;
      break;
      case 8:
      state = this.state.eight;
      break;
      case 9:
      state = this.state.nine;
      break;
    }

    if (state === false) {
      return (<span id="expand">&nbsp;+&nbsp;</span>)
    }
    else {
      return (<span id="expand">&nbsp; - &nbsp;</span>)
    }
  }

  render() {
    return(
      <div className="faq__container">
        <h1>FAQs</h1>
        <div className="faq__one" onClick={ () => {
            this.setState( { one: !this.state.one } )
          }}>
          <p className="question">{this.getSign(1)} When and where is CincyHacks?</p>
          { this.state.one &&
            (<p className="answer">CincyHacks is being hosted at William Mason High School from Saturday, September 22nd to Sunday, September 23rd!</p>)
          }
        </div>

        <div className="faq__one" onClick={ () => {
            this.setState( { two: !this.state.two } )
          }}>
          <p className="question">{this.getSign(2)} What is a hackathon?</p>
          { this.state.two &&
            (<p className="answer">A hackathon is a type of coding marathon. Anyone with an interest in computer programming is able to come and work on projects for 24 hours straight, forming teams and sharing knowledge with each other. You don’t have to be a programmer--or even know how to code!</p>)
          }
        </div>

        <div className="faq__one" onClick={ () => {
            this.setState( { three: !this.state.three } )
          }}>
          <p className="question">{this.getSign(3)} Is there a code of conduct?
</p>
          { this.state.three &&
            (<p className="answer">CincyHacks follows the <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</a>.</p>)
          }
        </div>
        <div className="faq__one" onClick={ () => {
            this.setState( { four: !this.state.four } )
          }}>
          <p className="question">{this.getSign(4)} What should I bring?</p>
          { this.state.four &&
            (<p className="answer">At the minimum, you'll need a student ID, laptop, and charger. We also recommend bringing a change of clothes, toiletries, and a sleeping bag or pillow. You won't be able to leave CincyHacks after the event starts, so make sure you have any medications you'll need.</p>)
          }
        </div>
        <div className="faq__one" onClick={ () => {
            this.setState( { five: !this.state.five } )
          }}>
          <p className="question">{this.getSign(5)} Who can come?</p>
          { this.state.five &&
            (<p className="answer">Any current high school is welcome to come to CincyHacks--all we ask is that you bring a school issued ID with you. Additionally, teachers and parents are welcome to come to the final awards ceremony.</p>)
          }
        </div>
        <div className="faq__one" onClick={ () => {
            this.setState( { six: !this.state.six } )
          }}>
          <p className="question">{this.getSign(6)} What else is at CincyHacks?</p>
          { this.state.six &&
            (<p className="answer">CincyHacks will have several booths where you can meet representatives from companies interested in helping students pursue technology. We will also have lightning talks about technology!</p>)
          }
        </div>
        <div className="faq__one" onClick={ () => {
            this.setState( { seven: !this.state.seven } )
          }}>
          <p className="question">{this.getSign(7)} I've never coded before!</p>
          { this.state.seven &&
            (<p className="answer">Great, no prior knowledge is required! You're more than welcome to learn as you go!</p>)
          }
        </div>
        <div className="faq__one" onClick={ () => {
            this.setState( { eight: !this.state.eight } )
          }}>
          <p className="question">{this.getSign(8)} How much does CincyHacks cost?</p>
          { this.state.eight &&
            (<p className="answer">CincyHacks is completely free! We will be providing food, swag, snacks, and drinks at no cost.</p>)
          }
        </div>
        <div className="faq__one" onClick={ () => {
            this.setState( { nine: !this.state.nine } )
          }}>
          <p className="question">{this.getSign(9)} How long is CincyHacks?</p>
          { this.state.nine &&
            (<p className="answer">You will have 24 hours to work on your projects at CincyHacks. We will also have activities before and after the block of coding, so expect to be there from Saturday afternoon to Sunday evening.</p>)
          }
        </div>

      </div>
    )
  }
}

export default SFAQ;
