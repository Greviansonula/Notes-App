import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import IndexPage from './pages/index';
import ShowPage from './pages/show';

class App extends Component {
  state = {
    notes: {
      1: {
        _id: 1,
        title: "Hello, world",
        body: "This is the nody of my note",
        updatedAt: new Date()
      },
      2: {
        _id: 2,
        title: "Mechanics of React App",
        body: "This is the nody of my note",
        updatedAt: new Date()
      },
      3: {
        _id: 3,
        title: "This is AI",
        body: "This is the nody of my note",
        updatedAt: new Date()
      },
      4: {
        _id: 4,
        title: "We are taking over the world",
        body: "This is the nody of my note",
        updatedAt: new Date()
      },
    }
  }

  render(){
    return (
        <div className='App'>
          <Router>
            <Routes>
              <Route exact path="/" element={(props) => <IndexPage {...props} notes={this.state.notes}/>} />
              <Route exact path="/notes/:id" element={<ShowPage notes={this.state.notes} />} />
            </Routes>
          </Router>
        </div>
    );
  }
}

export default App;
