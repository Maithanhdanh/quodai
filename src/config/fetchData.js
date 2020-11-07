/**
 * @param {String} method 
 * @param {String} url 
 * 
 * @return {Array} response.json()
 */
export default async function fetchData(method = "GET", url = "" ) {
	try {
		const response = await fetch(url, {
			method: method,
			mode: "cors",
		})

		return response.json()
	} catch (err) {
		console.log(err)
		alert(`[${err.statusCode}] ${err.response.message}`)
		return null
	}
}
