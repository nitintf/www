import { Typography } from '@/components/ui/typography'
import { WavingHand } from '@/components/ui/waving-hand'

export default function Home() {
	return (
		<div className='mt-28 container'>
			<Typography>
				Hello there
				<WavingHand />. I&apos;m Nitin, a <span>software engineer</span> from
				India. I believe in a practical approach, so here I present my latest
				explorations and projects. Thank you for visiting!
			</Typography>
		</div>
	)
}
