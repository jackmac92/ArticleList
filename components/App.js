import React, {Component, PropTypes} from 'react'
import DevTools from '../containers/DevTools'


class App extends Component {
	constructor(props) {
		super(props)
	}


	render() {
		return (
			<div>
			  <DevTools />
			</div>
		)
	}

}


export default App