import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./components/Main";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
