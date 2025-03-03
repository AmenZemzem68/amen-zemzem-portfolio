import Sidebar from "./components/sidebar/sidebar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Experience from "./components/experience/experience";
import Designs from "./components/designs/designs";

import "./App.css";
import Feedbacks from "./components/feedbacks/feedbacks";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Designs />
        <Feedbacks />
        <Contact />
      </main>
    </>
  );
}

export default App;
