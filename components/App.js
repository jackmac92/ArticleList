import React, {Component, PropTypes} from 'react'
import DevTools from '../containers/DevTools'
import SortedArticleList from '../containers/SortedArticleList'
import MoreButton from '../containers/MoreButton'


class App extends Component {
	constructor(props) {
		super(props)
	}


	render() {

				// <DevTools />
		return (
			<div>
				<SortedArticleList />
				<MoreButton />
			</div>
		)
	}

}


export default App