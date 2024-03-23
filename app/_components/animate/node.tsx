'use client'

import { cn } from '@/lib/utils/cn'
import { CustomDomComponent, cubicBezier, motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
	delay?: number
	duration?: number
	ease?: (t: number) => number
	as?: keyof JSX.IntrinsicElements
	className?: string
}

export default function NodeAnimate({
	children,
	delay = 0,
	duration = 0.5,
	ease = cubicBezier(0.6, 0.05, -0.01, 0.9),
	as: Component = 'div',
	className,
}: Props) {
	const MotionComponent = motion(Component) as CustomDomComponent<
		JSX.IntrinsicElements[keyof JSX.IntrinsicElements]
	>
	return (
		<MotionComponent
			className={cn('relative', className)}
			initial={{ y: -20, opacity: 0 }}
			animate={{
				y: 0,
				opacity: 1,
			}}
			transition={{
				duration,
				ease,
				delay,
			}}>
			{children}
		</MotionComponent>
	)
}
