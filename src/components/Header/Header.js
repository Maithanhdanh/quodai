import React, { useEffect, useRef, useState } from "react"
import { NUM_HIGHLIGHTED_ISSUES_SHOW } from "../../config/vars"
import { useStateValue } from "../../context/StateProvider"
import useOnClickOutside from "../../hooks/useOutSideClick"
import "../../style/css/Header.css"

function Header() {
	const [{ highlightedIssues }, dispatch] = useStateValue()
	const [notiCount, setNotiCount] = useState(highlightedIssues?.length || 0)

	const [isShowNoti, setIsShowNoti] = useState(false)
	const [isShowNotiCount, setIsShowNotiCount] = useState(false)

	const [showAnimation, setShowAnimation] = useState(false)

	const ref = useRef()
	useOnClickOutside(ref, () => handleClickOutside())

	// <!-- Toggle counting animation -->
	useEffect(() => {
		setTimeout(() => {
			setShowAnimation(false)
		}, 500)
		setShowAnimation(true)
	}, [highlightedIssues])

	// <!-- Count highlighted issues -->
	useEffect(() => {
		if (highlightedIssues.length === 0) return null

		setIsShowNotiCount(true)
		if (notiCount + 1 > NUM_HIGHLIGHTED_ISSUES_SHOW)
			return setNotiCount(NUM_HIGHLIGHTED_ISSUES_SHOW)

		setNotiCount(notiCount + 1)
	}, [highlightedIssues])

	// <!-- Handle onClick icon -->
	const handleOnClickNoti = () => {
		setIsShowNoti(!isShowNoti)
		setIsShowNotiCount(false)
		setNotiCount(0)
	}

	// <!-- Handle onClick outside -->
	const handleClickOutside = () => {
		setIsShowNoti(!isShowNoti)
		setIsShowNotiCount(false)
		setNotiCount(0)
	}

	return (
		<div className="header">
			<div className="header__notification">
				<i className="far fa-bell" onClick={() => handleOnClickNoti()}>
					{isShowNotiCount && (
						<div
							className={`header__notification__count ${
								showAnimation && "noti"
							}`}
						>
							{notiCount}
						</div>
					)}
				</i>
				{isShowNoti && (
					<div className="header__notification__list" ref={ref}>
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
