import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'
import { Map } from 'immutable'

const defaultComments = normalizedComments.reduce((acc, comment) => {
    return acc.set(comment.id, comment)
}, new Map({}) )

export default (comments = defaultComments, action) => {
    const { type, payload, response, error, genId } = action

    switch (type) {
      case ADD_COMMENT :
        // console.log("Reducer COMMENT ADD = " , action)
        // console.log("Reducer COMMENT OLD C = " , comments)
        //
        // console.log("Reducer COMMENT NEW C = " , comments.toList().push({
        //   "id" : genId,
        //   "user": payload.user,
        //   "text": payload.text
        // }).toMap())

        //так это не работает, но и не надо, просто comments.set(genId, {...})
        return comments.toList().push({
          "id" : genId,
          "user": payload.user,
          "text": payload.text
        }).toMap()

    }

    return comments
}
