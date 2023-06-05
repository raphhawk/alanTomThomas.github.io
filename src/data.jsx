import myPhoto from "/src/images/Me.jpg";
import tcsLogo from "/src/images/logos/tcs.png";
import { tecs } from "./techReps";
import cllgLogo from "/src/images/rjit.png";
import univLogo from "/src/images/rgpv.png";
import cert1 from "/src/assets/docs/snowflake.jpg";
import cert2 from "/src/assets/docs/snowflake1.jpg";
import cert3 from "/src/assets/docs/databricks.jpg";
import cert4 from "/src/assets/docs/databricks1.jpg";
import cert5 from "/src/assets/docs/oracle.jpg";
import cert6 from "/src/assets/docs/oracle1.jpg";
import cert1Pdf from "/src/assets/docs/UC-35c3a822-d8c8-413a-8644-fad6759b02d2-snowflake1.pdf";
import cert2Pdf from "/src/assets/docs/UC-97b8c150-3909-48b7-97cc-bd71467532d8-snowflake2.pdf";
import cert3Pdf from "/src/assets/docs/UC-97f5ae71-72d2-4c26-b929-ffa4c7f4e0cc-databricks1.pdf";
import cert4Pdf from "/src/assets/docs/UC-02689e41-2142-4881-809e-6c897a3e6e70-databricks2.pdf";
import cert5Pdf from "/src/assets/docs/UC-13d89534-6f77-4bf7-b9ba-c09e66c9e180-oracle1.pdf";
import cert6Pdf from "/src/assets/docs/UC-4460a486-2744-44bb-a403-ceb5fa0c4959-oracle2.pdf";

export const colorschemes = {
  snowMountain: {
    red: "#b56660",
    green: "#9bbaaf",
    blue: "#46819e",
    yellow: "#dbabbc",
    bgDark: "#242e4f",
    fgDark: "#ffffff",
    bgLight: "#ffffff",
  },
};

export const navData = {
  home: { route: "/", name: "home" },
  about: { route: "/abt", name: "about" },
  exp: { route: "/exp", name: "experience" },
  edu: { route: "/edu", name: "education" },
  resume: { route: "/res", name: "resume" },
  mod: { route: "", name: "mode" },
};

export const homeData = {
  name: "Alan Tom Thomas",
  designation: "Junior Front End Developer",
  info: "Hi there!, I am an aspiring Web Developer with experience in modern technologies such as React, Node.js, Express and a bit of Golang. Feel free to check my portfolio site and know more about me. Thank you for visiting this site.",
};

export const aboutData = {
  image: myPhoto,
  greet: "Hello Everyone!",
  para: (
    <p className="text-justify mx-8 md:mx-0 md:text-left dark:text-green">
      I am Alan, an{" "}
      <span className="text-blue font-bold">Aspiring Web Developer</span> and a{" "}
      <span className="text-blue">Systems Engineer</span>. I started my tech
      journey on <span className="text-blue font-bold">December 13th 2021</span>{" "}
      as an <span className="text-blue">Assistant Systems Engineer</span> at{" "}
      <span className="text-blue font-bold">TCS</span> (Tata Consultancy
      Services) . I was working on{" "}
      <span className="text-blue">backend databases</span> such as{" "}
      <span className="text-blue font-bold">Snowflake</span> and{" "}
      <span className="text-blue font-bold">Oracle</span> maintaining{" "}
      <span className="text-blue">
        data and ETL (Extract Transform Load) pipelines
      </span>{" "}
      through{" "}
      <span className="text-blue font-bold">
        {" "}
        ADF (Azure Data Factory), Snowpark and Informatica(IICS){" "}
      </span>{" "}
      in an <span className="text-blue font-bold">EDI</span> (Electronic Data
      Interchange) Environment. As time passed, I started to learn and build
      <span className="text-blue"> frontend projects </span> with{" "}
      <span className="text-blue font-bold">React</span> and{" "}
      <span className="text-blue font-bold">Tailwind</span> which I enjoyed
      doing hence I am on a verge to become a{" "}
      <span className="text-blue"> full stack web developer. </span> Thankyou
      :).
    </p>
  ),
};

