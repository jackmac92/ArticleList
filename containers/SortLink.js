import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { setSortParameter } from '../actions'

const Link = ({ active, children, onClick, orderAsc }) => {
  const order = (active) ? !orderAsc : orderAsc
  return (
    <a className="redux-link" href="#"
       onClick={e => {
         e.preventDefault()
         onClick(order)
       }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.parameter === state.sortParameter[0],
    orderAsc: state.sortParameter[1]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (active) => {
      dispatch(setSortParameter([ownProps.parameter, active]))
    }
  }
}

const SortLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default SortLink