import * as React from 'react'
import { SVGProps } from 'react'
const LinkIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		width='2em'
		height='2em'
		{...props}>
		<g stroke='hsl(0, 0%, 83%)' strokeLinecap='round' strokeWidth={1.5}>
			<path d='m14.162 18.488-.72.72a6.117 6.117 0 0 1-8.65-8.65l.72-.72M9.837 14.162l4.325-4.325M9.837 5.512l.721-.72a6.117 6.117 0 0 1 8.65 0m-.72 9.37.72-.72A6.099 6.099 0 0 0 20.998 9' />
		</g>
	</svg>
)
export default LinkIcon
