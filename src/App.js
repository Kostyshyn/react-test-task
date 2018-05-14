import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { Route } from 'react-router-dom';

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
    console.log(this.props.store)
    return (
      <div>
        <Navigation />
        <div className='wrapper'>

          <Route path='/' exact strict render={ ({ props }) => ( <BooksList /> ) } />
          <Route path='/books' exact render={ ({ props }) => ( <BooksList /> ) } />
          <Route path='/books/:id' exact strict component={ BookView } />

        </div>
      </div>
    );
  }
}

export default connect(state => ({ store: state }), dispatch => ({}))(App);

