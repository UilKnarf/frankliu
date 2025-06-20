import Socials from '@/components/socials'
import About from './about/page'
import Experience from './experience/page'
import Projects from './projects/page'

export default function Home(): JSX.Element {
  return (
    <>
      <About />
      <Socials />
      <Projects />
      <Experience />
    </>
  )
}
