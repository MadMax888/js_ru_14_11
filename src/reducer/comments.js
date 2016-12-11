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

const defaultState = new ReducerState({
  entities: defaultComments,
  loading: false
})

export default (comments = defaultState, action) => {
    const { type, payload, response, error, generatedId } = action
    switch (type) {
        case ADD_COMMENT:
          return comments.setIn(['entities', generatedId], {...payload.comment, id : generatedId})

        case LOAD_COMMENTS + START:
          return comments.set('loading', true)

        case LOAD_COMMENTS + SUCCESS:
          return comments
              // .set('entities', arrayToMap(response.records, CommentModel))
              // .set('entities', arrayToMap(payload.comments, CommentModel))
              // .update('entities',ent => ent. arrayToMap(payload.comments, CommentModel))
              .update('entities', prop => prop.merge(arrayToMap(payload.comments, CommentModel)))
              .set('loading', false)
    }

    return comments
}
