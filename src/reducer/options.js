import { OPTIONS_SELECTED } from '../constants'
import { OPTIONS_ALL } from '../constants'

const initState = {
  optSelected: [],
  optionsFull: []
}
//лучше эти два редюсера объеденить в один filters
export default (state = initState, action) => {
    const { type, payload } = action
		// console.log()
    switch (type) {
        case OPTIONS_SELECTED:
          // console.log("optionsState" + optionsState)
          return  Object.assign({}, state, {
              optSelected : payload.arSelected
            })
				case OPTIONS_ALL:
				    // console.log("payload.articles-- " + payload.articles)
          return  Object.assign({}, state, {
              optionsFull : payload.articles.map(article => ({
              	            label: article.title,
              	            value: article.id
    	                  }))
            })
    }

    return state
}
