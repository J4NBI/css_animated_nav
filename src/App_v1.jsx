"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

const anchors = [
  ["/", "Home"],
  [
    "/about",
    "About",
    [
      ["/about/team", "Team"],
      ["/about/mission", "Mission"],
      ["/about/values", "Values"],
    ],
  ],
  ["/contact", "Contact"],
]

function App() {
  const [showAboutMenu, setShowAboutMenu] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const NavItems = ({ mobile = false }) => (
    <>
      {anchors.map(([href, text, subItems], index) => {
        if (subItems) {
          return (
            <motion.div
              key={href}
              className={`mx-0 relative ${mobile ? "w-full ml-2" : ""}`}
              initial={mobile ? { opacity: 0, y: 40 } : {}}
              animate={mobile ? { opacity: 1, y: 0 } : {}}
              exit={mobile ? { opacity: 0, y: -280 } : {}}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button
                onClick={() => setShowAboutMenu(!showAboutMenu)}
                className={`flex items-center justify-center gap-2 px-3 py-2 text-white hover:text-gray-300 ${
                  mobile ? "w-full" : ""
                }`}
              >
                {text}
                {showAboutMenu ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
              <AnimatePresence>
                {showAboutMenu && (
                  <motion.div
                    className={`mt-2 rounded-md bg-white p-2 shadow-lg ${
                      mobile ? "relative w-[200px] mx-auto" : "absolute left-1/2 transform -translate-x-1/2 w-48"
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {subItems.map(([subHref, subText], subIndex) => (
                      <motion.a
                        key={subHref}
                        href={subHref}
                        className="block p-2 text-sm text-gray-800 hover:bg-gray-100 text-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                      >
                        {subText}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        } else {
          return (
            <motion.a
              key={href}
              href={href}
              className={`px-3 py-2 text-white hover:text-gray-300 ${mobile ? "flex items-center justify-center w-full my-2" : ""}`}
              initial={mobile ? { opacity: 0, y: 20 } : {}}
              animate={mobile ? { opacity: 1, y: 0 } : {}}
              exit={mobile ? { opacity: 0, y: -20 } : {}}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {text}
            </motion.a>
          )
        }
      })}
    </>
  )

  return (
    <div>
      <nav className=" w-[400px] mx-auto p-4">
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-white">
            Logo
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavItems />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center">
                <NavItems mobile />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>""

      <section className="grid min-h-screen place-items-center text-[7vw] text-white">
        Just one more z-index...
      </section>
      <section className="grid min-h-screen place-items-center text-4xl">More website content</section>
    </div>
  )
}

export default App

