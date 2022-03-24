import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import SignIn from "./components/Pages/SignIn";
import CreateaccountStudint from "./student/CreateaccountStudint";
import Footer from "./components/footer/Footer";
import CreateAcoountEnseignant from "./enseignant/CreateAcoountEnseignant";
import AccountEnseignant from "./enseignant/AccountEnseignant";
import CreateSeance from "./enseignant/CreateSeance";
import Sidebar from "./components/sidebar/Sidebar";
import CardsSeance from "./components/cards/CardsSeance";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/Create-account">
              <CreateaccountStudint />
            </Route>
            <Route exact path="/Create-account-Enseignant">
              <CreateAcoountEnseignant />
            </Route>
            <Route exact path="/AccountEnseignant">
              <AccountEnseignant />
            </Route>
            <Route exact path="/CreateSeance">
              <CreateSeance />
            </Route>

            <Route exact path="/bb">
              <CardsSeance />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
