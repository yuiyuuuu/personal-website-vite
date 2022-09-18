import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ForFun from "./components/canvas/ForFun";
import Main from "./components/Main";
import Bullseye from "./components/Projects/Bullseye";
import HappiList from "./components/Projects/HappiList";
import PersonalWebsite from "./components/Projects/PersonalWebsite";
import TestSVg from "./components/Projects/TestSVg";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/bullseye' element={<Bullseye />} />
          <Route exact path='/happilist' element={<HappiList />} />
          <Route exact path='/personal' element={<PersonalWebsite />} />
          <Route exact path='/test' element={<TestSVg />} />
          <Route exact path='/forfun' element={<ForFun />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
