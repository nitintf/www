import Image, { ImageProps } from 'next/image'
import React from 'react'
import fs from 'node:fs/promises'
import { getPlaiceholder } from 'plaiceholder'

interface CustomImageProps extends ImageProps {}

export const CustomImage: React.FC<CustomImageProps> = async ({
	src,
	alt,
	...props
}) => {
	const buffer = await fs.readFile(`public${src}`)
	const base64 = await getPlaiceholder(buffer)

	return (
		<Image
			{...props}
			src={src}
			alt={alt}
			placeholder='blur'
			blurDataURL={base64.base64}
		/>
	)
}
