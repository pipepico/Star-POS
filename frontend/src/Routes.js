import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import NotFound from './components/NotFound';
import Profile from './components/profile/Profile';
import Pos from './components/pos/POS';
import Contacts from './components/Contact';
const Routes = () => (
	<Switch>
		<Route exact path={'/'} component={Home} />
		<Route exact path={'/signup'} component={Signup} />
		<Route exact path={'/login'} component={Login} />
		<Route exact path={'/profile'} component={Profile} />
		<Route exact path={'/pos'} component={Pos} />
		<Route exact path={'/contacts'} component={Contacts} />
		<Route componet={NotFound} />
	</Switch>
);

export default Routes;
