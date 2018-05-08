import React, { Component } from 'react';
import { Card } from 'react-materialize';


class BookView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
  	console.log(this.props.match.params.id)
    return (
      <h1>Book! { this.props.book.name } number { this.props.match.params.id }</h1>
    );
  }
}

export default BookView;