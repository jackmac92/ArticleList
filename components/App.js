import React, {Component, PropTypes} from 'react'
import DevTools from '../containers/DevTools'
import SortedArticleList from '../containers/SortedArticleList'
import Footer from './Footer'


class App extends Component {
	constructor(props) {
		super(props)
	}


	render() {
		return (
			<div>
				<SortedArticleList />
				<Footer />
			</div>
		)
	}

}


export default App