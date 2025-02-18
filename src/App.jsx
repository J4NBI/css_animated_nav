"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

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

  return (
    <div>
      <button
        popoverTarget="nav"
        className="fixed right-4 top-4 h-16 w-16 rounded-full border-2 border-white p-2 text-3xl duration-500"
      >
        <span className="sr-only">Show navigation</span>🍔
      </button>
      <nav
        id="nav"
        popover=""
        className="main-nav h-full w-full place-items-center bg-transparent p-0 text-4xl text-white"
      >
        <button
          popoverTarget="nav"
          className="absolute right-4 top-4 z-10 h-16 w-16 rounded-full border-2 border-white p-2 text-3xl"
        >
          <span className="sr-only">Hide navigation</span>❌
        </button>
        <div className="relative flex flex-col gap-6 text-4xl">
          {anchors.map(([href, text, subItems]) => {
            if (subItems) {
              return (
                <div key={href} className="relative block text-center z-10">
                  <button
                    onClick={() => setShowAboutMenu(!showAboutMenu)}
                    className="relative flex items-center justify-center gap-2"
                  >
                    {text}
                    {showAboutMenu ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
                  </button>
                  {showAboutMenu && (
                    <div className="absolute left-1/2 mt-2 w-48 -translate-x-1/2 transform rounded-md bg-white p-2 shadow-lg">
                      {subItems.map(([subHref, subText]) => (
                        <a key={subHref} href={subHref} className="block p-2 text-lg text-gray-800 hover:bg-gray-100">
                          {subText}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )
            } else {
              return (
                <a key={href} href={href} className="relative block text-center">
                  {text}
                </a>
              )
            }
          })}
        </div>
      </nav>

      <section className="grid min-h-screen place-items-center bg-[linear-gradient(to_bottom,rgba(0,0,0,.8),rgba(0,0,0,.9)),url(/img/popover-starting-style/9999.webp)] bg-cover bg-center text-[7vw]">
        Just one more z-index...
      </section>
      <section className="grid min-h-screen place-items-center text-4xl">More website content</section>
    </div>
  )
}

export default App

