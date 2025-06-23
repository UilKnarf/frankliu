import React from 'react'
import Section from '@/components/Section'
import { UnderLink } from '@/components/under-link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'frankliu.dev',
  description: 'About Frank Liu',
  openGraph: {
    title: 'About',
    description: 'About Frank Liu',
    type: 'article',
    url: 'https://frankliu.dev/about',
    images: [
      {
        url: 'https://frankliu.dev/images/about.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About',
    description: 'About Frank Liu',
    images: ['https://frankliu.dev/images/about.png'],
  },
}

export default function About(): JSX.Element {
  return (
    <Section title='About'>
      <div className='About'>
        <p className='leading-7 [&:not(:first-child)]:mt-6'>
          After being impacted by Google's layoff in 2023, I decided to deepen my technical skills, initially to become a better technical recruiter. However, as I delved deeper, I was fascinated by how much could be accomplished with just a single line of code. This passion led me to build my first personal project: an Instagram clone for coffee enthusiasts.
        </p>
        <p className='leading-7 [&:not(:first-child)]:mt-6'>
          After scaling teams at {' '}
          <UnderLink href='https://www.aerotek.com/en'>Aerotek</UnderLink>,{' '}
          <UnderLink href='https://www.getrocket.com/'>Rocket</UnderLink>,{' '}
          and{' '}
          <UnderLink href='https://www.google.com/'>Google</UnderLink>, I now bring that same dedication and passion to software engineering. Today, my focus is on frontend development, driven by a deep commitment to user experience. I approach crafting intuitive and engaging interfaces with the same care and attention I once prioritized for candidate experience.
        </p>
 
      </div>
    </Section>
  )
}
