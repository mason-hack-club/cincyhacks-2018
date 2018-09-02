import React from 'react';
import './App.css';
import MediaQuery from 'react-responsive';
import ResponsiveMenu from 'react-responsive-navbar';

// Import sections
import Header from './sections/Header';
import About from './sections/About';
import FAQs from './sections/FAQs';
import Schedule from './sections/Schedule';
import Help from './sections/Help';
import Team from './sections/Team';
import Register from './sections/Register';
import SHeader from './mobile/SHeader';
import SAbout from './mobile/SAbout';
import SNavbar from './mobile/SNavbar';
import SReady from './mobile/SReady';
import STeam from './mobile/STeam';
import SFAQ from './mobile/SFAQ';
import SHelp from './mobile/SHelp';


class App extends React.Component {
    render() {
        return (
          <div style={{height: '100%'}}>
            <MediaQuery maxWidth={700}>
              <div id="mobile__container">
                <SHeader/>
                <SAbout/>
                <SReady/>
                <STeam/>
                <SFAQ />
                <SHelp />
                <div className="footer">
                  <p>Made with love by the CincyHacks team.</p>
                </div>
              </div>
            </MediaQuery>

            <MediaQuery minWidth={700}>
              <div id="website-container">
                <Header />
                <About />
                <Schedule />
                <Register />

                <FAQs />
                <Team />
                <Help />


                  <div className="footer">
                    <p>Made with love by the CincyHacks team.</p>
                  </div>
              </div>

            </MediaQuery>
          </div>
        );
    }
}

export default App;
