import { Footer } from "../Footer";
import { homeData } from "../data";
import { Link } from "react-router-dom";
import { MobileNav } from "./MobileNav";

export const Home = ({ setNav }) => {
  return (
    <div className="">
      <div className="bg-[url(/src/images/hero-wallpaper.png)] md:bg-left-bottom dark:md:bg-right bg-center dark:bg-bgDark md:h-fit">
        <MobileNav setNav={setNav} />
        <h1 className="pt-20 text-center font-extrabold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue to-bgLight">
          {homeData.name}
        </h1>
        <h3 className="text-center text-2xl text-yellow mt-4">
          {homeData.designation}
        </h3>
        <div className="bg-[url(/src/images/hero-wallpaper.png)] dark:border border-transparent border md:h-screen w-screen flex flex-col">
          <p className="h-fit h-64 w-72 md:w-1/2 mx-auto text-justify mt-10 md:mt-20 md:text-yellow text-bgLight md:text-xl bg-transparent">
            {homeData.info}
          </p>
          <Link
            to="/abt"
            className="md:mt-20 mx-auto my-4 text-center w-60 text-green md:text-4xl font-bold rounded-md bg-gradient-to-r from-blue to-bgDark border-2 md:border-4 hover:border-blue transition delay-70"
          >
            Know More About Me
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
