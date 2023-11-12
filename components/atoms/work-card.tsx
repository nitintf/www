'use client'

import { cn } from '@/lib/utils/cn'
import Image from 'next/image'
import ExpandButton from '../ui/expand-button'
import { useState } from 'react'
import Link from 'next/link'

interface CardProps {
	src: string
	alt: string
	to: string
	className?: string
}

const WorkCard: React.FC<CardProps> = ({ src, alt, to, className }) => {
	const [isHovered, setHovered] = useState(false)
	const [isImageLoaded, setImageLoaded] = useState(false)

	// Render Button only when image has already loaded for better UX
	const handleImageLoad = () => {
		setImageLoaded(true)
	}

	return (
		<Link
			href={`/work/${to}`}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className={cn(
				className,
				'relative inline-flex rounded-3xl overflow-hidden max-h-[20rem] md:max-h-[550px] cursor-pointer max-w-full md:max-w-[47%]'
			)}>
			<Image
				src={src}
				width={800}
				height={670}
				alt={alt}
				onLoad={handleImageLoad}
			/>
			{isImageLoaded && (
				<div className='absolute left-5 bottom-5'>
					<ExpandButton isExpanded={isHovered} text={alt} />
				</div>
			)}
		</Link>
	)
}

export default WorkCard
