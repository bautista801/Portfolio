import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Experience from './components/experience/Experience'
import Header from "./components/header/Header";
import Navbar from './components/navbar/Navbar'
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
        <Header />
        <Navbar />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
