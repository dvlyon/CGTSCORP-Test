import React from 'react'

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom'

import { Layout } from 'antd'

import Home from './views/Home'
import Instructions from './views/Instructions'

import 'antd/dist/antd.css'

import './App.scss'

const { Footer, Content } = Layout

const App = () =>
	<Router>
		<Layout>
			<Content>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path="/instructions">
						<Instructions />
					</Route>
					<Route>
						<NoMatch />
					</Route>
				</Switch>
			</Content>
			<Footer>
				<ul>
					<li>
						<Link to="/">Inicio</Link>
					</li>
					<li>
						<Link to="/instructions">Instrucctiones</Link>
					</li>
				</ul>
			</Footer>
		</Layout>
	</Router>

const NoMatch = () => <h2>404</h2>

export default App
