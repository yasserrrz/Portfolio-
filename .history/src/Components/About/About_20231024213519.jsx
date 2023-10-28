import  { useEffect, useState } from "react";
import "./about.css";
import yasser from "../../assets/yasser.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import HTML from '../../assets/icons8-html.svg'
import CPlus from '../../assets/icons8-c++.svg'
import cSharp from '../../assets/icons8-c-sharp-logo-2.svg'
import css  from '../../assets/icons8-css.svg'
import Js from '../../assets/icons8-js.svg'
import JQuery from '../../assets/icons8-jquery.svg'
import dotnet from '../../assets/icons8-.net-framework.svg'
import git from '../../assets/icons8-git.svg'
import gitHub from '../../assets/icons8-github.svg'
import MUI from '../../assets/icons8-material-ui.svg'
import Mysql from '../../assets/icons8-mysql.svg'
import nextjs from '../../assets/icons8-nextjs.svg'
import npm from '../../assets/icons8-npm.svg'
import RreactLogo from '../../assets/icons8-react-native.svg'
import Typscript from '../../assets/icons8-typescript.svg'
import vs from '../../assets/icons8-vs-code (1).svg'
import vsCode from '../../assets/icons8-vs-code.svg'
import Bootstrap from '../../assets/icons8-bootstrap.svg'
import {BsFillCloudArrowUpFill} from'react-icons/bs'

