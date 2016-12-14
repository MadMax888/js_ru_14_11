import { ADD_COMMENT, LOAD_COMMENTS, LOAD_ALL_COMMENTS, SUCCESS, START } from '../constants'
import { arrayToMap, ReducerState } from '../utils'
import { Record, Map } from 'immutable'

const CommentModel = Record({
    id: null,
    text: null,
    user: null
})
const defaultState = new ReducerState({
    entities: new Map({})
})

export default (comments = defaultState, action) => {
    const { type, payload, response, error, generatedId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.setIn(['entities', generatedId], {...payload.comment, id: generatedId})

        case LOAD_COMMENTS + SUCCESS:
            return comments.mergeIn(['entities'], arrayToMap(response, CommentModel))

        case LOAD_ALL_COMMENTS + START:
          console.log("Start LOAd COmments")
          // comments.set('loading', true)
          console.log("Start LOAd COmments", comments.toJS())
          return comments.set('loading', true)

        case LOAD_ALL_COMMENTS + SUCCESS:
            return comments
                .set('entities', arrayToMap(response.records, CommentModel))
                .set('loading', false)
    }

    return comments
}
