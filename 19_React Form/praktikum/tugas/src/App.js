import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './component/landingpage/landingpage';
import CreateProduct from './component/createproduct/createproduct';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">LandingPage</Link>
            </li>
            <li>
              <Link to="/CreateProduct">CreateProduct</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path={"/"} exact element={<LandingPage />} />
        <Route path={"/CreateProduct"} exact element={<CreateProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
