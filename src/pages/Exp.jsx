import { expData } from "../data";
import { Techs } from "./Techs";
import { Para } from "./Para";
import { Footer } from "../Footer";
import { MobileNav } from "./MobileNav";

export const Exp = ({ setNav }) => {
  return (
    <article className="h-fit dark:bg-bgDark">
      <MobileNav setNav={setNav} />
      <h1 className="pt-20 md:ml-8 text-center md:text-left text-2xl text-bgDark dark:text-green">
        Professional Experience
      </h1>
      <ul className="flex flex-col md:items-center">
        {Object.values(expData.proExp).map((c) => {
          return (
            <li
              className="flex flex-col md:flex-row items-center mt-10"
              key={c.name}
            >
              <a href={c.link} target="_blank">
                <img
                  src={c.logo}
                  alt="company logo"
                  className="md:mx-20 w-64 hover:hue-rotate-180 transition duration-150"
                />
              </a>
              <div className="text-center md:text-left mt-8 md:mt-0 md:ml-20 md:mr-40">
                <h1 className="text-xl text-bgLight">{c.name}</h1>
                <div className="flex md:flex-row flex-col md:justify-between">
                  <h2 className="text-blue">{c.location}</h2>
                  <h2 className="text-red">{c.duration}</h2>
                </div>
                {c.about}
                <Techs tecs={c.tecs} />
              </div>
            </li>
          );
        })}
      </ul>
      <h1 className="pt-20 ml-8 text-center md:text-left text-2xl text-bgDark">
        Personal Projects
      </h1>
      <ul className="flex flex-col md:items-center">
        {Object.values(expData.personalExp).map((p) => {
          return (
            <li
              key={p.name}
              className="flex flex-col md:flex-row items-center my-10"
            >
              <div className="md:w-80 md:mx-40 text-center md:text-left">
                <h1 className="text-xl dark:text-bgLight">{p.name}</h1>
                <div className="flex flex-col ">
                  <a
                    className="text-bgDark dark:text-green hover:text-red"
                    href={p.repolink}
                    target="_blank"
                  >
                    view repo
                  </a>
                  {p.execlink && (
                    <a
                      href={p.execlink}
                      target="_blank"
                      className="text-blue hover:text-bgDark dark:hover:text-bgLight"
                    >
                      view deployment
                    </a>
                  )}
                </div>
              </div>
              <div className="md:mr-40 text-center md:text-left">
                <Para para={p.about} />
                <Techs tecs={p.tecs} />
              </div>
            </li>
          );
        })}
      </ul>
      <Footer />
    </article>
  );
};
