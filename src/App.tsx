import { useRef } from 'react'
import Profile from './pages/Profile'
import Skills from './pages/Skills'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Header from './pages/Header'

function App() {
  const profileRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const sectionRefs = [profileRef, projectsRef, skillsRef, contactRef]

  return (
    <div>
      <Header ref={sectionRefs} />
      <section ref={profileRef}><Profile /></section>
      <section ref={projectsRef}><Projects /></section>
      <section ref={skillsRef}><Skills /></section>
      <section ref={contactRef}><Contact /></section>
    </div>
  )
}

export default App
