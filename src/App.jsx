/// <reference types="react/canary" />

const anchors = [
  ["/", "Home"],
  ["/about", "About"],
  ["/contact", "Contact"],
];

// NOTE: The CSS file has all the
// modern CSS styles you're looking for ☝️

function App() {
  return (
    <div>
      <button
        popoverTarget="nav"
        className="fixed right-4 top-4 h-16 w-16 rounded-full border-2 border-white p-2 text-3xl duration-500"
      >
        <span className="sr-only">Show navigation</span>
        🍔
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
          {anchors.map(([href, text]) => (
            <a key={href} href={href} className="relative block text-center">
              {text}
            </a>
          ))}
        </div>
      </nav>

      <section className="grid min-h-screen place-items-center bg-[linear-gradient(to_bottom,rgba(0,0,0,.8),rgba(0,0,0,.9)),url(/img/popover-starting-style/9999.webp)] bg-cover bg-center text-[7vw]">
        Just one more z-index...
      </section>
      <section className="grid min-h-screen place-items-center text-4xl">
        More website content
      </section>
    </div>
  );
}

export default App;
