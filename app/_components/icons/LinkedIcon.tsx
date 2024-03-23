import * as React from 'react'
import { SVGProps } from 'react'
const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 192 192'
		width='2em'
		height='2em'
		{...props}>
		<rect
			width={132}
			height={132}
			x={30}
			y={30}
			stroke='hsl(0, 0%, 83%)'
			strokeWidth={12}
			rx={16}
		/>
		<path
			stroke='hsl(0, 0%, 83%)'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={12}
			d='M66 86v44'
		/>
		<circle cx={66} cy={64} r={8} fill='hsl(0, 0%, 83%)' />
		<path
			stroke='hsl(0, 0%, 83%)'
			strokeLinecap='round'
			strokeWidth={12}
			d='M126 130v-26c0-9.941-8.059-18-18-18v0c-9.941 0-18 8.059-18 18v26'
		/>
	</svg>
)
export default LinkedinIcon