export default function About() {
  const [activeTab, setActiveTab] = useState("Section1"); // Set the initial active tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const techStack = [
    {
      name:"HTML",
      src:HTML,
      isDone:true,
    },
    {
      name:"Bootstrap",
      src:Bootstrap,
      isDone:true,
    },
    {
      name:" C++",
      src:CPlus,
      isDone:true,
    },
    {
      name:"CSS",
      src:css,
      isDone:true,
    },
    {
      name:"JavaScript",
      src:Js,
      isDone:true,
    },
    {
      name:"jQuery",
      src:JQuery,
      isDone:true,
    },
    {
      name:"React.js",
      src:RreactLogo,
      isDone:true,
    },
    {
      name:"MUI",
      src:MUI,
      isDone:true,
    },
    {
      name:"TypeScript",
      src:Typscript,
      isDone:true,
    },
    {
      name:"C#",
      src:cSharp,
      isDone:false,
    },
    
    {
      name:".Net",
      src:dotnet,
      isDone:false,
    },
    {
      name:"Next.js",
      src:nextjs,
      isDone:false,
    },
  
    {
      name:"MySql",
      src:Mysql,
      isDone:false,
    },
    
  ]
  const Tools = [
    
      {
        name:"VS code",
        src:vsCode,
       
      },
      {
        name:"VS",
        src:vs,
       
      },
      {
        name:"npm",
        src:npm,
       
      },
      {
        name:"Git",
        src:git,
       
      },
      {
        name:"GitHub",
        src:gitHub,
       
      },
  ]
  useEffect(()=>{
    AOS.init({
      duration: 400, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing type
      offset: 200, // Offset (in pixels) from the top of the viewport
      // delay: 100,
    });
    
  },[])
  return (
    <>
      <div className="container about_container  position-relative" style={{zIndex:"1" }}>
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
              <div className="col-12 col-md-4 p-4">
                <article className="about_cards d-flex flex-column justify-content-center align-items-center"  data-aos="zoom-in">
                  <FaAward className="about_icon" />
                  <h5>Experience</h5>
                  <small>+2 Years</small>
                </article>
              </div>
              <div className="col-12 col-md-4 p-4">
                <article className="about_cards d-flex justify-content-center flex-column align-items-center"  data-aos="zoom-in">
                  <FiUsers className="about_icon" />
                  <h5>Clients</h5>
                  <small>15+ Worldwide</small>
                </article>
              </div>
              <div className="col-12 col-md-4 p-4">
                <article className="about_cards d-flex justify-content-center flex-column align-items-center"  data-aos="zoom-in">
                  <VscFolderLibrary className="about_icon" />
                  <h5>Projects</h5>
                  <small>20+ Completed</small>
                </article>
              </div>
            </div>
            <div className="p-2 " style={{backgroundColor:"rgba(3 ,32 ,42 , 0.6)" ,}}>

            <p >
              I am Yasser Mohamed, a dedicated Frontend Web Developer with over 2
              years of hands-on experience in crafting exceptional user
              interfaces using React.js. My journey in web development has been
              driven by a passion for creating seamless and visually appealing
              web experiences.
            </p>
            </div>
            {/* If you're using React Router, you can use the Link component */}
            <Link
              to="/contactUs"
              className="  mt-3 "
              style={{ marginBottom: "7rem" }}
            >
              Let's Talk
            </Link>
          </div>
        </div>

        <div className="row vertical-tab my-5">
          {/* Nav tabs */}
          <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
            <ul className="nav-tabs d-flex justify-content-between    d-md-block px-0" 
               data-aos="fade-up"
            >
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
          {/* Tab panes */}
          <div className="col-12 col-md-8 d-flex align-items-center">
            <div className="tab-content tabs w-100"     data-aos="fade-right">
              <div
                className={activeTab === "Section1" ? "d-block " : "d-none"}
                id="Section1"
             
              >
                <h3>Education</h3>
                <h6 className="px-3">Bachelor degree in Agriculture Engineering</h6>
                <p className="px-2 px-md-5">
                  Completed a degree in Agriculture Engineering, demonstrating a
                  strong foundation in problem-solving and analytical skills.
                  Successfully transitioned to the field of Web Development,
                  driven by a passion for problem-solving and a desire to expand
                  my knowledge in web technologies. Currently dedicated to
                  honing my skills as a React.js developer, embracing the
                  dynamic challenges of web development with enthusiasm and
                  determination. In pursuit of backend development expertise to
                  complement my frontend skills and enhance problem-solving
                  capabilities.
                </p>
              </div>
              <div
                className={activeTab === "Section2" ? "d-block " : "d-none"}
                id="Section2"
          
                >
              
                <h3>Experiences</h3>
                 
                  <h6 className="px-3">
                    Front-End Developer at bedab Software | May 2023 | Cairo,
                    Egypt.
                  </h6>
                  <p className="px-2 px-md-5">
                  Contributed to projects involving static websites,
                    React.js, and MVC architecture, showcasing proficiency in
                    frontend development.
                  </p>
                  <h6 className="px-3">
                    Front-End Development Diploma,At Route Academy December 2022
                    – April 2023 Cairo,Egypt
                  </h6>
                <p className="px-2 px-md-5">
                  Intensive training in HTML, CSS, JavaScript, and responsive
                  web design. Specialized in React.js and Redux for building
                  interactive user interfaces. Hands-on experience in creating
                  responsive and user-friendly websites. Proficient in
                  translating design mock-ups into functional web pages. Stayed
                  updated with the latest front-end development trends.
                </p>
              </div>
              <div
                className={activeTab === "Section3" ? "d-block " : "d-none"}
                id="Section3"
              >
                <h3>Certification</h3>
                <ul className="px-2 px-md-5">
                   <li  className="my-2">
                        <a className="text-decoration-none" href="https://drive.google.com/file/d/1OJecZn4htlKDjDXsHm400M27hrqVLPEM/view?usp=sharing"target={`_blank`}>
                        Frontend Development Diploma 
                        Route IT Training Center <BsFillCloudArrowUpFill/>
                        </a>
                   </li>
                   <li  className="my-2">
                        <a className="text-decoration-none" href="https://drive.google.com/file/d/1KRACeS89oTdgf7f2BffOt2he6T7MnMh7/view?usp=sharing" target={`_blank`}>
                        Certificate Complete JavaScript Course From (Mahara-tech)
                        <BsFillCloudArrowUpFill/>
                        </a>
                   </li>
                   <li  className="my-2">
                        <a className="text-decoration-none" href="https://drive.google.com/file/d/11yoJmOqr6zMOqVbJ4Od2HC_fy0h57ZD7/view?usp=sharing" target={`_blank`}>
                        Certificate Complete HTML , CSS Course From (Mahara-tech)
                        <BsFillCloudArrowUpFill/>
                        </a>
                   </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className="row my-4  ">
              <h3 className="text-info">
              Tech stack
              </h3>
        </div>
        <div className="row mb-5">
             {techStack.map((e ,i)=>{
              return<>
               <div key={i+2} className="col-6 col-md-4 col-lg-3 my-4 ">
                <div className="p-3 tech-card  rounded d-flex justify-content-around align-items-center position-relative" 
                 data-aos="slide-up"
           
                 >
                 {e.isDone?"":<span className="badge bg-danger position-absolute start-0  bottom-100  m-2" >Bending</span>}
                    <img src={e.src} className={e.name === "Next.js"? "w-25 bg-white" :"w-25"} alt={e.name} />
                    <h6 className="mb-0">{e.name}</h6>

                </div>
              </div>
              
              </>
             })}
             
        </div>
        <div className="row my-4  ">
              <h3 className="text-info">
              Tools
              </h3>
        </div>

        <div className="row my-5 pb-5">
             {Tools.map((e ,i)=>{
              return<>
               <div key={i+1} className="col-6 col-md-4 col-lg-3 my-2 ">
                <div className="p-3 tech-card  rounded d-flex justify-content-around align-items-center position-relative" 
                 data-aos="slide-up"
                //  data-aos-delay="300"
                 >
                
                    <img src={e.src} className={e.name === "Next.js"? "w-25 bg-white" :"w-25"} alt={e.name} />
                    <h6 className="mb-0">{e.name}</h6>
                </div>
              </div>
              
              </>
             })}
             
        </div>
        <div className="row"></div>
      </div>

    </>
  );
}
