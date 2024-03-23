import * as React from 'react'
import { SVGProps } from 'react'

const HeartIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		width='1.5em'
		height='1.5em'
		{...props}>
		<path
			stroke='#4f576c'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M12 6c-1.8-2.097-4.806-2.745-7.06-.825-2.255 1.92-2.573 5.131-.802 7.402 1.472 1.888 5.927 5.87 7.387 7.16.163.144.245.216.34.245a.456.456 0 0 0 .258 0c.095-.029.176-.1.34-.245 1.46-1.29 5.915-5.272 7.387-7.16 1.77-2.27 1.492-5.502-.802-7.402C16.755 3.275 13.8 3.903 12 6Z'
			clipRule='evenodd'
		/>
	</svg>
)
export default HeartIcon
