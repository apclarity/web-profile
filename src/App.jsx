import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/home/Home';
import Playground from './pages/Playground';
import SmoothScrollContainer from './components/SmoothScrollContainer'

const App = () => {
  return (
    <Router>
      <SmoothScrollContainer >
        <main>
          <div>
            <Navbar />
            <Routes >
              <Route path="/" element={<Home />} />
              <Route path="/playground" element={<Playground />} />
            </Routes>
          </div>
        </main>
      </SmoothScrollContainer>
    </Router>
  )
}


export default App