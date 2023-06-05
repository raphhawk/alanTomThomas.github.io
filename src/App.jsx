import { Exp } from "./pages/Exp";
import { Navbar } from "./pages/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Edu } from "./pages/Edu";
import { Nopage } from "./pages/Nopage";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [nav, setNav] = useState(false);
  const [closeNav, setCloseNav] = useState(false);

  const curHtml = document.querySelector("html");

  if (darkMode) {
    curHtml.classList.add("dark");
  } else {
    curHtml.classList.remove("dark");
  }

  const navHtml = document.querySelector("nav");

  if (closeNav) {
    navHtml.classList.add("invisible");
    if (nav) {
      setNav(false);
    }
  }
  if (nav) {
    navHtml.classList.remove("invisible");
    if (closeNav) {
      setCloseNav(false);
    }
  }
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Navbar
              setDarkMode={setDarkMode}
              darkMode={darkMode}
              setCloseNav={setCloseNav}
            />
          }
        >
          <Route index element={<Home setNav={setNav} />} />
          <Route path="abt" element={<About setNav={setNav} />} />
          <Route path="exp" element={<Exp setNav={setNav} />} />
          <Route path="edu" element={<Edu setNav={setNav} />} />
        </Route>
        <Route path="*" element={<Nopage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
