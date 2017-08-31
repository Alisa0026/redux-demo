import React, { Component, PropTypes } from 'react'

export default class Counter extends Component {
  
  static propTypes = {
    value: PropTypes.number,
    onIncreaseClick: PropTypes.func
  }

  render() {
    const { value, onIncreaseClick } = this.props

    return (
      <div>
        <p>{value}</p>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}