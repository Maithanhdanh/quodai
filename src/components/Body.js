import React, { useEffect, useState } from "react"
import { useStateValue } from "../context/StateProvider"
import "../style/css/Body.css"
import callAPIGetListIssues from "../helpers/issues"
import { FETCH_CONFIG } from "../config/vars"

function Body() {
	const [{}, dispatch] = useStateValue()
	const [issues, setIssues] = useState([])
	const [pageChange, setPageChange] = useState("1")
	const [currentPage, setCurrentPage] = useState(
		FETCH_CONFIG.DEFAULT_CURRENT_PAGE
	)
	useEffect(() => {
		try {
			const getListIssues = async () => {
				const listIssues = await callAPIGetListIssues(currentPage)
				setIssues(listIssues)
			}
			getListIssues()
		} catch (err) {
			console.log(err)
		}
	}, [currentPage])

	const nextPage = () => {
		setCurrentPage(currentPage + 1)
		setPageChange(currentPage + 1)
	}
	const prevPage = () => {
		if (currentPage - 1 < 1) {
			setCurrentPage(1)
			setPageChange(1)
		} else {
			setCurrentPage(currentPage - 1)
			setPageChange(currentPage - 1)
		}
	}
	const submitPage = (e) => {
		e.preventDefault()
		if (pageChange <= 0) return alert("Page must be greater than 0")
		setCurrentPage(pageChange)
	}
	const handlePageChange = (e) => {
		if (!e.target.value) return setPageChange("")
		setPageChange(parseInt(e.target.value))
	}

	const handleClickIssue = (issue) => {
		const clickIssue = document.getElementsByClassName(`${issue.id}`)[0]
		if(clickIssue.className.includes('highlighted')) {
			clickIssue.classList.remove("highlighted")
		} else {
			document.querySelector(".highlighted")?.classList.remove("highlighted")
			clickIssue.classList.add("highlighted")
		}
		dispatch({
			type: "SET_HIGHLIGHTED_ISSUES",
			highlightedIssues: issue,
		})
	}

	return (
		<div className="body">
			<div className="issues-list">
				<div className="issues-list__header">
					<h2>Issues list</h2>
				</div>
				<div className="issues-list__body">
					<ul>
						{issues?.map((issue) => (
							<li
								className={`${issue.id}`}
								key={issue.id}
								onClick={() => handleClickIssue(issue)}
							>
								<div className="issues-list__body__title">
									<i
										className="fa fa-exclamation"
										style={{
											color: issue.state === "open" ? "#499b5d" : "red",
										}}
									></i>
									<h3>{issue.title}</h3>
								</div>
								<div className="issues-list__body__detail">#{issue.id}</div>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="issues-page">
				<div className="issues-page__control">
					<button disabled={currentPage === 1} onClick={() => prevPage()}>
						<i className="fa fa-angle-double-left"></i> Previous
					</button>
					<form onSubmit={submitPage}>
						<input name="page" value={pageChange} onChange={handlePageChange} />
					</form>
					<button onClick={() => nextPage()}>
						Next <i className="fa fa-angle-double-right"></i>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Body
