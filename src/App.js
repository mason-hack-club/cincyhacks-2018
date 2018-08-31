import React from 'react';
import './App.css';

// Import sections
import Header from './sections/Header';
import About from './sections/About';
import FAQs from './sections/FAQs';
import Schedule from './sections/Schedule';
import Help from './sections/Help';
import Team from './sections/Team';
import Register from './sections/Register';

class App extends React.Component {
    render() {
        return (
            <div id="website-container">
                <Header />
                <About />
                <FAQs />
                <Team />
                <Register />
            </div>
        );
    }
}

export default App;