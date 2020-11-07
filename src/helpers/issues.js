import { NAVIGATION_DOMAIN, FETCH_CONFIG } from "../config/vars"
import ROUTE_MAP from "../config/urlBase"
import fetchData from "../config/fetchData"
import queryString from "query-string"

const callAPIGetListIssues = async (
	page = FETCH_CONFIG.DEFAULT_CURRENT_PAGE,
	per_page = FETCH_CONFIG.PER_PAGE
) => {
	const query = queryString.stringify({page, per_page})

	const listIssues = await fetchData({
		method: ROUTE_MAP.ISSUES.METHOD,
		url: NAVIGATION_DOMAIN.DOMAIN + ROUTE_MAP.ISSUES.PATH + "?" + query,
	})

	return listIssues
}
export default callAPIGetListIssues
