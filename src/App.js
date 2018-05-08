import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, Col } from 'react-materialize';

import { BrowserRouter, Route, Link } from 'react-router-dom';

import SearchInput, {createFilter} from 'react-search-input';

import data from './data.js';

import BookPreview from './components/BookPreview';
import Navigation from './components/Navigation';
import BookView from './components/BookPreview';


const KEYS_TO_FILTERS = ['name', 'author'];

console.log(data)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchStr: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  searchUpdated(str) {
    this.setState({searchStr: str})
  }

  render() {
    const filteredBooks = data.filter(createFilter(this.state.searchStr, KEYS_TO_FILTERS));

    return (
      <div>
        <Navigation />
        <div className='wrapper'>
          <Row>
            <Col offset='m2' m={ 8 } s={ 12 }>
              <SearchInput className="search-input" onChange={this.searchUpdated} />
            </Col> 
          </Row>
          <Row>
            <Col offset='m2' m={ 8 } s={ 12 }>
              { filteredBooks.map(book => {

                return ( <BookPreview book={ book } key={ book.id } /> )

              }) }
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
