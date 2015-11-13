'use strict'

export default (state = [], action) => {
  let newState = [...state, action]

  return newState
}
