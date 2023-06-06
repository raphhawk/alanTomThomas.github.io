import { Link } from "react-router-dom";
import hamburger from "../icos/hamburger.svg";

export const MobileNav = ({ setNav }) => {
  return (
    <div className="flex flex-row justify-between mx-8 md:hidden pt-2 dark:text-bgLight">
      <Link to="/abt" className="text-2xl font-mono">
        My Self
      </Link>
      <button>
        <img
          src={hamburger}
          className="w-8 bg-green rounded-md hover:bg-yellow"
          onClick={() => setNav(true)}
        />
      </button>
    </div>
  );
};
