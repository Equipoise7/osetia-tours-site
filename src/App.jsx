import Hero from './components/Hero'
import ToursGallery from './components/ToursGallery'
import Services from './components/Services'
import Contact from './components/Contact'
import ScrollEffects from './components/ScrollEffects'
import './App.css'

function App() {
  return (
    <div className="App">
      <ScrollEffects />
      <Hero />
      <ToursGallery />
  <Services />
      <Contact />
    </div>
  )
}

export default App
