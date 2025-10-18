import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Hero />
      <div className='py-16'></div>
      <Projects />
      <Contact />
    </>
  )
}

export default App
