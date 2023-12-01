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
    db: new DB('notes-react'),
    notes: {},
    loading: true
  }

  async componentDidMount() {
    const notes = await this.state.db.getAllNotes();

    this.setState({
      notes,
      loading: false
    });
  }

  handleSave =async (note) => {
    let { id } = await this.state.db.createNote(note);

    const { notes } = this.state;

    this.setState({
      notes: {
        ...notes,
        [id]: note
      }
    });

    return id
  }

  renderContext() {
    if (this.state.loading) {
      return <h2>Loading...</h2>
    }
    return (
      <div className='app-content'>
        <Route exact path="/" component={(props) => <IndexPage {...props} notes={this.state.notes} />} />
        <Route exact path="/notes/:id" component={(props) => <ShowPage {...props} note={this.state.notes[props.match.params.id]} />} />
        <Route exact path="/new" component={(props) => <NewPage {...props} onSave={this.handleSave} />} />
      </div>
    )
  }

  render(){
    console.log(this.state)
    return (
      <Router>
        <div className='App'>
          <Navbar />
          { this.renderContext() } 
        </div>
        </Router>
    );
  }
}

export default App;
