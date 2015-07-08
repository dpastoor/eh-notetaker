import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile.js';
import {Router, Route, DefaultRoute} from 'react-router';


export default (
	//whenever we hit the root of our app, render the main component
	<Route name="app" path="/" handler={Main}>
		<Route name="profile" path="profile/:username" handler={Profile} />
		// default route to go to if no other routes match request
		<DefaultRoute handler={Home} />
	</Route>
);
