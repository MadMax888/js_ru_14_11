import { ADD_COMMENT } from '../constants'
import { Map } from 'immutable'

export default store => next => action => {
    // console.log('---', 'before: ', store.getState())
    // console.log('---', 'dispatching', action)
    const {articles, comments} = store.getState()
    const { type, payload } = action

    switch (type) {
      case ADD_COMMENT:
        const newCommentId = comments.toArray().length

        next({
          ...action,
          genId : newCommentId
        })
        break

      default:
        next(action)
    }
}
