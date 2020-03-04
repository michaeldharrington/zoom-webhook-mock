import React, { Component } from 'react';
import './normalize.css'
import './App.css';
import { RequestList } from './components/Request';
import { EndpointURL } from './components/EndpointURL';

import Events from "./data/events.json";
import Nav from './components/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { view: 'Account' }
    // this.handleChange = this.handleChange.bind(this)
  }

  // handleChange(e) { this.setState({ view: e.target.value })}

  render() {
    return (
      <div className="App">
        <Nav />
        <h1 className="title">Send Test Zoom Events</h1>
        {/* <p>
          View: 
          {this.state.view}
        </p> */}
        {/* <select id="event" value={this.state.view} onChange={this.handleChange}>
          {Events.map((eventType, index) => (
            <option className="option" value={Object.getOwnPropertyNames(eventType)} key={index}>{Object.getOwnPropertyNames(eventType)}</option>
          ))}
        </select> */}
        <header className="header">
          <EndpointURL />
        </header>

        {Events.map((eventType, index) => (
          <section className="Event" key={index}>
            <h2 className="eventTitle">{Object.getOwnPropertyNames(eventType)} Events</h2>
            {Object.values(eventType).map((event, index) => (
              <RequestList events={event} path="test" key={index} />
            ))}
          </section>
        ))}
        <footer>
          @zoomus
        </footer>
      </div>
    );
  }
}

export default App;