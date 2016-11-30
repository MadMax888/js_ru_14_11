import DAY_RANGE from '../constants'

export function dateToggle (date) {
	return {
		 type : "DAY_RANGE"
		,payload : {
			date
		}
	}
}
