import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS, FAIL , LOAD_ARTICLE_COMMENTS } from '../constants'
import jquery from 'jquery'

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {
            articleId, comment
        },
        generateId: true
    }
}

// export function loadAllComments () {
//     return {
//       type: LOAD_COMMENTS,
//       callAPI: "/api/comment"
//     }
// }
export function loadArticleComments(articleId) {
    return {
        type: LOAD_ARTICLE_COMMENTS,
        payload: {
            articleId
        }
    }
}


export function loadAllComments(id) {
    return (dispatch) => {
        dispatch({
            type: LOAD_COMMENTS + START,
            payload: { id }
        })

        setTimeout(() => {
            jquery.get(`/api/comment?article=${id}`)
                .done(response => dispatch({
                    type: LOAD_COMMENTS + SUCCESS,
                    payload: { id, comments: response }
                }))
                .fail(error => dispatch({
                    type: LOAD_COMMENTS + FAIL,
                    payload: { id, error}
                }))
        }, 1000)
    }
}
