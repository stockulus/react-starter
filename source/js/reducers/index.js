'use strict'

import counter from './counter'
import eventStore from './event_store'
import { combineReducers } from 'redux'

export default combineReducers({counter, eventStore})
