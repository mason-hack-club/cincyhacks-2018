import React from 'react'
import './App.css'

// Import sections
import Header from './sections/Header'
import About from './sections/About'
import FAQs from './sections/FAQs'
import Schedule from './sections/Schedule'
import Team from './sections/Team'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <FAQs />
        <Schedule />
        <Team />
      </div>
    )
  }
}

export default App
