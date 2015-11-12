import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import { createStore } from 'redux'
import test from 'tape'

import setupDOM from '../setup_dom'
import reducers from '../../js/reducers'
import App from '../../js/components/app'

setupDOM()

test('click "The Buttons"', (assert) => {
  const app = <App store={createStore(reducers)} />
  const output = ReactTestUtils.renderIntoDocument(app)

  const buttons = ReactTestUtils.scryRenderedDOMComponentsWithTag(
    output, 'button')

  assert.equal(buttons.length, 2, '2 buttons')

  ReactTestUtils.Simulate.click(buttons[1])
  ReactTestUtils.Simulate.click(buttons[1])

  assert.equal(output.state.counter, 2, 'has 2 click (1+1)')

  ReactTestUtils.Simulate.click(buttons[0])
  assert.equal(output.state.counter, 1, 'has 1 click (1+1-1)')
  assert.end()
})
