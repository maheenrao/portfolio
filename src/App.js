import About from './components/About'
import ContactMe from "./components/ContactMe";
import Projects from "./components/ProjectCard"
import Resume from "./components/Resume";
import Main from "./components/Main"
import Header from "./components/Header"
import Footer from "./components/Footer"

import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div>
      <Header/>
      
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/about"  element={<About />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
