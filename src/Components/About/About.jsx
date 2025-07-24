import { useState } from "react";
import "./about.css";
import yasser from "../../assets/yasser.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import HTML from "../../assets/icons8-html.svg";
import CPlus from "../../assets/icons8-c++.svg";
import cSharp from "../../assets/icons8-c-sharp-logo-2.svg";
import css from "../../assets/icons8-css.svg";
import Js from "../../assets/icons8-js.svg";
import JQuery from "../../assets/icons8-jquery.svg";
import dotnet from "../../assets/icons8-.net-framework.svg";
import git from "../../assets/icons8-git.svg";
import gitHub from "../../assets/icons8-github.svg";
import MUI from "../../assets/icons8-material-ui.svg";
import Mysql from "../../assets/icons8-mysql.svg";
import nextjs from "../../assets/icons8-nextjs.svg";
import npm from "../../assets/icons8-npm.svg";
import RreactLogo from "../../assets/icons8-react-native.svg";
import Typscript from "../../assets/icons8-typescript.svg";
import vs from "../../assets/icons8-vs-code (1).svg";
import vsCode from "../../assets/icons8-vs-code.svg";
import Bootstrap from "../../assets/icons8-bootstrap.svg";
import mongoDb from "../../assets/mongodb-original.svg";
import Tailwind from "../../assets/tailwind-css.svg";
import Nodejs from "../../assets/nodejs.svg";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { Helmet } from "react-helmet-async";

