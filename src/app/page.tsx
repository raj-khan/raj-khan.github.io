import { Hero } from '@/components/Hero'
import { FounderProblems } from '@/components/FounderProblems'
import { BuildProcess } from '@/components/BuildProcess'
import { AgenticEngineering } from '@/components/AgenticEngineering'
import { Projects } from '@/components/Projects'
import { Experience } from '@/components/Experience'
import { Skills } from '@/components/Skills'
import { GitHubDashboard } from '@/components/GitHubDashboard'
import { Writing } from '@/components/Writing'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <FounderProblems />
      <BuildProcess />
      <AgenticEngineering />
      <Projects />
      <Experience />
      <Skills />
      <GitHubDashboard />
      <Writing />
      <Contact />
    </main>
  )
}
