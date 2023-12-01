import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import IndexPage from './pages/index';
import ShowPage from './pages/show';
import Navbar from './components/navbar';
import NewPage from './pages/new';
import DB from './db';

class App extends Component {
  state = {
    db: new DB("notes"),
    notes: {
      notes: {}
    }
  }

  async componentDidMount() {
    const notes = await this.state.db.getAllNotes();

    this.setState({
      notes
    });
  }

  handleSave = (note) => {
    const ids = Object.keys(this.state.notes);
    const id = Math.max(...ids) + 1

    note['_id'] = id;

    const { notes } = this.state;

    this.setState({
      notes: {
        ...notes,
        [id]: note
      }
    });

    return id
  }

  render(){
    console.log(this.state)
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='app-content'>
            <Route exact path="/" component={(props) => <IndexPage {...props} notes={this.state.notes} />} />
            <Route exact path="/notes/:id" component={(props) => <ShowPage {...props} note={this.state.notes[props.match.params.id]} />} />
            <Route exact path="/new" component={(props) => <NewPage {...props} onSave={this.handleSave} />} />
          </div>      
        </div>
        </Router>
    );
  }
}

export default App;
