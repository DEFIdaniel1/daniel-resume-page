import Card from "./Components/UI/Card";
import HeroImage from "./Components/Layout/HeroImage";
import Header from "./Components/Layout/Header";
import About from './Components/Layout/About';
import Portfolio from "./Components/Layout/Portfolio";

function App() {
  return (
    <>
      <Header />
      <HeroImage />
      <About />
      <Portfolio />
      <Card>
        <h1>Contact</h1>
      </Card>
      <Card>
        <h1>Experience</h1>
      </Card>
      <Card>
        <h1>Education</h1>
      </Card>
      <Card>
        <h1>Resume</h1>
      </Card>
    </>
  );
}

export default App;
