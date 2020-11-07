import React, { useEffect } from "react"
import "./style/css/App.css"
import Header from "./containers/Header"
import Body from "./components/Body"

function App() {
	return (
		<div className="App">
			<Header/>
			<Body/>
		</div>
	)
}

export default App
