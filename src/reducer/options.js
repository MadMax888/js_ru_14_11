import { OPTIONS_SELECTED } from '../constants'

export default (optionsState = [], action) => {
    const { type, payload } = action
		// console.log()
    switch (type) {
        case OPTIONS_SELECTED:
          // console.log("optionsState" + optionsState)
					// return unique(optionsState.concat(payload.arSelected))
					return payload.arSelected
    }

    return optionsState
}
