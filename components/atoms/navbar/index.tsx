'use client'

import useScrollPosition from '@/hooks/useScrollPosition'
import { cn } from '@/lib/utils/cn'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'

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

	const navLinks = useMemo(() => {
		const links = [
			{
				href: '',
				label: 'Work',
			},
			{
				href: 'about',
				label: 'About',
			},
		]

		if (process.env.NEXT_PUBLIC_NOTES_PAGE_ENABLED === 'true') {
			links.push({
				href: 'notes',
				label: 'Notes',
			})
		}
		return links
	}, [])

	return (
		<header className='fixed z-nav top-0 left-0 right-0 w-full px-4'>
			<nav className='flex items-center justify-center max-w-content mt-8 relative z-nav m-auto'>
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
								ease: [0.6, 0.05, -0.01, 0.9],
								duration: 0.7,
							},
						}}
					/>
					{navLinks.map((link, index) => (
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
					{/* <li className='flex z-10'>
						<a
							href='https://mail.google.com/mail/?view=cm&fs=1&to=contact@nitinp.dev'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center h-[36px] px-3 md:px-6 z-10 text-link cursor-pointer'>
							Contact
						</a>
					</li> */}
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
