import { ExternalLink } from '@/components/ui/external-link'
import { Typography } from '@/components/ui/typography'
import { WavingHand } from '@/components/ui/waving-hand'
import { generateMeta } from '@/lib/meta'
import { Metadata } from 'next'

export const metadata: Metadata = generateMeta()

export default function Home() {
	return (
		<div className='flex flex-col gap-6'>
			<h2 className='prose md:prose-xl lg:prose-2xl prose-stone text-secondary [&>span]:font-moranga [&>span]:text-foreground '>
				Hello there
				<WavingHand />. I&apos;m Nitin, a <span>software engineer</span> from
				India. I believe in a practical approach, so here I present my latest
				explorations and projects. Thank you for visiting!
			</h2>
			<div className='flex gap-4 flex-wrap'>
				<ExternalLink href={'https://github.com/nitintf'}>Github</ExternalLink>
				<ExternalLink href={'https://www.linkedin.com/in/nitin-panwarr/'}>
					Linkedin
				</ExternalLink>
				<ExternalLink href={'/resume'}>Resume</ExternalLink>
			</div>
		</div>
	)
}
