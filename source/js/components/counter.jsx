import React, { createClass, PropTypes } from 'react'

export default createClass({
  propTypes: {
    count: PropTypes.number,
    handleDecrement: PropTypes.func,
    handleIncrement: PropTypes.func
  },

  render () {
    return <div>
             <span>Counter: {this.props.count} </span>
             <button onClick={this.props.handleDecrement}>-</button>
             <button onClick={this.props.handleIncrement}>+</button>
           </div>
  }
})
