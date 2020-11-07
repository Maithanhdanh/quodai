// <!-- Load env variable in non-production env -->
if (process.env.REACT_ENV !== "production") {
	require("dotenv").config()
}

// <!-- Default variable for API paginated issues -->
export const FETCH_CONFIG = {
	DEFAULT_CURRENT_PAGE: 1,
	PER_PAGE: 5,
}

// <!-- Navigate domain -->
export const NAVIGATION_DOMAIN = {
	DOMAIN: process.env.REACT_APP_API_URL_DOMAIN,
}

// <!-- Number of issues shown on clicked panel -->
export const NUM_HIGHLIGHTED_ISSUES_SHOW = 5
