import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NextMeetup } from './NextMeetup';

class App extends Component {
  render() {
    return (
      <div>
        <div className="nav">
          <div className="container-fluid">
            <h4 className="logo">CodeYQL</h4>
          </div>
        </div>

        <div className="next-meetup">
          <div className="container-fluid">
              <div className="description">
                <NextMeetup />
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
