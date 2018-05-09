import React, { Component } from 'react';
import { Row, Col, Pagination, Input } from 'react-materialize';
import SearchInput, {createFilter} from 'react-search-input';

import BookPreview from './BookPreview';

const KEYS_TO_FILTERS = ['name', 'author'];

class BookList extends Component {
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

    const filteredBooks = this.props.books.filter(createFilter(this.state.searchStr, KEYS_TO_FILTERS));

    return (
    	<React.Fragment>
	    	<Row>
		    	<Col offset='m2' m={ 8 } s={ 12 }>
		    		<SearchInput className='search-input' onChange={this.searchUpdated} />
		    	</Col> 
	    	</Row>
	    	<Row>
		    	<Col offset='m2' m={ 8 } s={ 12 }>
		    		<div className='paginator'>
		    			<Pagination items={3} activePage={1} maxButtons={8} onSelect={ (page) => { console.log(page) } } />
		    			<Input s={12} type='select' label='Perpage' defaultValue='1' onChange={ (e) => { console.log(e.target.value) } }>
						    <option value='5'>5</option>
						    <option value='10'>10</option>
						    <option value='20'>20</option>
						</Input>
		    		</div>
		    	</Col>
	    	</Row>
	    	<Row>
		    	<Col offset='m2' m={ 8 } s={ 12 }>
			    	{ filteredBooks.map(book => {
			    		return ( <BookPreview book={ book } key={ book.id } /> )
			    	}) }
		    	</Col>
	    	</Row>
    	</React.Fragment>
    );
  }
};


export default BookList;

