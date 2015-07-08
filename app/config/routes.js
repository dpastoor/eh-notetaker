import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import {Router, Route, DefaultRoute} from 'react-router';


export default (
	//whenever we hit the root of our app, render the main component
	<Route name="app" path="/" handler={Main}>
		// default route to go to if no other routes match request
		<DefaultRoute handler={Home} />
	</Route>
);
