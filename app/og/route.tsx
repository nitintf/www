import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
	const { searchParams } = req.nextUrl
	const pageTitle = searchParams.get('title')
	const pageDesc = searchParams.get('desc')
	const primaryFont = fetch(
		new URL('../../public/fonts/acorn.woff', import.meta.url)
	).then((res) => res.arrayBuffer())
	const primaryFontData = await primaryFont

	const secondaryFont = fetch(
		new URL('../../public/fonts/gt.woff', import.meta.url)
	).then((res) => res.arrayBuffer())
	const secondaryFontData = await secondaryFont

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
					backgroundColor: 'hsl(216, 28%, 7%)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}>
				<h1
					style={{
						position: 'absolute',
						top: 10,
						right: 100,
						fontSize: 50,
						fontFamily: 'Acorn',
						letterSpacing: '-0.05em',
						fontStyle: 'normal',
						color: 'white',
						lineHeight: '120px',
					}}>
					nitinp.dev
				</h1>
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
					{pageTitle}
				</div>
				<p
					style={{
						marginLeft: 190,
						marginRight: 190,
						marginTop: 50,
						fontSize: 50,
						fontFamily: 'GT',
						letterSpacing: '-0.05em',
						fontStyle: 'normal',
						color: 'white',
						lineHeight: '60px',
						whiteSpace: 'pre-wrap',
					}}>
					{pageDesc}
				</p>
			</div>
		),
		{
			width: 1920,
			height: 1080,
			fonts: [
				{
					name: 'Acorn',
					data: primaryFontData,
					style: 'normal',
				},
				{
					name: 'GT',
					data: secondaryFontData,
					style: 'normal',
				},
			],
		}
	)
}
