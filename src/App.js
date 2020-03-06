import React, { Component } from 'react';
import './normalize.css'
import './App.css';
import { EndpointURL } from './components/EndpointURL';

import Events from "./data/events.json";
import Nav from './components/Nav';
import Section from './components/Section';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      view: 'Account',
      endpoint: 'https://webhook.site/1e98d4e0-a744-4a77-838f-322ac2c1d019'    
    }
    // this.handleChange = this.handleChange.bind(this)
  }

  // handleChange(e) { this.setState({ view: e.target.value })}

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="wrapper">
          <h1 className="title">Send Test Zoom Events</h1>
          <header className="header">
            <EndpointURL />
          </header>
          {Events.map((eventType, index) => (
            <section className="Event" key={index}>
              {/* make this a component with event prop and active state */}
              {Object.values(eventType).map((event, index) => (
                <Section url={this.state.endpoint} active={false} title={Object.getOwnPropertyNames(eventType)} events={event} path="test" key={index} />
              ))}
            </section>
          ))}
          <footer className="footer">
            @zoomus
          </footer>
        </div>
      </div>
    );
  }
}

export default App;