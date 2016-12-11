import { ADD_COMMENT, LOAD_COMMENTS, SUCCESS, START, FAIL } from '../constants'
// import { normalizedComments } from '../fixtures'
import { arrayToMap, ReducerState } from '../utils'
import { Record, Map } from 'immutable'

const CommentModel = Record ({
   id: null
  ,text: null
  ,user: null
})

const defaultComments = arrayToMap([], CommentModel)
// const defaultComments = arrayToMap(normalizedComments, CommentModel)

const defaultState = new ReducerState({
  entities: defaultComments,
  loading: false
})

export default (comments = defaultState, action) => {
    const { type, payload, response, error, generatedId } = action
    console.log('response CM -- ', response)
    switch (type) {
        case ADD_COMMENT:
            // return comments.set(generatedId, {...payload.comment, id: generatedId})
            // return comments.setIn(['entities', generatedId : {}])
          return comments.setIn(['entities', generatedId], {...payload.comment, id : generatedId})

        case LOAD_COMMENTS + START:
          console.log("Start LOAd COmments")
          comments.set('loading', true)
          console.log("Start LOAd COmments", comments.toJS())
          return comments.set('loading', true)

        case LOAD_COMMENTS + SUCCESS:
          return comments
              .set('entities', arrayToMap(response.records, CommentModel))
              .set('loading', false)
    }

    return comments
}
