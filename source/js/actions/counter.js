'use strict'

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export function increment (value = 1) {
  return {
    type: INCREMENT_COUNTER,
    value
  }
}

export function decrement (value = 1) {
  return {
    type: DECREMENT_COUNTER,
    value
  }
}
