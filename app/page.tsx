import HeroSection from '@/components/HeroSection'
import {SpeedInsights} from '@vercel/speed-insights/next'
import AboutMe from './aboutMe/page'
import Project from './projects/page'
import Contact from './contact/page'
import {HeroHighlight} from '@/components/ui/hero-highlight'
import GoUp from '@/components/GoUp'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <GoUp />
      <section className="hidden xl:block">
        <section id="aboutMe">
          <div className="flex py-12 xl:py-0 items-center justify-center  mb-10">
            <HeroHighlight>
              <h1 className="h2 text-primary hover:text-accent-hover text-stroke-1 dark:text-white dark:hover:text-offblack leading-none transition-all duration-500 capitalize font-extrabold p-5">
                About Me
              </h1>
            </HeroHighlight>
          </div>
          <AboutMe />
        </section>
        <section id="projects">
          <div className="flex py-12 xl:py-0 items-center justify-center mt-40 mb-10">
            <HeroHighlight>
              <h1 className="h2 text-primary hover:text-accent-hover text-stroke-1 dark:text-white dark:hover:text-offblack leading-none transition-all duration-500 capitalize font-extrabold p-5">
                My Projects
              </h1>
            </HeroHighlight>
          </div>
          <Project />
        </section>
        <section id="contact">
          <div className="flex py-12 xl:py-0 items-center justify-center mt-40 mb-10">
            <HeroHighlight>
              <h1 className="h2 text-primary hover:text-accent-hover text-stroke-1 dark:text-white dark:hover:text-offblack leading-none transition-all duration-500 capitalize font-extrabold p-5">
                Contact Me
              </h1>
            </HeroHighlight>
          </div>
          <Contact />
        </section>
      </section>
      <SpeedInsights />
    </main>
  )
}
