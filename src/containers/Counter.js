import { connect } from 'react-redux'
import Counter from './../components/Counter.js'
import { increase } from './../actions.js'

function mapStateToProps(state) {
  return {
    value: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increase())
  }
}

// Action Creator
// const increaseAction = { type: 'INCREASE' }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)