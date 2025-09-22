import Hero from './components/sections/Hero';
import About from "./components/sections/About.tsx";
import Ticket from "./components/sections/Ticket.tsx";
import Footer from "./components/Footer.tsx";
import Outpost from './components/sections/Outpost.tsx'
import { Decode } from './components/sections/Decode.tsx';
import { BackToTop } from './components/BackToTop.tsx';

function App() {

  return (
    <>
        <Hero />
        <About />
        <Ticket />
        <Outpost />
        <Decode />
        <Footer />
        <BackToTop />
    </>
  )
}

export default App
