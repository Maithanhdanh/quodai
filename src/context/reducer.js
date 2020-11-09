import { NUM_HIGHLIGHTED_ISSUES_SHOW } from "../config/vars"
export const initialState = {
	highlightedIssues: [],
	newNotiCount: 0,
}

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_HIGHLIGHTED_ISSUES":
			return {
				...state,
				highlightedIssues: [
					...new Set([action.highlightedIssues, ...state.highlightedIssues]),
				].slice(0, NUM_HIGHLIGHTED_ISSUES_SHOW),
			}

		case "RESET_HIGHLIGHTED_ISSUES":
			return {
				...state,
				newNotiCount: 0,
			}
		default:
			return state
	}
}

export default reducer
