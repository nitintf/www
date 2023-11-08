'use client'

import { AnimatePresence, Variants, motion } from 'framer-motion'
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { usePathname } from 'next/navigation'
import React, { PropsWithChildren, useContext, useRef } from 'react'

const variants: Variants = {
	initial: { y: 50, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
	},
	exit: { y: 50, opacity: 0 },
}

export const AnimateMain: React.FC<PropsWithChildren> = ({ children }) => {
	const route = usePathname()
	return (
		<AnimatePresence>
			<motion.main
				key={route}
				initial='initial'
				animate='animate'
				exit='exit'
				transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
				variants={variants}
				className='relative max-w-[1300px] w-full flex items-center justify-center md:container md:mt-20 mt-10'>
				<FrozenRouter>{children}</FrozenRouter>
			</motion.main>
		</AnimatePresence>
	)
}

function FrozenRouter(props: PropsWithChildren<{}>) {
	const context = useContext(LayoutRouterContext)
	const frozen = useRef(context).current

	return (
		<LayoutRouterContext.Provider value={frozen}>
			{props.children}
		</LayoutRouterContext.Provider>
	)
}
