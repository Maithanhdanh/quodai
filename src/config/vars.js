if (process.env.REACT_ENV !== "production") {
	require("dotenv").config()
}

export const FETCH_CONFIG = {
    DEFAULT_CURRENT_PAGE:1,
    PER_PAGE:5
}

export const NAVIGATION_DOMAIN={
    DOMAIN: process.env.REACT_APP_API_URL_DOMAIN
}

export const NUM_HIGHLIGHTED_ISSUES_SHOW = 5