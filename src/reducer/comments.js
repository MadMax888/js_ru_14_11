import { ADD_COMMENT, LOAD_COMMENTS, LOAD_TOTAL_COMMENTS, LOAD_PAGINATION_COMMENTS, SUCCESS, START } from '../constants'
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
    const { type, payload, response, error, generatedId, paginationPages } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.setIn(['entities', generatedId], {...payload.comment, id: generatedId})

        case LOAD_COMMENTS + SUCCESS:
            return comments.mergeIn(['entities'], arrayToMap(response, CommentModel))

        case LOAD_PAGINATION_COMMENTS + SUCCESS:
          console.log("LOAd COmments")
          // comments.set('loading', true)
          console.log("LOAd  PG COmments ", response.records)
          return comments.setIn(['paginationPages', payload.index]).comments.concat(response.records)
          // return comments.setIn(['paginationPages', payload.index, 'comments'], response.records)
          //               //  .setIn(['paginationPages'], payload.index, ['loaded'], true)

        case LOAD_TOTAL_COMMENTS + SUCCESS:
            return comments
                .set('total', payload.total)
                .set('totalLoaded', true)
                .set('paginationPages', paginationPages)
    }

    return comments
}
