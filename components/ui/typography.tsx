/**
 * @deprecated This file is deprecated and should not be used.
 */
import React from 'react'
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'

export interface TypographyProps
	extends React.HTMLAttributes<HTMLElement>,
		VariantProps<typeof typographyVariance> {
	children: React.ReactNode
}

const typographyVariance = cva(
	'leading-relaxed [&>span]:font-moranga [&>span]:text-foreground text-secondary',
	{
		variants: {
			as: {
				h1: 'text-[25px] leading-[30px] font-light md:text-[40px] md:leading-[60px]',
				h2: 'text-3xl font-medium sm:text-2xl sm:leading-normal xs:text-lg xs:leading-snug',
				h3: 'text-2xl font-medium sm:text-xl sm:leading-normal xs:text-base xs:leading-snug',
				h4: 'text-xl font-light sm:text-lg sm:leading-normal xs:text-sm xs:leading-snug',
				h5: 'text-lg font-light sm:text-base sm:leading-normal xs:text-sm xs:leading-snug',
				h6: 'text-base font-light sm:text-sm sm:leading-normal xs:text-xs xs:leading-snug',
				p: 'text-sm font-medium sm:text-xs sm:leading-normal xs:text-xs xs:leading-snug',
			},
		},
		defaultVariants: {
			as: 'h1',
		},
	}
)

export const Typography: React.FC<TypographyProps> = ({
	children,
	as,
	...props
}) => {
	const Component = as ?? 'h1'
	return (
		<Component className={cn(typographyVariance({ as }), '')} {...props}>
			{children}
		</Component>
	)
}
