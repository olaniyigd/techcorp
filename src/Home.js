import './App.css';
import About from './component/About';
import Carousel from './component/Carousel';
import Footer from './component/Footer';
import Nav from './component/Nav';
import Service from './component/Service';
import Top from './component/Top';

function App() {
  return (
    <div>
      <Top />
      <Nav />
      <Carousel />
      <About />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
