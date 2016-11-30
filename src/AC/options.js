import { OPTIONS_SELECTED } from '../constants'

export function refreshOptionsSelected(arSelected) {
    return {
        type: OPTIONS_SELECTED,
        payload: {
            arSelected
        }
    }
}
