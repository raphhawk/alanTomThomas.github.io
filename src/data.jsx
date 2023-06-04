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
      when <span className="text-blue font-bold">TCS</span> (Tata Consultancy
      Services) hired me as an{" "}
      <span className="text-blue">Assistant Systems Engineer</span>. I was
      working in an <span className="text-blue font-bold">EDI</span> (Electronic
      Data Interchange) Environment, where{" "}
      <span className="text-blue font-bold">invoices</span> and{" "}
      <span className="text-blue font-bold">purchase orders</span> (P.O.) from
      vendors and business teams pile up and get reconciled for the integrity
      and enter into the database for{" "}
      <span className="text-blue">Data Warehousing</span> and{" "}
      <span className="text-blue font-bold">ETL</span> (Extract Transform Load)
      purposes. As time passed, I sensed my interest in Web Developement and{" "}
      <span className="text-blue">Software Engineer</span> to be growing with
      me. Hence I decided to end my career in EDI and ETL development to pursue
      a career in Web Development. I thank TCS for all the support they could
      provide me with my career. Thankyou :).
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
        <p className="m-8 md:m-0 text-justify dark:text-green">
          <br />
          Managed and deployed different automation pipelines in CA Workload
          Automation for communication of over 60 vendors
          <br className="hidden md:block" />
          Created ETL mappings for onprem to cloud migration on a hybrid cloud
          architecture project in Informatica and Oracle.
          <br className="hidden md:block" />
          Wrote scripts for underlying process in automation for Electronic Data
          Interchange (EDI) transactions like invoices and
          <br className="hidden md:block" />
          purchase orders between vendors and business team.
          <br className="hidden md:block" />
        </p>
      ),
      tecs: [
        tecs.nodejs,
        tecs.golang,
        tecs.snowflake,
        tecs.gcp,
        tecs.oracle,
        tecs.databricks,
        tecs.informatica,
      ],
    },
  },
  personalExp: {
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
