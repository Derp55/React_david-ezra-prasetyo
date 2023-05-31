import React from 'react'
import LandingPage from '../../landingpage/landingpage'
import CreateProduct from '../../createproduct/createproduct'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from '../../login/login'

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
        <Route path={"/login"} exact element={<Login/>} />
        </Routes>
      </div>
    </Router> 
    </div>
  )
}

export default ReactRouter