import React from 'react';
import { Card } from 'react-materialize';
import { Link } from 'react-router-dom';

const BookPreview = ({ book }) => (
	<Card 
        className='' 
        title={ book.id + '.' + book.name }
    >
        { book.date_of_publication }   
		<br />
		<br /><Link to={ `/books/${ book.id }` } className='btn waves-effect waves-light'>Show book</Link>
    </Card>
);

export default BookPreview;



