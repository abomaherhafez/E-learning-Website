import "./App.css";
import { createContext, useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import SignIn from "./components/Pages/SignIn";
import CreateaccountStudint from "./student/CreateaccountStudint";
import CreateAcoountEnseignant from "./enseignant/CreateAcoountEnseignant";
import AccountEnseignant from "./enseignant/AccountEnseignant";
import CreateSeance from "./enseignant/CreateSeance";
import Accountsettings from "./enseignant/Accountsettings";
import HomeaccountStudent from "./student/HomeaccountStudent";
import Dashboard from "./Admin/Dashboard";
import SeanceEnsginent from "./enseignant/SeanceEnsginent";
import Seancestudentbeforaccept from "./student/Seancestudentbeforaccept";
import Seancesyudentafteraceept from "./student/Seancesyudentafteraceept";
import Updqteseqnce from "./enseignant/Updqteseqnce";
import Profileadmin from "./Admin/Profileadmin";
import Users from "./Admin/pages/Users/Users";
import Seances from "./Admin/pages/seances/Seances";
import TT from "./Admin/tqble7adher/TT";
import Pageenseignant from "./Admin/pages/tables enseignant/Pageenseignant";
import Studentsdachboard from "./Admin/pages/tables student/Studentsdachboard";

export const singnin = createContext({});
export const Typesignin = createContext({});

function App() {
  const [signininformation, setsignininformation] = useState();
  const [typeusersignin, settypeusersignin] = useState();

  return (
    <>
      <Typesignin.Provider value={{ typeusersignin, settypeusersignin }}>
        <singnin.Provider value={{ signininformation, setsignininformation }}>
          <Router>
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
                <Route exact path="/update-seance">
                  <Updqteseqnce />
                </Route>
                <Route exact path="/Accountsettings">
                  <Accountsettings />
                </Route>
                <Route path="/HomeaccountStudent">
                  <HomeaccountStudent />
                </Route>
                <Route path="/seance-ensginent">
                  <SeanceEnsginent />
                </Route>
                <Route path="/seance student inside">
                  <Seancestudentbeforaccept />
                </Route>
                <Route path="/Seance after accept">
                  <Seancesyudentafteraceept />
                </Route>
                <Route path="/admin">
                  <Dashboard />
                </Route>
                <Route path="/test">
                  <TT />
                </Route>
                <Route path="/profile admin">
                  <Profileadmin />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/seances">
                  <Seances />
                </Route>
                <Route path="/enseignant">
                  <Pageenseignant />
                </Route>
                <Route path="/studnts">
                  <Studentsdachboard />
                </Route>
              </Switch>
            </div>
          </Router>
        </singnin.Provider>
      </Typesignin.Provider>
    </>
  );
}

export default App;
