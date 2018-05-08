import React from 'react';
import { Card } from 'react-materialize';
import { Route, Link } from 'react-router-dom';

import BookView from './BookView';

const BookPreview = ({ book }) => (
	<Card 
        className='' 
        title={ book.id + '.' + book.name }
    >
        { book.date_of_publication }   
        <br /><Link to={ `/books/${ book.id }` }>Show book</Link>
        <Route exact path='/book/:id' render={ (props) => <BookView book='book' /> } />
    </Card>
);

export default BookPreview;


