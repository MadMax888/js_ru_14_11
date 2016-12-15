import { ADD_COMMENT, LOAD_COMMENTS, LOAD_TOTAL_COMMENTS, LOAD_PAGINATION_COMMENTS, START, FAIL, SUCCESS } from '../constants'
import { Record, Map, List } from 'immutable'
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
export function loadPaginationComments (index, limit, offset) {
     return {
       type: LOAD_PAGINATION_COMMENTS,
       callAPI: `/api/comment?limit=${limit}&offset=${offset}`,
       payload: { index }
     }
}

export function loadTotalComments(commentsLimit) {
    return (dispatch) => {
        dispatch({
            type: LOAD_TOTAL_COMMENTS + START,
            payload: { commentsLimit },
            paginationPages : true
        })

        setTimeout(() => {
            jquery.get(`/api/comment`)
                .done(response => dispatch({
                    type: LOAD_TOTAL_COMMENTS + SUCCESS,
                    payload: { commentsLimit, total: response.total },
                    paginationPages : (( len ) => {
                                        let arr = []
                                        for (let i=0; i<len; i++) arr.push(({id:Date.now()+Math.random(),loaded:false,comments:[]}))
                                        return arr
                                      })(Math.ceil(response.total/commentsLimit))
                }))
                .fail(error => dispatch({
                    type: LOAD_TOTAL_COMMENTS + FAIL,
                    payload: { commentsLimit, error}
                }))
        }, 1000)
    }
}

export function checkAndLoadComments(articleId) {
    return (dispatch, getState) => {
        const { commentsLoaded, commentsLoading } = getState().articles.getIn(['entities', articleId])
        if (commentsLoaded || commentsLoading) return null
        dispatch({
            type: LOAD_COMMENTS,
            payload: { articleId },
            callAPI: `/api/comment?article=${articleId}`
        })
    }
}
