'use client'

import useScrollPosition from '@/hooks/useScrollPosition'
import { cn } from '@/lib/utils/cn'
import { cubicBezier, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const NAV_LINKS = [
	{
		href: '',
		label: 'Work',
	},
	{
		href: 'about',
		label: 'About',
	},
	{
		href: 'codelabs',
		label: 'Codelabs',
	},
	{
		href: 'notes',
		label: 'Notes',
	},
	{
		href: 'contact',
		label: 'Contact',
	},
]

const Navbar = () => {
	const pathname = usePathname()
	const { isScrolled } = useScrollPosition({ threshold: 70 })

	const currentElRef = useRef<Record<string, HTMLAnchorElement | null>>({})
	const [highlighterDimensions, setHighlighterDimensions] = useState({
		width: 200,
		left: 0,
	})

	const handleOnClick = (key: string) => () => {
		setHighlighterDimensions({
			width: currentElRef.current[key]?.offsetWidth as number,
			left: currentElRef.current[key]?.offsetLeft as number,
		})
	}

	useEffect(() => {
		const path = pathname?.split('/')[1]
		setHighlighterDimensions({
			width: currentElRef.current[path]?.offsetWidth as number,
			left: currentElRef.current[path]?.offsetLeft as number,
		})
	}, [pathname])

	return (
		<header className='fixed z-nav inset-0 w-full px-4'>
			<nav className='flex items-center justify-center max-w-content mt-8 relative z-nav'>
				<ul
					className={cn(
						'flex relative shadow-link rounded-[30px] p-[5px] transition-all duration-500',
						isScrolled &&
							'shadow-none bg-navBg backdrop-blur-[20px] backdrop-saturate-[1.9]'
					)}>
					<motion.span
						className='absolute h-[36px] rounded-3xl bg-highlight'
						initial={{
							opacity: 0,
						}}
						animate={{
							x: highlighterDimensions.left - 5.5,
							width: highlighterDimensions.width,
							opacity: 1,
							transition: {
								opacity: {
									duration: 1,
								},
							},
						}}
						transition={{
							ease: cubicBezier(0.35, 0.17, 0.3, 0.86),
							duration: 0.4,
						}}
					/>
					{NAV_LINKS.map((link, index) => (
						<li key={index} className='flex z-10'>
							<Link
								className='flex items-center h-[36px] px-3 md:px-6 z-10 text-link'
								href={`/${link.href}`}
								ref={(el) =>
									currentElRef.current
										? (currentElRef.current[link.href] = el)
										: null
								}
								onClick={handleOnClick(link.href)}>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
