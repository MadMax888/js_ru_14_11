import { DAY_RANGE } from '../constants'

const initState = {
from: null,
  to: null
}
export default (state = initState, action) => {
    const { type, payload } = action
		// console.log()
    switch (type) {
        case DAY_RANGE:
          // console.log("optionsState" + optionsState)
          return  Object.assign({}, state, {
               from : payload.date.from
							,to : payload.date.to
            })
    }

    return state
}
