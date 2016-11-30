import { OPTIONS_SELECTED } from '../constants'
import { OPTIONS_ALL } from '../constants'

export function refreshOptionsSelected(arSelected) {
    return {
        type: OPTIONS_SELECTED,
        payload: {
            arSelected
        }
    }
}

export function optionsAll(articles) {
    return {
        type: OPTIONS_ALL,
        payload: {
            articles
        }
    }
}
