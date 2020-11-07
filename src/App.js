import React, { useEffect } from "react"
import "./style/css/App.css"
import Header from "./components/Header/Header"
import Body from "./containers/Body/Body"

function App() {
	return (
		<div className="App">
			<Header />
			<Body />
		</div>
	)
}

export default App
