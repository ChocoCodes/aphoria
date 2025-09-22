import Hero from './components/sections/Hero';
import About from "./components/sections/About.tsx";
import Ticket from "./components/sections/Ticket.tsx";
import Footer from "./components/Footer.tsx";
import { BackToTop } from './components/BackToTop.tsx';

function App() {

  return (
    <>
        <Hero />
        <About />
        <Ticket />
        <Footer />
        <BackToTop />
    </>
  )
}

export default App
