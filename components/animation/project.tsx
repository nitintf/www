'use client'

import { cn } from '@/lib/utils/cn'
import { Variants, cubicBezier, motion } from 'framer-motion'
import Link from 'next/link'
import { PropsWithChildren, useState } from 'react'

const containerVariant: Variants = {
	initial: {
		y: 30,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.8,
			ease: cubicBezier(0.6, 0.05, -0.01, 0.9),
		},
	},
}

export default function ProjectWrapper({ children }: PropsWithChildren) {
	const [isHovered, setHovered] = useState(false)

	return (
		<motion.div
			key={'project-container'}
			className='relative'
			variants={containerVariant}
			initial='initial'
			animate='animate'>
			<Link
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				href={'/'}
				className='absolute w-10 h-10 top-9 rounded-full flex items-center justify-center border-border border-2 left-[50%] hover:shadow-link transition-shadow duration-500 -translate-x-[50%]'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='11.644'
					height='11.385'
					viewBox='0 0 11.644 11.385'>
					<g
						id='Group_40'
						data-name='Group 40'
						transform='translate(-954.372 -59.349)'>
						<g
							id='Group_39'
							data-name='Group 39'
							transform='translate(-6035.801 -1683.588)'>
							<line
								id='Line_6'
								data-name='Line 6'
								y2='12.101'
								transform='translate(7000.403 1744.351) rotate(45)'
								fill='none'
								stroke='#F0F2F8'
								strokeLinecap='round'
								strokeWidth='2'></line>
							<line
								id='Line_7'
								data-name='Line 7'
								y2='12.101'
								transform='translate(7000.144 1752.908) rotate(135)'
								fill='none'
								stroke='#F0F2F8'
								strokeLinecap='round'
								strokeWidth='2'></line>
						</g>
					</g>
				</svg>
			</Link>
			<div
				className={cn(
					'absolute top-32 transition-transform duration-700 ease-custom w-full px-3 md:px-16 pb-xl',
					{
						'translate-y-5': isHovered,
					}
				)}>
				{children}
			</div>
		</motion.div>
	)
}