export const contactData = {
  links: {
    linkedin: "https://www.linkedin.com/in/alan-thomas-8727201a1/",
    github: "https://github.com/raphhawk",
  },
  contact: {
    location: "New Delhi, India",
    phone: "+91 93-4048-5257",
    email: "bing619.at@gmail.com",
  },
  copyright: "Alan Tom Thomas © 2023",
};
export const expData = {
  proExp: {
    tcs: {
      name: "Tata Consultancy Services",
      link: "https://www.tcs.com/",
      logo: tcsLogo,
      location: "Indore, Madhya Pradesh, India",
      duration: "Dec 2021 - current (1.6y)",
      about: (
        <ul className="m-8 list-disc md:m-0 text-justify dark:text-green">
          <li>
            Managed and deployed data pipelines with Snowpark, ADF (Azure Data
            Factory), and Informatica (IICS) for transaction of data over 60
            vendors.
          </li>
          <li>
            Migrated large datasets into Snowflake with Snowpipe and the "copy"
            command. Created ETL mappings for onprem to cloud migration on a
            hybrid cloud architecture project in Informatica and Oracle.
          </li>
          <li>
            Created stored procedures and UDFs (user defined functions) in
            Snowflake for underlying data processes and ETL worlflows.
          </li>
        </ul>
      ),
      tecs: [
        tecs.nodejs,
        tecs.golang,
        tecs.snowflake,
        tecs.gcp,
        tecs.oracle,
        tecs.adf,
        tecs.databricks,
        tecs.informatica,
      ],
    },
  },
  personalExp: {
    portfolioSite: {
      name: "Portfolio Website",
      repolink: "https://github.com/raphhawk/alanTomThomas.github.io/tree/p-v2",
      execlink: "https://raphhawk.github.io/alanTomThomas.github.io/",
      header: "A Portfolio Website created with React and Tailwindcss.",
      about: {
        head: "A Portfolio Website created with React and Tailwindcss.",
        body: "A Frontend Single Page Application that helps showcase the projects I have been working on. The Application use React 18 as front end library, React Router 6 for routing, Tailwindcss as css preprocessor and Vite as development server. The site is deployed to Github Pages with Github Actions and uses Github as version control",
      },
      tecs: [
        tecs.react,
        tecs.tailwind,
        tecs.javascript,
        tecs.nodejs,
        tecs.reactRouter,
        tecs.vite,
        tecs.ghactions,
        tecs.ghpages,
        tecs.github,
      ],
    },
    nodeContainers: {
      name: "Node Containers",
      repolink: "https://github.com/raphhawk/Amzaon-containers",
      header: "A Nodejs Backend Application.",
      about: {
        head: "A Nodejs Backend Application.",
        body: "A Backend for a blog-post app which takes care of authentication and caching of blogs with load-balancing for better traffic management. This application can be deployed for both production/development environment with the help of containearization technologies. ",
      },
      tecs: [
        tecs.nodejs,
        tecs.expressjs,
        tecs.mongodb,
        tecs.redis,
        tecs.nginx,
        tecs.docker,
        tecs.dockerSwarm,
        tecs.github,
        tecs.curl,
        tecs.dockerCompose,
      ],
    },
    tentacles: {
      name: "Tentacles",
      repolink: "https://github.com/raphhawk/Tentacles",
      header: "An implementation of microservices architecture in action.",
      about: {
        head: "An implementation of microservices architecture in action.",
        body: "This Web App implements various microservices such as Authentication, Queuing, Logging, Broker and Listening. These microservices are the interconnected with the Front End through REST apis. The front end is designed for testing each of these microservices.",
      },
      tecs: [
        tecs.golang,
        tecs.goChi,
        tecs.docker,
        tecs.mongodb,
        tecs.rabbitmq,
        tecs.make,
        tecs.html,
        tecs.css,
        tecs.javascript,
        tecs.bootstrap,
        tecs.github,
        tecs.dockerCompose,
      ],
    },
    vicious: {
      name: "Vicious",
      repolink: "https://github.com/raphhawk/vicious",
      execlink: "https://raphael-hawk.itch.io/vicious",
      header: "A 2d Platformer Game",
      about: {
        head: "A 2d Platformer Game",
        body: 'A 2 Dimensional game that has platforming mechanism. This is a rage game created by myself for my University project and also for a game jam. This is a retro themed side-scrolling game that helped me learn fundmentals of programming and the "wrong" way of writing code. ',
      },
      tecs: [tecs.godot, tecs.krita, tecs.libresprite, tecs.lmms, tecs.github],
    },
  },
};

export const eduData = {
  graduation: {
    collegeName: "Rustamji Institute of Technology",
    collegeUniversity: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
    location: "Gwalior, Madhya Pradesh, India",
    duration: "May 2016 - Apr 2020 (4 y)",
    course: "Bachelor's of Engineering",
    discipline: "Information Technology",
    gpa: "GPA: 6.8/10",
    univLogo: univLogo,
    cllgLogo: cllgLogo,
  },
  certificates: {
    cert1: { img: cert1, pdf: cert1Pdf },
    cert2: { img: cert2, pdf: cert2Pdf },
    cert3: { img: cert3, pdf: cert3Pdf },
    cert4: { img: cert4, pdf: cert4Pdf },
    cert5: { img: cert5, pdf: cert5Pdf },
    cert6: { img: cert6, pdf: cert6Pdf },
  },
};
