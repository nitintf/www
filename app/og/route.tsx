import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
	const { searchParams } = req.nextUrl
	const postTitle = searchParams.get('title')
	const font = fetch(
		new URL('../../public/fonts/acorn.woff', import.meta.url)
	).then((res) => res.arrayBuffer())
	const fontData = await font

	return new ImageResponse(
		(
			<div
				style={{
					height: '100%',
					width: '100vw',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					justifyContent: 'center',
					backgroundImage: 'url(http://localhost:3000/og-bg.png)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}>
				<div
					style={{
						marginLeft: 190,
						marginRight: 190,
						display: 'flex',
						fontSize: 130,
						fontFamily: 'Acorn',
						letterSpacing: '-0.05em',
						fontStyle: 'normal',
						color: 'white',
						lineHeight: '120px',
						whiteSpace: 'pre-wrap',
					}}>
					{postTitle}
				</div>
			</div>
		),
		{
			width: 1920,
			height: 1080,
			fonts: [
				{
					name: 'Acorn',
					data: fontData,
					style: 'normal',
				},
			],
		}
	)
}
