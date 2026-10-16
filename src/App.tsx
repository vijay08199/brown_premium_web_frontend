
import Header from './components/Header';
import Hero from './components/Hero';
import BenefitsStrip from './components/BenefitsStrip';
import Projects from './components/Projects';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import StatisticsBand from './components/StatisticsBand';
import Testimonials from './components/Testimonials';
import EnquiryCTA from './components/EnquiryCTA';
import Footer from './components/Footer';
import Directors from './components/Directors';
import Gallery from './components/Gallery';
function App(){
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <BenefitsStrip />
      <About />
      <Projects />
      <Directors />
      <WhyChooseUs />
      <Gallery />
      <StatisticsBand />
      <Testimonials />
      <EnquiryCTA />
      <Footer />
    </div>
  );
}

export default App;
