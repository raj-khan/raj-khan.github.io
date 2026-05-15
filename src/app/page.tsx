import { Hero } from '@/components/Hero'
import { FounderProblems } from '@/components/FounderProblems'
import { BuildProcess } from '@/components/BuildProcess'
import { AgenticEngineering } from '@/components/AgenticEngineering'
import { Services } from '@/components/Services'
import { Projects } from '@/components/Projects'
import { Experience } from '@/components/Experience'
import { Skills } from '@/components/Skills'
import { GitHubDashboard } from '@/components/GitHubDashboard'
import { BlogPreview } from '@/components/BlogPreview'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <FounderProblems />
      <BuildProcess />
      <AgenticEngineering />
      <Services />
      <Projects />
      <Experience />
      <Skills />
      <GitHubDashboard />
      <BlogPreview />
      <Contact />
    </main>
  )
}
