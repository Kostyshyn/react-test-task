import React from 'react';
import { Navbar } from 'react-materialize';
import { Link } from 'react-router-dom';

const Navigation = ({ props }) => (
	<Navbar>
		<li><Link to='/books'>All books</Link></li>
	</Navbar>
);

export default Navigation;







