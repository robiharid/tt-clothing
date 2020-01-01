import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const HatsPage = () => (
	<div>
		<h1>HATS R HERE</h1>
	</div>
);

const App: React.FC = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/" component={HomePage} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
