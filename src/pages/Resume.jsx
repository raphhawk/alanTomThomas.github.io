import { contactData, homeData, expData, eduData } from "../data";
import { tecs } from "../techReps";

const role = {
  webDeveloper: {
    skills: [
      tecs.javascript,
      tecs.react,
      tecs.reactRouter,
      tecs.nodejs,
      tecs.expressjs,
      tecs.html,
      tecs.css,
      tecs.tailwind,
      tecs.bootstrap,
      tecs.mongodb,
      tecs.github,
    ],
    exp: {
      pro: [expData.proExp.tcs],
      per: [expData.personalExp.mySelf, expData.personalExp.nodeContainers],
    },
  },
};

const ResHeader = () => {
  return (
    <div className="flex flex-col text-center mt-2">
      <h1 className="text-bgDark dark:text-bgLight">{homeData.name}</h1>
      <ul className="flex flex-row justify-between mx-20 text-xs">
        <li>
          <a
            href={contactData.links.linkedin}
            className="dark:text-green text-bgDark hover:text-blue dark:hover:text-blue"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href={contactData.links.github}
            className="dark:text-green text-bgDark hover:text-blue dark:hover:text-blue"
          >
            Github
          </a>
        </li>
        <li>
          <p className="dark:text-green text-bgDark hover:text-blue dark:hover:text-blue">
            Phone: {contactData.contact.phone}
          </p>
        </li>
        <li>
          <p className="dark:text-green text-bgDark hover:text-blue dark:hover:text-blue">
            email: {contactData.contact.email}
          </p>
        </li>
      </ul>
    </div>
  );
};

const ResContent = ({ roleType }) => {
  return (
    <>
      <div className="flex flex-row mx-10 mt-2">
        <h1 className="mr-4 text-blue">Skills</h1>
        <hr className="w-96 border border-2 border-green rounded-full mt-3" />
        <hr className="w-96 border border-2 border-green rounded-full mt-3" />
      </div>
      <ul className="grid grid-cols-6 mx-4 text-sm">
        {roleType.skills.map((s) => {
          return (
            <li>
              <div className="rounded-md bg-blue px-1 mt-2 text-center text-bgLight capitalize mr-2">
                {s.name}
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-row mx-10 mt-4">
        <h1 className="mr-4 text-blue">Experience</h1>
        <hr className="w-96 border border-2 border-green rounded-full mt-3" />
        <hr className="w-96 border border-2 border-green rounded-full mt-3" />
      </div>
      <div>
        {roleType.exp.pro.map((c) => {
          return (
            <div className="flex flex-col mx-20 mt-4">
              <div className="flex flex-row justify-between">
                <h1 className="text-red">{c.name}</h1>
                <h1 className="text-bgDark dark:text-green">{c.location}</h1>
              </div>
              <div className="flex flex-row text-bgDark dark:text-green justify-between mb-2 text-sm">
                <h1>{c.designation}</h1>
                <h1>{c.duration}</h1>
              </div>
              <div className="text-sm dark:text-bgLight">{c.about}</div>
              <div>
                <h1 className="mt-2 text-sm text-bgDark dark:text-yellow">
                  Technologies Used:{" "}
                </h1>
                <p className="capitalize text-xs text-bgDark dark:text-yellow">
                  {c.tecs.map((t) => `${t.name}, `)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row mx-10 mt-4">
        <h1 className="mr-4 text-blue">Projects</h1>
        <hr className="w-96 border border-2 border-green rounded-full mt-3" />
        <hr className="w-96 border border-2 border-green rounded-full mt-3" />
      </div>
      <div>
        {roleType.exp.per.map((p) => {
          return (
            <div className="mx-20">
              <div className="flex flex-row justify-between mt-4">
                <h1 className="text-red">{p.name}</h1>
                {p.execlink && (
                  <a
                    href={p.execlink}
                    className="text-sm text-bgDark dark:text-green"
                  >
                    <h1>View Project</h1>
                  </a>
                )}
              </div>
              <div className="text-justify mt-4">
                <h1 className="text-base text-bgDark dark:text-green">
                  {p.about.head}
                </h1>
                <p className="text-sm dark:text-bgLight">{p.about.body}</p>
              </div>
              <div>
                <h1 className="mt-2 text-sm text-bgDark dark:text-yellow">
                  Technologies Used:{" "}
                </h1>
                <p className="text-xs capitalize text-bgDark dark:text-yellow">
                  {p.tecs.map((t) => `${t.name}, `)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="flex flex-row mx-10 mt-4">
        <h1 className="mr-4 text-blue">Education</h1>
        <hr className="w-96 border border-2 border-green rounded-full mt-3" />
        <hr className="w-96 border border-2 border-green rounded-full mt-3" />
      </div>
      <div className="mx-10 text-sm mt-4">
        <div className="flex flex-row justify-between">
          <h1 className="text-blue dark:text-green">
            {eduData.graduation.course}
          </h1>
          <h1 className="text-red">{eduData.graduation.collegeUniversity}</h1>
        </div>
        <div className="flex flex-row justify-between text-xs text-bgDark dark:text-bgLight">
          <h1>{eduData.graduation.discipline}</h1>
          <div className="flex flex-row justify-between">
            <h1 className="mr-2">{eduData.graduation.location}</h1>
            <h1>{eduData.graduation.duration}</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row mx-10 mt-4">
        <h1 className="mr-4 text-blue">Others</h1>
        <hr className="w-96 border border-2 border-green rounded-full mt-3" />
        <hr className="w-96 border border-2 border-green rounded-full mt-3" />
      </div>
      <div className="flex flex-row justify-between mx-10 text-bgDark dark:text-bgLight">
        <p className="text-sm">Languages: English, Hindi, Malayalam</p>
        <p className="text-sm">Hobbies: Comics, Music, Travelling</p>
      </div>
      <h1 className="mx-10 mt-2 text-sm text-bgDark dark:text-green">
        Links and Reference
      </h1>
      <ul className="text-xs mx-10">
        <li>
          <span className="text-red">Portfolio:</span>{" "}
          <span className="text-bgDark dark:text-green hover:text-blue dark:hover:text-blue">
            <a href={expData.personalExp.mySelf.execlink} target="_blank">
              {expData.personalExp.mySelf.execlink}
            </a>
          </span>
        </li>
        <li>
          <span className="text-red">Linkedin:</span>{" "}
          <span className="text-bgDark dark:text-green hover:text-blue dark:hover:text-blue">
            <a href={contactData.links.github} target="_blank">
              {contactData.links.linkedin}{" "}
            </a>
          </span>
        </li>
        <li>
          <span className="text-red">Github:</span>{" "}
          <span className="text-bgDark dark:text-green hover:text-blue dark:hover:text-blue">
            <a href={contactData.links.github} target="_blank">
              {contactData.links.github}
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export const Resume = () => {
  return (
    <article className=" flex flex-col items-center dark:bg-bgDark">
      <article
        className="h-a4 w-a4 bg-bgLight my-20 rounded-sm dark:bg-bgDark shadow-2xl"
        id="resume"
      >
        <ResHeader />
        <ResContent roleType={role.webDeveloper} />
        <Footer />
      </article>
      <a href="../assets/docs/resume-web-light.pdf">Download Resume</a>
    </article>
  );
};
