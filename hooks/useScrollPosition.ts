import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'

interface ScrollPositionProps {
	threshold: number
}

const useScrollPosition = ({ threshold }: ScrollPositionProps) => {
	const [isScrolled, setIsScrolled] = useState(false)
	const { scrollY } = useScroll()

	useMotionValueEvent(scrollY, 'change', (latest) => {
		setIsScrolled(latest >= threshold)
	})

	return { isScrolled }
}

export default useScrollPosition
