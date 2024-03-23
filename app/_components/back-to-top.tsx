'use client'

import { useEffect, useState } from 'react'
import ExpandButton from './expand-button'
import { cn } from '@/lib/utils/cn'

/**
 * Renders a button that allows the user to scroll back to the top of the page.
 *
 * @return {JSX.Element} The JSX element representing the back to top button.
 */
export const BackToTop = () => {
	const [isExpanded, setIsExpanded] = useState(false)
	const [showButton, setShowButton] = useState(false)

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	const handleScroll = () => {
		const scrollPosition = window.scrollY
		const scrollHeight = document.documentElement.scrollHeight
		const clientHeight = document.documentElement.clientHeight
		const scrollPercentage =
			(scrollPosition / (scrollHeight - clientHeight)) * 100
		setShowButton(scrollPercentage > 40)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<button
			onMouseEnter={() => setIsExpanded(true)}
			onMouseLeave={() => setIsExpanded(false)}
			onClick={scrollToTop}
			className={cn('right-12 bottom-7', {
				fixed: showButton,
				hidden: !showButton,
			})}>
			<ExpandButton text='Back To Top' isExpanded={isExpanded} />
		</button>
	)
}
