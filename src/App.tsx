import './assets/styles/main.scss'
import Header from './components/header'
import Home from './pages/Home'
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences/index';

function App() {

  return (
    
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experiences />
    </>
  )
}

export default App
