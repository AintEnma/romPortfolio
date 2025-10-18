import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import InspirationalQuote from './components/InspirationalQuote'

function App() {
  return (
    <>
      <Hero />
      <InspirationalQuote />
      <div className='py-16'></div>
      <Projects />
      <Contact />
    </>
  )
}

export default App
