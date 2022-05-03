import HeroImage from "./Components/Layout/HeroImage";
import Header from "./Components/Layout/Header";
import About from './Components/Layout/About';
import Portfolio from "./Components/Layout/Portfolio";
import Experience from "./Components/Layout/Experience";
import ContactForm from "./Components/Forms/ContactForm";

function App() {
  return (
    <>
      <Header />
      <HeroImage />
      <About />
      <Portfolio />
      <Experience />
      <ContactForm />
    </>
  );
}

export default App;
