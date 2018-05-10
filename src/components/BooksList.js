import React, { Component } from 'react';
import { Row, Col, Pagination, Input } from 'react-materialize';
import SearchInput, {createFilter} from 'react-search-input';

import BookPreview from './BookPreview';

const FILTER_BY = ['name', 'author'];

class BookList extends Component {
  	constructor(props) {
	    super(props)
	    this.state = {
	    	books: [],
	      	searchStr: '',
	      	perpage: 5,
	      	page: 1
	    }
	    this.searchUpdated = this.searchUpdated.bind(this);
  	}

  	searchUpdated(str) {
    	this.setState({searchStr: str})
  	}

  	componentDidMount(){
	
	}

  	render() {

	    const filteredBooks = this.props.books.filter(createFilter(this.state.searchStr, FILTER_BY));
	    const list = filteredBooks.map(book => {
	    	return ( <BookPreview book={ book } key={ book.id } /> )
	    });

	    return (
	    	<React.Fragment>
		    	<Row>
			    	<Col offset='m2' m={ 8 } s={ 12 }>
			    		<SearchInput className='search-input' onChange={ this.searchUpdated } />
			    	</Col> 
		    	</Row>
		    	<Row>
			    	<Col offset='m2' m={ 8 } s={ 12 }>
			    		<div className='paginator'>
			    			<Row>
			    				<Col m={ 8 } s={ 12 }>
				    				<Pagination items={ 5 } activePage={ 1 } maxButtons={ 8 }  onSelect={ (page) => { console.log(page) } } />
				    			</Col>
				    			<Input m={ 4 } s={ 12 } type='select' label='Perpage' defaultValue='1' onChange={ (e) => { this.setState({ perpage: parseInt(e.target.value) }) } }>
								    <option value='5'>5</option>
								    <option value='10'>10</option>
								    <option value='20'>20</option>
								</Input>
							</Row>
			    		</div>
			    	</Col>
		    	</Row>
		    	<Row>
			    	<Col offset='m2' m={ 8 } s={ 12 }>
			    		{ list }
			    	</Col>
		    	</Row>
	    	</React.Fragment>
	    );
  	}
};


export default BookList;

