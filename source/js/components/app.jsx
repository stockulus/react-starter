'use strict'

import * as counterActions from '../actions/counter'
import Counter from './counter.jsx'

import React, { createClass, PropTypes } from 'react'

export default createClass({
  propTypes: {
    store: PropTypes.object.isRequired
  },
  displayName: 'App',

  _handleIncrementClick () {
    this.props.store.dispatch(counterActions.increment())
  },
  _handleDecrementClick () {
    this.props.store.dispatch(counterActions.decrement())
  },

  componentDidMount () {
    this.unsubscribe = this.props.store.subscribe(() => {
      this.setState(this.props.store.getState())
    })
  },
  componentWillUnmount () {
    this.unsubscribe && this.unsubscribe()
  },
  getInitialState () {
    return this.props.store.getState()
  },

  render () {
    return <Counter
              count={this.state.counter}
              handleDecrement={this._handleDecrementClick}
              handleIncrement={this._handleIncrementClick} />
  }
})
