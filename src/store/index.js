import { createStore } from 'redux'
import reducer from '../reducer'

const store = createStore(reducer, {})

window.store = store
console.log("---- store")
console.log(window.store.state)
console.log("---- store")

export default store
