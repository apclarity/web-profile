import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar'
import Home from './pages/home/Home';
import Playground from './pages/playground/Playground';
import SmoothScrollContainer from './components/SmoothScrollContainer'
import Footer from './components/Footer';
import SpotifyCallback from './components/Callback';

const App = () => {
  const [footerY, setFooterY] = useState(
    typeof window !== 'undefined' ? window.innerHeight : 0
  )

  useEffect(() => {
    const onResize = () => setFooterY(window.innerHeight)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return (
    <Router>
      <SmoothScrollContainer >
        <main>
          <div>
            <Navbar />
            <Routes >
              <Route
                path="/"
                element={<Home setFooterY={setFooterY} />}
              />
              <Route path="/playground" element={<Playground />} />
              <Route path="/callback" element={<SpotifyCallback />} />
            </Routes>
            <motion.footer
              style={{ y: footerY }}
              transition={{ duration: 1, ease: [0.8, 0.8, 1, 0.3] }}
            >
              <Footer />
            </motion.footer>
          </div>
        </main>
      </SmoothScrollContainer>
    </Router>
  )
}

export default App