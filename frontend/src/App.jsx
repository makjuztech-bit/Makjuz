import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import PayrollPage from './pages/PayrollPage.jsx'
import InventoryPage from './pages/InventoryPage.jsx'
import BillingPage from './pages/BillingPage.jsx'
import ConstructionPage from './pages/ConstructionPage.jsx'
import ItSolutionsPage from './pages/ItSolutionsPage.jsx'
import BpoServicesPage from './pages/BpoServicesPage.jsx'
import ManpowerSupplyPage from './pages/ManpowerSupplyPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import CareersPage from './pages/CareersPage.jsx'
import AcademyPage from './pages/AcademyPage.jsx'
import DigitalMarketingPage from './pages/DigitalMarketingPage.jsx'
import SplashScreen from './components/layout/SplashScreen.jsx'

function PageShell({ children }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.main
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
      exit={reduceMotion ? {} : { opacity: 0, y: -18 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="flex-1"
    >
      {children}
    </motion.main>
  )
}

function App() {
  const location = useLocation()
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    if (!showSplash) {
      if (location.hash) {
        const id = location.hash.slice(1)
        const element = document.getElementById(id)
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 50)
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }, [location.pathname, location.hash, showSplash])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 pt-24">
      <AnimatePresence>
        {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <>
          <Header />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageShell>
                    <HomePage />
                  </PageShell>
                }
              />
              <Route
                path="/services"
                element={
                  <PageShell>
                    <ServicesPage />
                  </PageShell>
                }
              />
              <Route
                path="/payroll"
                element={
                  <PageShell>
                    <PayrollPage />
                  </PageShell>
                }
              />
              <Route
                path="/inventory"
                element={
                  <PageShell>
                    <InventoryPage />
                  </PageShell>
                }
              />
              <Route
                path="/billing"
                element={
                  <PageShell>
                    <BillingPage />
                  </PageShell>
                }
              />
              <Route
                path="/construction"
                element={
                  <PageShell>
                    <ConstructionPage />
                  </PageShell>
                }
              />
              <Route
                path="/it-solutions"
                element={
                  <PageShell>
                    <ItSolutionsPage />
                  </PageShell>
                }
              />
              <Route
                path="/bpo-services"
                element={
                  <PageShell>
                    <BpoServicesPage />
                  </PageShell>
                }
              />
              <Route
                path="/manpower-supply"
                element={
                  <PageShell>
                    <ManpowerSupplyPage />
                  </PageShell>
                }
              />
              <Route
                path="/about"
                element={
                  <PageShell>
                    <AboutPage />
                  </PageShell>
                }
              />
              <Route
                path="/careers"
                element={
                  <PageShell>
                    <CareersPage />
                  </PageShell>
                }
              />
              <Route
                path="/academy"
                element={
                  <PageShell>
                    <AcademyPage />
                  </PageShell>
                }
              />
              <Route
                path="/digital-marketing"
                element={
                  <PageShell>
                    <DigitalMarketingPage />
                  </PageShell>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageShell>
                    <ContactPage />
                  </PageShell>
                }
              />
              <Route
                path="*"
                element={
                  <PageShell>
                    <NotFoundPage />
                  </PageShell>
                }
              />
            </Routes>
          </AnimatePresence>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
