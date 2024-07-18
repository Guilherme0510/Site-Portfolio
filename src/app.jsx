import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Site from "./Inicio/inicio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Site />} path="/" />

    

      </Routes>
    </BrowserRouter>
  );

}

export default App;