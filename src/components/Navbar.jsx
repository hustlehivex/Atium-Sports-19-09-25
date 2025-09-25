
/*Import Block - start : */
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import atiumLogo from '../assets/logos/atium-logo.svg'
/*Import Block - end : */

/*Component Block - start : */
const Navbar = ({ darkMode, toggleDarkMode, navigateToPage }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Handle active section detection
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.6,
      rootMargin: '-100px 0px -100px 0px'
    })

    const sections = document.querySelectorAll('section[id]')
    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  /* Navigation Items Configuration */


  const navItems = [
    { name: 'Home', href: '#home', page: 'home' },
    { name: 'About', href: '#about', page: 'home' },
    { name: 'Programs', href: '#programs', page: 'home' },
    { name: 'Events', href: '#events', page: 'home' },
    { name: 'Gallery', href: '#gallery', page: 'home' },
    { name: 'Features', href: '#highlights', page: 'highlights' },
    { name: 'Contact', href: '#contact', page: 'home' },
  ]

  const handleNavigation = (item) => {
    if (item.page === 'highlights') {
      navigateToPage('highlights')
    } else {
      navigateToPage('home')
      setTimeout(() => {
        const element = document.querySelector(item.href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
    setIsMobileMenuOpen(false)
  }

  const getNavItemClass = (href) => {
    const isActive = activeSection === href.substring(1)
    const baseClasses = "font-medium transition-colors duration-200 text-lg"
    const activeClasses = "text-primary-600 dark:text-primary-400 font-semibold"
    const inactiveClasses = "text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400"
    
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-secondary-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <img 
              src={atiumLogo}
              alt="Atium Sports Logo"
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold font-display gradient-texts">
              ATIUM Sports
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation(item)}
                className={getNavItemClass(item.href)}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors duration-200"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-secondary-600" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavigation(item)}
                className={`${getNavItemClass(item.href)} block w-full text-left px-4 py-2`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar