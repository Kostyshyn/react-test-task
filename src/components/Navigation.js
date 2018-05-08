import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

const Navigation = ({  }) => (
	<Navbar>
		<NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
		<NavItem href=''>Components</NavItem>
	</Navbar>
);

export default Navigation;







