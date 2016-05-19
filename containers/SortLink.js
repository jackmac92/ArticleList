import { connect } from 'react-redux'
import { setSortParameter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.sortParameter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setSortParameter(ownProps.filter))
    }
  }
}

const SortLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default SortLink