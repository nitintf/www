'use client'

import { motion } from 'framer-motion'

export const WavingHand = () => {
	return (
		<motion.div
			style={{
				marginBottom: '-20px',
				marginRight: '-45px',
				paddingBottom: '20px',
				paddingRight: '50px',
				display: 'inline-block',
				paddingLeft: '5px',
			}}
			animate={{ rotate: [0, 20, 0] }}
			transition={{
				duration: 0.6,
				ease: 'easeInOut',
				repeat: Infinity,
				repeatDelay: 0,
			}}>
			👋
		</motion.div>
	)
}
