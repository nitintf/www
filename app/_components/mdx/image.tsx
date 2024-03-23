import Image, { ImageProps } from 'next/image'

export const RoundedImage: React.FC<ImageProps> = (props) => {
	const { alt, ...rest } = props
	return <Image alt={props.alt} className='rounded-lg' {...rest} />
}
