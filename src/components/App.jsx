import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SearchResultPage from '../containers/SearchResultPage.jsx'
import Artist from '../containers/Artist.jsx'
import { HomePage } from '../containers/HomePage.jsx'

import '../assets/styles/components/App.css'
import Footer from './Footer.jsx'
const App = () => {
	return (
		<BrowserRouter>
			<Footer>
				<Switch>
					<Route exacth path='/search' component={SearchResultPage} />
					<Route exact path='/artist' component={Artist} />
					<Route path='/' component={HomePage} />
				</Switch>
			</Footer>
		</BrowserRouter>
	)
}

export default App
