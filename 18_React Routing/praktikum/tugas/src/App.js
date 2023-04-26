import Landing from "./landing";
import Account from "./create";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React from "react";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/create">Create Product</Link>
      <Routes>
        <Route path={"/"} exact element={<Landing />} />
        <Route path={"/create"} exact element={<Account />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
