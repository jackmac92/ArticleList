import React from 'react'
import { connect } from 'react-redux'
import { getArticles } from '../actions'
import Link from '../components/Link'

let moreButton = ({ onClick }) => (
  <button onClick={onClick}>
    Load More
  </button>
)

const mapStateToProps = (state) => {
  return {pg: state.articles.length}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(getArticles())
    }
  }
}

const NextLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(moreButton)

export default NextLink