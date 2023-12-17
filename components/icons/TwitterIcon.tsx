import * as React from 'react'
import { SVGProps } from 'react'
const TwitterIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 192 192'
		width='2em'
		height='2em'
		{...props}>
		<path
			stroke='hsl(0, 0%, 83%)'
			strokeLinejoin='round'
			strokeWidth={12}
			d='M126 38c-14.359 0-26 11.64-26 26a25.89 25.89 0 0 0 2.929 12C72 76 56 70 30 46c0 39.5 10 66 34 81-8 11.2-29.333 14.333-42 14.5 0 0 14 13.5 46 13.5 56 0 84-46.783 84-91l18-20h-27.386A25.892 25.892 0 0 0 126 38Z'
		/>
	</svg>
)
export default TwitterIcon
