import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import DatasetSelector from "./components/DatasetSelector";
import ScheduleForm from "./components/ScheduleForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/dataset" Component={DatasetSelector} />
        <Route path="/schedule" Component={ScheduleForm} />
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
