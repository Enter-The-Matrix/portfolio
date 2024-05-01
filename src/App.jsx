import { Toaster } from "react-hot-toast";
import "./App.css"
import NavigationBar from './components/NavigationBar';
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
 
  return (
    <div>
        <Toaster/>
        <NavigationBar/>
        <Home/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>   
  )
}

export default App
