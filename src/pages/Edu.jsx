import { eduData } from "../data";
import { nanoid } from "nanoid";
import { Footer } from "../Footer";
import { MobileNav } from "./MobileNav";

export const Edu = ({ setNav }) => {
  return (
    <div className="flex flex-col h-fit md:pt-20 dark:bg-bgDark">
      <MobileNav setNav={setNav} className="" />
      <h1 className="text-center md:ml-20 mt-8 md:mt-0 md:text-left text-2xl dark:text-bgLight">
        Graduation
      </h1>
      <section className="flex flex-col md:flex-row items-center m-20 justify-between">
        <a href="https://www.rgpv.ac.in/" target="_blank">
          <img
            src={eduData.graduation.univLogo}
            alt="University logo"
            className="w-46 h-48 hover:hue-rotate-180 transition duration-150"
          />
        </a>
        <article className="my-8 text-center md:text-left md:my-0 dark:text-bgLight">
          <h1 className="text-xl">{eduData.graduation.collegeName}</h1>
          <h1 className="text-red">{eduData.graduation.collegeUniversity}</h1>
          <h1 className="text-blue">{eduData.graduation.location}</h1>
          <h1 className="text-blue">{eduData.graduation.duration}</h1>
          <br />
          <h1>{eduData.graduation.course}</h1>
          <h1>{eduData.graduation.discipline}</h1>
        </article>
        <a href="https://rjit.ac.in/" target="_blank">
          <img
            src={eduData.graduation.cllgLogo}
            width="640"
            height="480"
            className="border border-4 border-blue rounded-md hover:border-green"
          />
        </a>
      </section>
      <hr className="w-48 h-1 mx-auto my-4 bg-blue border-0 rounded md:my-10 dark:green md:hidden" />
      <h1 className="md:ml-20 text-center md:text-left text-2xl dark:text-bgLight">
        Certificates of Courses taken
      </h1>
      <ul className="md:grid md:grid-cols-4 flex flex-col gap-4 m-20">
        {Object.values(eduData.certificates).map((c) => {
          return (
            <li
              className="border border-4 dark:border-blue dark:hover:border-red hover:border-red "
              key={nanoid()}
            >
              <a href={c.pdf} target="_blank">
                <img
                  src={c.img}
                  alt="certificate image"
                  height="360"
                  width="630"
                  className="dark:invert"
                />
              </a>
            </li>
          );
        })}
      </ul>
      <Footer />
    </div>
  );
};
