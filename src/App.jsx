import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ForFun from "./components/canvas/ForFun";
import Main from "./components/Main";
import Bullseye from "./components/Projects/Bullseye";
import HappiList from "./components/Projects/HappiList";
import PersonalWebsite from "./components/Projects/PersonalWebsite";
import Mycha from "./components/Projects/Mycha";
import TestSVg from "./components/Projects/TestSVg";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/bullseye" element={<Bullseye />} />
          <Route exact path="/happilist" element={<HappiList />} />
          <Route exact path="/personal" element={<PersonalWebsite />} />
          <Route exact path="/test" element={<TestSVg />} />
          <Route exact path="/forfun" element={<ForFun />} />
          <Route exact path="/mycha" element={<Mycha />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
