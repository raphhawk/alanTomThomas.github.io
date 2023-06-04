import { navData } from "../data";
import darkModeIcon from "/src/icos/dark-mode.svg";
import { nanoid } from "nanoid";
import { Outlet, Link } from "react-router-dom";
import hamburger from "/src/icos/hamburger.svg";
import close from "/src/icos/close.svg";
import { useState } from "react";

export const Navbar = ({ setDarkMode, darkMode, setCloseNav }) => {
  return (
    <>
      <nav className="fixed flex md:flex-row flex-col justify-between py-2 px-10 bg-bgLight dark:bg-bgDark md:bg-transparent dark:md:bg-transparent md:backdrop-blur-sm w-screen bg-fixed touch-none md:visible invisible">
        <div className="flex flex-row justify-between">
          <Link
            to="/abt"
            className="capitalize mx-2 text-2xl md:text-xl dark:text-bgLight dark:hover:text-red font-bold hover:text-red text-blue transition delay-70 font-mono hover:cursor-pointer "
          >
            my self
          </Link>
          <div className="md:invisible dark:invert">
            <button onClick={() => setDarkMode(!darkMode)}>
              <img
                src={darkModeIcon}
                alt="Dark Mode Icon"
                className="h-6 w-6 mr-4"
              />
            </button>
            <button onClick={() => setCloseNav(true)}>
              <img src={close} className="w-6 " />
            </button>
          </div>
        </div>
        <ul className="flex md:flex-row flex-col capitalize  text-bgDark md:text-bgDark md:hover:cursor-pointer h-screen md:h-auto mt-4 md:mt-0">
          {Object.values(navData).map((nav) => {
            if (nav.name === "mode") {
              return (
                <li
                  key={nanoid()}
                  className="mx-2 animate-pulse invisible md:visible"
                  onClick={() => setDarkMode(!darkMode)}
                >
                  <img
                    src={darkModeIcon}
                    alt="Dark Mode Icon"
                    className="h-6 w-6 dark:invert"
                  />
                </li>
              );
            }
            return (
              <li
                key={nanoid()}
                className="mx-2 dark:text-yellow hover:text-green dark:hover:text-green transition delay-70 hover:cursor-pointer mt-4 md:mt-0"
              >
                <Link to={nav.route} onClick={() => setCloseNav(true)}>
                  {nav.name}
                </Link>
                <hr className="md:hidden h-2 w-8 border border-2" />
              </li>
            );
          })}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
