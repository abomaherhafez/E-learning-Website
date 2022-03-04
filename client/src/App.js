import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import SignIn from "./components/Pages/SignIn";
import HomeStudint from "./student/HomeStudint";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/HomeStudent" element={<HomeStudint />} />
            <Route path="/Create-account" element={<HomeStudint />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
