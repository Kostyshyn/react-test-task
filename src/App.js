import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import data from './data.js';

import BooksList from './components/BooksList';
import Navigation from './components/Navigation';
import BookView from './components/BookView';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {


    return (
      <div>
        <Navigation />
        <div className='wrapper'>

          <Route path='/' exact strict render={ ({ props }) => ( <BooksList books={ data } /> ) } />
          <Route path='/books' exact render={ ({ props }) => ( <BooksList books={ data } /> ) } />
          <Route path='/books/:id' exact strict component={ BookView } />

        </div>
      </div>
    );
  }
}

export default App

