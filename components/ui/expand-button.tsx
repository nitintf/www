'use client'

import React from 'react'
import { motion, Variants, cubicBezier } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

interface Props {
	isExpanded: boolean
	text: string
}

const buttonVariants: Variants = {
	expanded: {
		width: 'auto',
		transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
	},
	collapsed: {
		width: '44px',
		transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
	},
}

const textVariants: Variants = {
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
			ease: cubicBezier(0.6, 0.05, -0.01, 0.9),
			delay: 0.3,
		},
	},
	hide: {
		opacity: 0,
		x: -12,
		transition: {
			duration: 0.6,
			ease: cubicBezier(0.6, 0.05, -0.01, 0.9),
		},
	},
}

const ExpandButton: React.FC<Props> = ({ isExpanded, text }) => {
	return (
		<motion.div
			className={cn(
				'w-11 h-11 rounded-[28px] flex items-center bg-white overflow-hidden border-none justify-center transition duration-700',
				{
					'shadow-expand': isExpanded,
				}
			)}
			variants={buttonVariants}
			initial='collapsed'
			animate={isExpanded ? 'expanded' : 'collapsed'}>
			<motion.p
				className='mr-[40px] ml-[16px] text-link text-background whitespace-nowrap'
				variants={textVariants}
				initial='hide'
				animate={isExpanded ? 'show' : 'hide'}>
				{text}
			</motion.p>
			<div className='w-11 h-11 rounded-[18px] absolute flex right-0 items-center'>
				<svg
					id='Arrow.7'
					xmlns='http://www.w3.org/2000/svg'
					width='48.256px'
					height='18.256px'
					viewBox='0 0 38.256 18.256'>
					<g
						id='Group_7'
						data-name='Group 7'
						transform='translate(14.363 5.825)'>
						<path
							className='stroke-background'
							id='Path_10'
							data-name='Path 10'
							d='M14.581,7.05,7.05,14.581'
							transform='translate(-7.05 -7.012)'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='1.5'></path>
						<path
							className='stroke-background'
							id='Path_11'
							data-name='Path 11'
							d='M10,7l5.287.037.038,5.287'
							transform='translate(-7.756 -7)'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='1.5'></path>
					</g>
					<path
						id='Path_12'
						data-name='Path 12'
						d='M0,0H18.256V18.256H0Z'
						fill='none'></path>
				</svg>
			</div>
		</motion.div>
	)
}

export default ExpandButton
