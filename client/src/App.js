import "./App.css";
import { createContext, useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import SignIn from "./components/Pages/SignIn";
import CreateaccountStudint from "./student/CreateaccountStudint";
import CreateAcoountEnseignant from "./enseignant/CreateAcoountEnseignant";
import AccountEnseignant from "./enseignant/AccountEnseignant";
import CreateSeance from "./enseignant/CreateSeance";
import HomeaccountStudent from "./student/HomeaccountStudent";
import Dashboard from "./Admin/Dashboard";
import SeanceEnsginent from "./enseignant/SeanceEnsginent";
import Seancestudentbeforaccept from "./student/Seancestudentbeforaccept";
import Seancesyudentafteraceept from "./student/Seancesyudentafteraceept";
import Updqteseqnce from "./enseignant/Updqteseqnce";
import Profileadmin from "./Admin/Profileadmin";
import Users from "./Admin/pages/Users/Users";
import Seances from "./Admin/pages/seances/Seances";
import Pageenseignant from "./Admin/pages/tables enseignant/Pageenseignant";
import Studentsdachboard from "./Admin/pages/tables student/Studentsdachboard";
import AccountTestSEttings from "./enseignant/AccountTestSEttings";
import StudentAccountsetttings from "./student/StudentAccountsetttings";
import TESTT from "./TESTT";
import Updateseance from "./enseignant/Updateseance";
import PageseanceEE from "./student/PageseanceEE";
import Pageseanceqq from "./student/Pageseanceqq";
import MonSéances from "./student/MonSéances";
import Pageseancecc from "./student/Pageseancecc";
import Testfooter from "./components/Testfooter";

export const singnin = createContext({});
export const Typesignin = createContext({});

function App() {
  const [navprop, setnavprop] = useState(
    localStorage.getItem("type-inscription")
  );
  const [signininformation, setsignininformation] = useState();
  const [typeusersignin, settypeusersignin] = useState();
  useEffect(() => {
    setnavprop(localStorage.getItem("type-inscription"));
  });

  return (
    <>
      <Typesignin.Provider value={[typeusersignin, settypeusersignin]}>
        <singnin.Provider value={[signininformation, setsignininformation]}>
          <Router>
            <div className="pages">
              <Switch>
                <Route path="/tt">
                  <TESTT />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/Home">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/sign-in">
                  <SignIn />
                </Route>
                <Route path="/tesr">
                  <Testfooter />
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

                {(() => {
                  if (navprop === "et") {
                    return (
                      <>
                        {/*student*/}
                        <Route path="/HomeaccountStudent">
                          <HomeaccountStudent />
                        </Route>
                        <Route path="/seance student inside">
                          <Seancestudentbeforaccept />
                        </Route>
                        <Route path="/Seance after accept">
                          <Seancesyudentafteraceept />
                        </Route>
                        <Route path="/Account-etudent-settings">
                          <StudentAccountsetttings />
                        </Route>
                        <Route path="/ee">
                          <PageseanceEE />
                        </Route>
                        <Route path="/qq">
                          <Pageseanceqq />
                        </Route>
                        <Route path="/cc">
                          <Pageseancecc />
                        </Route>
                        <Route path="/mon-séances">
                          <MonSéances />
                        </Route>
                      </>
                    );
                  } else if (navprop == "ens") {
                    return (
                      <>
                        {/*ensignt*/}
                        <Route exact path="/AccountEnseignant">
                          <AccountEnseignant />
                        </Route>
                        <Route exact path="/CreateSeance">
                          <CreateSeance />
                        </Route>
                        <Route exact path="/update-seance">
                          <Updqteseqnce />
                        </Route>
                        <Route path="/Account-ensingiant-settings">
                          <AccountTestSEttings />
                        </Route>
                        <Route path="/update seance">
                          <Updateseance />
                        </Route>
                        <Route path="/ee">
                          <SeanceEnsginent />
                        </Route>
                      </>
                    );
                  } else if (navprop === "admin") {
                    return (
                      <>
                        {/*admin*/}

                        <Route path="/admin">
                          <Dashboard />
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
                      </>
                    );
                  }
                })()}
              </Switch>
            </div>
          </Router>
        </singnin.Provider>
      </Typesignin.Provider>
    </>
  );
}

export default App;
