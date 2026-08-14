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
          After being impacted by Google's layoffs, I decided to deepen my technical skills, initially with a simple goal: become a better technical recruiter. 
          I wanted to understand the engineers I recruited beyond job descriptions and keywords—how they build, debug, collaborate, and solve problems.
        </p>
        
        <p className='leading-7 [&:not(:first-child)]:mt-6'>
          That curiosity eventually took me much further than I expected. 
          I learned software engineering fundamentals and began building my own projects, including a full-stack Instagram-inspired platform for coffee enthusiasts and an interactive DSA visualizer. 
          As a visual learner, I found many existing DSA resources cluttered and difficult to follow, so I built my own minimal, interactive tool to make concepts easier to visualize and understand. 
          Through these projects, I gained hands-on exposure to the development process and a much deeper understanding of the technical talent I had spent years recruiting.        
        </p>
        <p className='leading-7 [&:not(:first-child)]:mt-6'>
          Before diving into engineering, I built my recruiting career across {' '}
          <UnderLink href='https://www.aerotek.com/en'>Aerotek</UnderLink>,{' '}
          <UnderLink href='https://www.getrocket.com/'>Rocket</UnderLink>,{' '}
          and{' '}
          <UnderLink href='https://www.google.com/'>Google</UnderLink>, supporting everything from high-volume hiring to specialized software engineering and product searches. 
            I’ve partnered with hiring leaders, built pipelines for difficult-to-fill roles, and helped improve recruiting processes along the way.
            Today, I’m bringing those two experiences together. 
            I’m a technical recruiter who understands recruiting deeply and has taken the time to learn how software is actually built. 
            I enjoy learning new technical domains, translating complex hiring needs into effective recruiting strategies, and building relationships with the engineers and leaders I support.
        </p>
 
      </div>
    </Section>
  )
}
