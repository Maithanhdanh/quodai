import React, { useEffect, useState } from "react"
import { useStateValue } from "../../context/StateProvider"
import "../../style/css/Header.css"

function Header() {
	const [isShowNoti, setIsShowNoti] = useState(false)
	const [{ highlightedIssues }, dispatch] = useStateValue()

	// <!-- Toggle counting animation -->
	useEffect(() => {
		setTimeout(() => {
			document
				.querySelector(".header__notification__count")
				.classList.remove("noti")
		}, 500)
		document.querySelector(".header__notification__count").classList.add("noti")
	}, [highlightedIssues])

	return (
		<div className="header">
			<div className="header__notification">
				<i className="far fa-bell" onClick={() => setIsShowNoti(!isShowNoti)}>
					<div className="header__notification__count">
						{highlightedIssues?.length}
					</div>
				</i>
				{isShowNoti && (
					<div className="header__notification__list">
						<ul>
							{highlightedIssues?.map((issue) => (
								<li key={issue.id}>
									[#{issue.id}] - {issue.title}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}

export default Header