export default function About() {
  const [activeTab, setActiveTab] = useState("Section1"); // Set the initial active tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const techStack = [
    {
      name: "HTML",
      src: HTML,
      isDone: true,
    },
    {
      name: "Bootstrap",
      src: Bootstrap,
      isDone: true,
    },
    {
      name: " C++",
      src: CPlus,
      isDone: true,
    },
    {
      name: "CSS",
      src: css,
      isDone: true,
    },
    {
      name: "JavaScript",
      src: Js,
      isDone: true,
    },
    {
      name: "jQuery",
      src: JQuery,
      isDone: true,
    },
    {
      name: "React.js",
      src: RreactLogo,
      isDone: true,
    },
    {
      name: "MUI",
      src: MUI,
      isDone: true,
    },
    {
      name: "TypeScript",
      src: Typscript,
      isDone: true,
    },

    {
      name: "Next.js",
      src: nextjs,
      isDone: true,
    },
    {
      name: "MongoDB",
      src: mongoDb,
      isDone: true,
    },
    {
      name: "Tailwind",
      src: Tailwind,
      isDone: true,
    },
    {
      name: "Node.js",
      src: Nodejs,
      isDone: true,
    },
    {
      name: "MySql",
      src: Mysql,
      isDone: true,
    },
    {
      name: "C#",
      src: cSharp,
      isDone: false,
    },

    {
      name: ".Net",
      src: dotnet,
      isDone: false,
    },
  ];
  const Tools = [
    {
      name: "VS code",
      src: vsCode,
    },
    {
      name: "VS",
      src: vs,
    },
    {
      name: "npm",
      src: npm,
    },
    {
      name: "Git",
      src: git,
    },
    {
      name: "GitHub",
      src: gitHub,
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Yasser Mohamed | Front-End Developer Portfolio</title>
        <meta
          name="description"
          content="Yasser Mohamed is a dedicated Front-End Developer specializing in React.js, Next.js, and modern web technologies. Explore professional experience, tech stack, and projects."
        />
        <meta
          property="og:title"
          content="About Yasser Mohamed | Front-End Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Yasser Mohamed is a dedicated Front-End Developer specializing in React.js, Next.js, and modern web technologies. Explore professional experience, tech stack, and projects."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yasserrsportfolio.vercel.app/about"
        />
        <meta
          property="og:image"
          content="https://yasserrsportfolio.vercel.app/assets/yasserNo-bg-e8a15c6f.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Yasser Mohamed | Front-End Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Yasser Mohamed is a dedicated Front-End Developer specializing in React.js, Next.js, and modern web technologies. Explore professional experience, tech stack, and projects."
        />
        <meta
          name="twitter:image"
          content="https://yasserrsportfolio.vercel.app/assets/yasserNo-bg-e8a15c6f.png"
        />
      </Helmet>
      <div
        className="container about_container  position-relative"
        style={{ zIndex: "1" }}
      >
        <div className="row">
          <div className="col-12 text-center mt-5">
            <h5>Get To Know</h5>
            <h2 className="text-info">About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 p-5">
            <div className="about_me">
              <div className="about_me_image">
                {/* Add your image source */}
                <img src={yasser} alt="yasser" className="w-100" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7 text-center">
            <div className="about_content row d-flex justify-content-around mt-5">
              {[{
                icon: <FaAward className="about_icon" />,
                title: "Experience",
                subtitle: "+2 Years"
              }, {
                icon: <FiUsers className="about_icon" />,
                title: "Clients",
                subtitle: "15+ Worldwide"
              }, {
                icon: <VscFolderLibrary className="about_icon" />,
                title: "Projects",
                subtitle: "20+ Completed"
              }].map((card, i) => (
                <motion.div
                  key={card.title}
                  className="col-12 col-md-4 p-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                >
                  <article className="about_cards d-flex flex-column justify-content-center align-items-center">
                    {card.icon}
                    <h5>{card.title}</h5>
                    <small>{card.subtitle}</small>
                  </article>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="p-2 mb-3 "
              style={{ backgroundColor: "rgba(3 ,32 ,42 , 0.6)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>
                I am Yasser Mohamed, a dedicated Frontend Web Developer with
                over 2 years of hands-on experience in crafting exceptional user
                interfaces using React.js|Next.js. My journey in web development
                has been driven by a passion for creating seamless and visually
                appealing web experiences.
              </p>
            </motion.div>
            {/* If you're using React Router, you can use the Link component */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              style={{ display: 'inline-block' }}
            >
              <Link
                to="/contactUs"
                className="  mt-5 glow-on-hover p-3 text-decoration-none "
                style={{ marginBottom: "7rem" }}
              >
                Let&apos;s Talk
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="row vertical-tab my-5">
          {/* Nav tabs */}
          <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
            <ul className="nav-tabs d-flex justify-content-between    d-md-block px-0">
              <li
                className={
                  activeTab === "Section1"
                    ? "active my-2 my-md-5 "
                    : "my-2 my-md-5 "
                }
              >
                <a onClick={() => handleTabClick("Section1")}>Education</a>
              </li>
              <li
                className={
                  activeTab === "Section2"
                    ? "active my-2 my-md-5 "
                    : "my-2 my-md-5 "
                }
              >
                <a onClick={() => handleTabClick("Section2")}>Experiences</a>
              </li>
              <li
                className={
                  activeTab === "Section3"
                    ? "active my-2 my-md-5 "
                    : "my-2 my-md-5 "
                }
              >
                <a onClick={() => handleTabClick("Section3")}>Certification</a>
              </li>
            </ul>
          </div>
          {/* Tab panes with Framer Motion */}
          <div className="col-12 col-md-8 d-flex align-items-center">
            <AnimatePresence mode="wait">
              {activeTab === "Section1" && (
                <motion.div
                  key="Section1"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                  className="tab-content tabs w-100"
                >
                  <h3>Education</h3>
                  <h6 className="px-3">
                    Bachelor degree in Agriculture Engineering
                  </h6>
                  <p className="px-2 px-md-5">
                    Completed a degree in Agriculture Engineering, demonstrating
                    a strong foundation in problem-solving and analytical
                    skills. Successfully transitioned to the field of Web
                    Development, driven by a passion for problem-solving and a
                    desire to expand my knowledge in web technologies. Currently
                    dedicated to honing my skills as a React.js developer,
                    embracing the dynamic challenges of web development with
                    enthusiasm and determination. In pursuit of backend
                    development expertise to complement my frontend skills and
                    enhance problem-solving capabilities.
                  </p>
                </motion.div>
              )}
              {activeTab === "Section2" && (
                <motion.div
                  key="Section2"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                  className="tab-content tabs w-100"
                >
                  <h3>Professional Experience</h3>
                  <h6 className="px-3">
                    Front-End Developer, Unique Destination Travel Network
                    (UDTN){" "}
                    <span className="text-muted-white">
                      Mar 2025 – Present, Cairo, Egypt
                    </span>
                  </h6>
                  <ul className="px-2 px-md-5">
                    <li>
                      Developing responsive and scalable front-end applications
                      using modern frameworks (Next.js, React, etc.).
                    </li>
                    <li>
                      Collaborating with back-end developers and designers to
                      create seamless user experiences.
                    </li>
                    <li>
                      Working on multiple systems including booking management,
                      supplier dashboards, and customer-facing portals.
                    </li>
                  </ul>
                  <h6 className="px-3">
                    Front-End Developer, تجارة - Tjaara{" "}
                    <span className="text-muted-white">
                      Aug 2024 – Mar 2025, Cairo, Egypt
                    </span>
                  </h6>
                  <ul className="px-2 px-md-5">
                    <li>
                      Delivered responsive and high-performance user interfaces
                      for dashboards, e-commerce platforms, and websites
                      tailored to the Saudi market.
                    </li>
                    <li>
                      Developed and optimized web applications using React and
                      Next.js to enhance user experience and business
                      functionality.
                    </li>
                    <li>
                      Collaborated with cross-functional teams on project
                      planning, UI/UX enhancement, and code quality assurance.
                    </li>
                    <li>
                      Contributed to the growth and scalability of Tjaara’s
                      digital products by creating user-centered, maintainable,
                      and efficient solutions.
                    </li>
                  </ul>
                  <h6 className="px-3">
                    Front-End Developer, X-event (freelance){" "}
                    <span className="text-muted-white">
                      Apr 2024 – Nov 2024
                    </span>
                  </h6>
                  <ul className="px-2 px-md-5">
                    <li>
                      Developed an advanced Event Management System to
                      streamline event creation, publication, and management,
                      featuring customizable agendas and media upload
                      capabilities.
                    </li>
                    <li>
                      Implemented seamless event search, ticketing, and payment
                      processing, with secure financial management through
                      integrated bank accounts and wallets.
                    </li>
                    <li>
                      Designed role-based access control, supporting admins,
                      owners, and speakers with tailored permissions for
                      efficient event coordination.
                    </li>
                    <li>
                      Enhanced user experience with real-time notifications,
                      dynamic seating charts, and customizable attendee
                      certifications.
                    </li>
                  </ul>
                  <h6 className="px-3">
                    Front-End Developer, TB3arbi (freelance){" "}
                    <span className="text-muted-white">
                      Oct 2023 – Nov 2023
                    </span>
                  </h6>
                  <ul className="px-2 px-md-5">
                    <li>
                      Led the front-end development for a travel event planning
                      platform using Next.js.
                    </li>
                    <li>
                      Ensured a seamless user experience by designing and
                      implementing user-friendly interfaces.
                    </li>
                    <li>
                      Worked closely with the backend team to optimize
                      performance and ensure the successful delivery of the
                      project.
                    </li>
                  </ul>
                  <h6 className="px-3">
                    Front-End Developer, HYPER SCADA (freelance){" "}
                    <span className="text-muted-white">
                      Dec 2023 – Feb 2024
                    </span>
                  </h6>
                  <ul className="px-2 px-md-5">
                    <li>
                      Developed and maintained user-friendly web applications
                      using React.js, focusing on CRUD operations for efficient
                      data management.
                    </li>
                    <li>
                      Created intuitive data visualization tools, including
                      graphs and charts, to help businesses analyze and
                      interpret their data.
                    </li>
                    <li>
                      Delivered clean, maintainable code, and adhered to best
                      practices to improve the scalability and reliability of
                      freelance project.
                    </li>
                  </ul>
                </motion.div>
              )}
              {activeTab === "Section3" && (
                <motion.div
                  key="Section3"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                  className="tab-content tabs w-100"
                >
                  <h3>Certification</h3>
                  <ul className="px-2 px-md-5">
                    <li className="my-2">
                      <a
                        className="text-decoration-none"
                        href="https://drive.google.com/file/d/1OJecZn4htlKDjDXsHm400M27hrqVLPEM/view?usp=sharing"
                        target={`_blank`}
                      >
                        Frontend Development Diploma Route IT Training Center{" "}
                        <BsFillCloudArrowUpFill />
                      </a>
                    </li>
                    <li className="my-2">
                      <a
                        className="text-decoration-none"
                        href="https://drive.google.com/file/d/1KRACeS89oTdgf7f2BffOt2he6T7MnMh7/view?usp=sharing"
                        target={`_blank`}
                      >
                        Certificate Complete JavaScript Course From
                        (Mahara-tech)
                        <BsFillCloudArrowUpFill />
                      </a>
                    </li>
                    <li className="my-2">
                      <a
                        className="text-decoration-none"
                        href="https://drive.google.com/file/d/11yoJmOqr6zMOqVbJ4Od2HC_fy0h57ZD7/view?usp=sharing"
                        target={`_blank`}
                      >
                        Certificate Complete HTML , CSS Course From
                        (Mahara-tech)
                        <BsFillCloudArrowUpFill />
                      </a>
                    </li>
                    <li className="my-2">
                      <a className="text-decoration-none" target={`_blank`}>
                        Backend Development Diploma Route IT Training Center{" "}
                        <BsFillCloudArrowUpFill />
                      </a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="row my-4  ">
          <h3 className="text-info">Tech stack</h3>
        </div>
        <div className="row mb-5">
          {techStack.map((e, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="col-6 col-md-4 col-lg-3 my-4 "
              >
                <div
                  className="p-3 tech-card  rounded d-flex justify-content-around align-items-center position-relative h-100"
                  data-aos="slide-up"
                >
                  {e.isDone ? (
                    ""
                  ) : (
                    <span className="badge bg-danger position-absolute start-0  bottom-100  m-2">
                      Pending
                    </span>
                  )}
                  <img
                    src={e.src}
                    className={
                      e.name === "Next.js" ? "w-25 bg-white rounded" : "w-25"
                    }
                    alt={e.name}
                  />
                  <h6 className="mb-0">{e.name}</h6>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="row my-4  ">
          <h3 className="text-info">Tools</h3>
        </div>

        <div className="row my-5 pb-5">
          {Tools.map((e, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="col-6 col-md-4 col-lg-3 my-2 "
              >
                <div
                  className="p-3 tech-card  rounded d-flex justify-content-around align-items-center position-relative"
                  data-aos="slide-up"
                  //  data-aos-delay="300"
                >
                  <img
                    src={e.src}
                    className={
                      e.name === "Next.js" ? "w-25 bg-white" : "w-25"
                    }
                    alt={e.name}
                  />
                  <h6 className="mb-0">{e.name}</h6>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="row"></div>
      </div>
    </>
  );
}
