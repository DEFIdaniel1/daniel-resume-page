import HeroImage from "./Components/Layout/HeroImage";
import Header from "./Components/Layout/Header";
import About from './Components/Layout/About';
import Portfolio from "./Components/Portfolio/Portfolio";
import Experience from "./Components/Layout/Experience";
import ContactForm from "./Components/Forms/ContactForm";
// import Card from './Components/UI/Card';
// import WordAnimation from "./Components/UI/WordAnimation";

function App() {
  return (
    <>
      <Header />
      {/* <WordAnimation /> */}
      {/* <Card className="center-text">
        <h2>
          Test <i class="fa-solid fa-caret-down"></i>
        </h2>
      </Card> */}
      <HeroImage />
      <About />
      <Portfolio />
      <Experience />
      <ContactForm />
    </>
  );
}

export default App;
