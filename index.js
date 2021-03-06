import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import configureStore from './store/'

let store = configureStore()

require('./styles/styles.scss')

render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
)
