'use client'

import { useEffect, useState } from 'react'
import ExpandButton from './ui/expand-button'
import { cn } from '@/lib/utils/cn'

export const BackToTop = () => {
	const [isExpanded, setIsExpanded] = useState(false)
	const [showButton, setShowButton] = useState(false)

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY
			const scrollHeight = document.documentElement.scrollHeight
			const clientHeight = document.documentElement.clientHeight
			const scrollPercentage =
				(scrollPosition / (scrollHeight - clientHeight)) * 100
			setShowButton(scrollPercentage > 40)
		}

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
