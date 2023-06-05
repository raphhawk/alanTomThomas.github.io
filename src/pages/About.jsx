import { aboutData } from "../data";
import { Footer } from "../Footer";
import { MobileNav } from "./MobileNav";

export const About = ({ setNav }) => {
  return (
    <div className="z-0 dark:bg-bgDark">
      <MobileNav setNav={setNav} />
      <section>
        <div className="flex flex-col md:flex-row mx-5 md:mx-20 h-screen">
          <div className="mx-auto mt-10 md:m-auto h-20 w-20 md:h-auto md:w-auto shadow-2xl border-4 border-yellow hover:border-green">
            <img
              src={aboutData.image}
              alt="my-photo"
              height="900"
              width="900"
              className=""
            />
          </div>
          <div className="md:mt-52 mt-8 md:p-20 flex flex-col h-fit overflow-hidden">
            <h3 className="text-center md:text-left font-bold pb-8 text-xl dark:text-bgLight">
              {aboutData.greet}
            </h3>
            {aboutData.para}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
