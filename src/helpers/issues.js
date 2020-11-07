import queryString from "query-string"
import fetchData from "../config/fetchData"
import ROUTE_MAP from "../config/urlBase"
import { FETCH_CONFIG, NAVIGATION_DOMAIN } from "../config/vars"

/**
 * structure fetch request 
 * @param {String} page ( default: reference to FETCH_CONFIG in config/vars )
 * @param {String} per_page ( default: reference to FETCH_CONFIG in config/vars )
 *
 * @return {Array} listIssues
 */
const callAPIGetListIssues = async (
	page = FETCH_CONFIG.DEFAULT_CURRENT_PAGE,
	per_page = FETCH_CONFIG.PER_PAGE
) => {
	const query = queryString.stringify({ page, per_page })

	const listIssues = await fetchData(
		ROUTE_MAP.ISSUES.METHOD,
		NAVIGATION_DOMAIN.DOMAIN + ROUTE_MAP.ISSUES.PATH + "?" + query
	)

	return listIssues
}
export default callAPIGetListIssues
