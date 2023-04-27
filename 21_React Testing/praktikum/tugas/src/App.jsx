import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './component/landingpage/landingpage';
import store from './component/createproduct/store';
import CreateProduct from './component/createproduct/createproduct';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;

