'use client'

import { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

type Props = PropsWithChildren & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const ExternalLink = ({ children, href }: Props) => {
	return (
		<motion.a
			className='h-[38px] rounded-[18px] relative flex items-center overflow-hidden border-none transition-shadow ease-in-out duration-[550ms] px-3 self-start will-change-auto shadow-link cursor-pointer hover:shadow-linkhover'
			href={href}
			target='_blank'
			whileHover={'hover'}
			transition={{ duration: 0.8, ease: 'easeIn' }}>
			<p className='mx-[10px] prose text-foreground'>{children}</p>
			<motion.svg
				variants={{
					hover: {
						translateX: 2,
						translateY: -2,
					},
				}}
				id='Arrow.7'
				xmlns='http://www.w3.org/2000/svg'
				width='18.256px'
				height='18.256px'
				viewBox='0 0 18.256 18.256'>
				<g id='Group_7' data-name='Group 7' transform='translate(5.363 5.325)'>
					<path
						className='stroke-foreground'
						id='Path_10'
						data-name='Path 10'
						d='M14.581,7.05,7.05,14.581'
						transform='translate(-7.05 -7.012)'
						fill='none'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='1.5'></path>
					<path
						className='stroke-foreground'
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
			</motion.svg>
		</motion.a>
	)
}
