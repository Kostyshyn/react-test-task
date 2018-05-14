import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Pagination, Input } from 'react-materialize';
import SearchInput, {createFilter} from 'react-search-input';

import BookPreview from './BookPreview';

const FILTER_BY = ['name', 'author'];

class BookList extends Component {
  	constructor(props) {
	    super(props)
	    this.searchUpdated = this.searchUpdated.bind(this);
	    this.setPage = this.setPage.bind(this);
	    this.setPerpage = this.setPerpage.bind(this);
  	}

  	searchUpdated(str) {
  		this.props.onSearch(str);
  	}
  	setPage(page) {
  		this.props.onSetPage(parseInt(page));
  	}
  	setPerpage(e) {
  		this.props.onSetPerPage(parseInt(e.target.value));
  	}

  	componentDidMount(){
	
	}

  	render() {

  		let page = this.props.currentPage;
  		let perpage = this.props.perpage;

  		const filteredBooks = this.props.books.filter(createFilter(this.props.searchStr, FILTER_BY));
  		const booksOnPage = filteredBooks.slice((page - 1) * perpage, perpage * page); 
		const totalPages = Math.ceil(this.props.books.length / perpage);
  		console.log(filteredBooks)

	    const list = booksOnPage.map(book => {
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
				    				<Pagination items={ totalPages } activePage={ this.props.currentPage } maxButtons={ 8 }  onSelect={ (page) => { this.setPage(page) } } />
				    			</Col>
				    			<Input m={ 4 } s={ 12 } type='select' label='Perpage' defaultValue='1' onChange={ (e) => { this.setPerpage(e) } }>
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

// const mapStateToProps = state => ({
// 	books: state.books,
// 	searchStr: state.searchStr,
// 	currentPage: state.currentPage,
// 	perpage: state.perpage
// });

export default connect(state => state, dispatch => ({
	onSetPage: (page) => {
		dispatch({ type: 'SET_CURRENT_PAGE', payload: page });
	},
	onSetPerPage: (perpage) => {
		dispatch({ type: 'SET_PERPAGE', payload: perpage });
	},
	onSearch: (searchStr) => {
		dispatch({ type: 'SEARCH', payload: searchStr });
	}

}))(BookList);

