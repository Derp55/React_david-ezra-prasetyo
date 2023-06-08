import React from 'react'
import LandingPage from '../../landingpage/landingpage'
import CreateProduct from '../../createproduct/createproduct'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function ReactRouter() {
  return (
    <div>
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
    </div>
  )
}

export default ReactRouter