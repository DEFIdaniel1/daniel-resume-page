import {Route, Routes} from 'react-router-dom';

import HeroImage from "./Components/Layout/HeroImage";
import Header from "./Components/Layout/Header";
import About from './Components/Layout/About';
import Portfolio from "./Components/Portfolio/Portfolio";
import Experience from "./Components/Layout/Experience";
import ContactForm from "./Components/Forms/ContactForm";


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
      <Routes>
        <Route path="/" element={<HeroImage />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </>
  );
}

export default App;
