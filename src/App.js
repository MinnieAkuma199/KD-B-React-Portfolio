import "./App.css";
import { NavBar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
// import { Resume } from "./components/Resume";

// import { Contact } from "./components/Contact";

// import { About } from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Projects />
      <Footer />
    </div>
    //   {/* <Resume />
    //
    //   <Contact />
    //   <About />
    //  */}
  );
}

export default App;
