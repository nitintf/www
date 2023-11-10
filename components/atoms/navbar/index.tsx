'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { cubicBezier, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { IsDev } from '@/lib/env'
import { useTheme } from 'next-themes'

const NAV_LINKS = [
	{
		href: '',
		label: 'About',
	},
	{
		href: 'projects',
		label: 'Projects',
	},
	{
		href: 'codelabs',
		label: 'Codelabs',
	},
]

const Navbar = () => {
	const pathname = usePathname()
	const { setTheme, theme } = useTheme()

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
		<nav className='sm:h-navbar h-[100px] w-full flex items-center sm:justify-between justify-center'>
			<Image
				src={'/images/logo_gradient.webp'}
				width={35}
				height={35}
				alt='logo'
				onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
				priority
				className='rounded-full h-logo w-logo sm:relative sm:left-0 sm:bottom-0 fixed left-[30px] bottom-[30px]'
			/>
			<div className='relative border-2 border-border rounded-3xl flex p-[5px] bg-navBg'>
				<motion.div
					className='absolute h-[32px] rounded-2xl bg-highlight'
					animate={{
						x: highlighterDimensions.left - 5.5,
						width: highlighterDimensions.width,
					}}
					transition={{
						ease: cubicBezier(0.35, 0.17, 0.3, 0.86),
						duration: 0.4,
					}}
				/>
				{NAV_LINKS.map((link, index) => (
					<Link
						className='flex items-center h-8 px-4 z-10'
						key={link.label}
						href={`/${link.href}`}
						ref={(el) =>
							currentElRef.current
								? (currentElRef.current[link.href] = el)
								: null
						}
						onClick={handleOnClick(link.href)}>
						{link.label}
					</Link>
				))}
				{IsDev && (
					<Link className='flex items-center h-8 px-4 z-10' href={'/admin'}>
						Studio
					</Link>
				)}
			</div>
			<a
				className='contact'
				href='https://mail.google.com/mail/?view=cm&fs=1&to=contact@nitinp.dev'
				target='_blank'
				rel='noopener noreferrer'>
				Contact
			</a>
		</nav>
	)
}

export default Navbar
