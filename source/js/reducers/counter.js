'use strict'

import {INCREMENT_COUNTER, DECREMENT_COUNTER} from '../actions/counter'

export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + (action.value || 1)
    case DECREMENT_COUNTER:
      return state - (action.value || 1)
    default:
      return state
  }
}
