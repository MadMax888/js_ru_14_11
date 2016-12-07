import { DELETE_ARTICLE, CHANGE_ARTICLE_COMMENTS } from '../constants'

export function deleteArticle(articleId) {
    return {
        type: DELETE_ARTICLE,
        payload: {
            articleId
        }
    }
}

export function changeArticleComments(articleId) {
    return {
        type: CHANGE_ARTICLE_COMMENTS,
        payload: {
            articleId
        }
    }
}
