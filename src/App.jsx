import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import HomeObjectives from './components/HomeObjectives'
import Programs from './components/Programs'
import Events from './components/Events'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CompanyHighlights from './components/Pages/CompanyHighlights'
import PartnersSection from './components/PartnersSection'
import PricingPlans from './components/PricingPlans'
import Highlights from './pages/Highlights'
import FeaturesPage from './pages/FeaturesPage'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const navigateToPage = (page) => {
    setCurrentPage(page)
  }

  return (
    <>
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} navigateToPage={navigateToPage} />
        
        <main>
          <AnimatePresence mode="wait">
            {currentPage === 'home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                
                <Hero />
                <About />
                <HomeObjectives />
                <Programs />
                <Events />
                <Gallery />
                <PartnersSection />
                <Testimonials />
                <PricingPlans />
                <Contact />
                <FeaturesPage />
                {/* <CompanyHighlights /> */}
              </motion.div>
            )}
            {currentPage === 'highlights' && (
              <motion.div
                key="highlights"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Highlights navigateToPage={navigateToPage} />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
        
        <Footer />
      </div>
    </div>
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        
      </Routes>
    </Router>
    </>
  )
}

export default App