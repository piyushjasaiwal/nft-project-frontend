import React from 'react'
import Competitions from './components/competitions/competitions';
import CreateCompetition from './components/create_competition/create_competition';
import CreateCertificate from "./UI/createCertificate/CreateCertificate";
import IndividualCompetition from "./UI/individualCompetition/IndividualCompetition";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Competitions /> */}
      {/* <CreateCompetition /> */}

      <Router>
        <Routes>
          <Route exact path = '/' element = {<Competitions />} />
          <Route exact path = '/addCompetition' element = {<CreateCompetition />} />
          <Route exact path="/certificate/*/create" element = {<CreateCertificate />}></Route>
          <Route exact path="/certificate" element = {<IndividualCompetition />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
