import { createStore } from 'redux';
import data from '../data.js';

const initialState = {
	books: data,
	filteredBooks: [],
	searchStr: '',
	currentPage: 1,
	perpage: 5
};

function bookReducer(state = initialState, action){
	switch (action.type) {
	    case 'SEARCH':
			return Object.assign({}, state, {
		        searchStr: action.payload
		    })
		case 'SET_PERPAGE':
			return Object.assign({}, state, {
		        perpage: action.payload
		    })
		case 'SET_CURRENT_PAGE':
			return Object.assign({}, state, {
		        currentPage: action.payload
		    })
	    default:
	    	return state
	}
};

const store = createStore(bookReducer);

export default store;