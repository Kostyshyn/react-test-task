import React, { Component } from 'react';
import { Button } from 'react-materialize';


class BookView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
  	// console.log(this.props.match.params.id)
    return (
    	<div>
      		<h1>Book! { this.props.match.params.id }</h1>
      		<Button waves='light'>Edit</Button>
      	</div>
    );
  }
}

export default BookView;