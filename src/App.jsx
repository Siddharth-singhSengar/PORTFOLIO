import { Toaster } from "react-hot-toast";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PortFolio from "./components/Portfolio";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <PortFolio />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}
export default App;
