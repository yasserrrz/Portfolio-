import  { useState } from 'react'
import './portfolio.css'
import {VscGithubInverted} from "react-icons/vsc"
import {FaLink} from "react-icons/fa"
import {BiLinkAlt} from "react-icons/bi"
// import Img1 from '../../assets/me-header.png'
import Quiz from '../../assets/Quiz.png'
import Menu from "../../assets/menu-mobile.jpg"
import Ecomerce from "../../assets/Ecommerc.png"
import SeeMoreParagraph from './SeeMoreParagraph'
import orders  from "../../assets/orders.jpg"
import Taskify from "../../assets/taskfy.png"
import Bookmarker from "../../assets/Bookmarker.png"
import Recipes from "../../assets/Recipes.png"
import static_portfolio_2 from "../../assets/portfolio_two.png"
import static_portfolio_1 from "../../assets/static_portfolio_one.pn.png"



export default function Portfolio() {
 
  const projectsData = [
    {
        name:"E-commerce",
        img: Ecomerce,
        gitHub:"https://github.com/yasserrrz/Ecommerce",
        demo: "",
        showFullText: false,
        text:`E-commerce Website: A fully functional online store for buying and selling products, built using React.js.
        Features: User authentication, product catalog, shopping cart, secure payment processing, and order tracking.`
    }
    ,
    {
        name :"Quiz",
        img : Quiz,
        gitHub:"https://github.com/yasserrrz/Quizz",
        demo: "",
        showFullText: false,
        text: "JavaScript Quiz or exam that allow the user or student to select the number of the question and the degree of difficulty (Easy , Medium , Hard) and show him if his answer correct or not after he choose his answer ant at the end showing him his degree "
    },
    {
        name:"Menu",
        img: Menu,
        gitHub:"https://github.com/yasserrrz/Menu",
        demo: "",
        showFullText: false,
        text:"The menu application displays the categories and items for each category and the details of each item. It is also allowed if the user’s website matches the restaurant’s website. It allows him to request services from the restaurant such as calling a waiter and so on."
    }
    ,
    {
        name:"Menu Orders",
        img: orders,
        gitHub:"https://github.com/yasserrrz/Menu_orders",
        demo: "",
        showFullText: false,
        text:"Displaying orders made by the user who was in the restaurant, where the calls are displayed, the time since the call was made, how long ago this call was made, and some other details. The calls are divided according to type and also according to time. It can also display orders if the order request was added by him.  The menu"
    
    }
    
    ,
    {
      name:"To-do List",
      img: Taskify,
      gitHub:"https://github.com/yasserrrz/task_Fiy",
      demo: "https://task-fiy.vercel.app/",
      showFullText: false,
      text:`"📋 React TypeScript Todo List with Drag-and-Drop 🚀

      This open-source project is a feature-rich and highly customizable Todo List application, developed using React and TypeScript. One of the standout features of this app is its intuitive drag-and-drop functionality, which allows you to effortlessly manage your tasks by moving them between different categories, such as 'To-Do,' 'In Progress,' and 'Done.'`
  }
  ,
  {
    name:"Bookmarker",
    img: Bookmarker,
    gitHub:"https://github.com/yasserrrz/Bookmarker",
    demo: "",
    showFullText: false,
    text:"Bookmarker your favorite websites. Bookmarker, a user-friendly web application built with HTML, CSS, Bootstrap, and JavaScript."
}
,
{
  name:"Recipes",
  img: Recipes,
  gitHub:"https://github.com/yasserrrz/Recipes_Website",
  demo: "",
  showFullText: false,
  text:"Responsive  recipe website build with JavaScript, css , jQuery and bootstrap , using API to fetch the data from it , where the API is divided into categories , areas , search , contact"
}
,
{
  name:"Static Portfolio",
  img: static_portfolio_1,
  gitHub:"",
  demo: "https://static-portfolio-1.vercel.app/",
  showFullText: false,
  text:"Static responsive portfolio build with Html , css , js ,bootstrap"
}
,
{
  name:"Static Portfolio#2",
  img: static_portfolio_2,
  gitHub:"https://github.com/yasserrrz/Portfolio_1-",
  demo: "https://portfolio-1-mocha.vercel.app/#blog",
  showFullText: false,
  text:"Static responsive portfolio build with Html , css , js ,bootstrap and adding some features by jquery"
}
,
{
  name:"",
  img: "",
  gitHub:"",
  demo: "",
  showFullText: false,
  text:""
}
,
{
  name:"",
  img: "",
  gitHub:"",
  demo: "",
  showFullText: false,
  text:""
}
,
{
  name:"",
  img: "",
  gitHub:"",
  demo: "",
  showFullText: false,
  text:""
}
,


]

const [showFullText, setShowFullText] = useState(projectsData.map(() => false));

const toggleShowText = (index) => {
  const updatedShowText = [...showFullText];
  updatedShowText[index] = !updatedShowText[index];
  setShowFullText(updatedShowText);
};

  return (
    <>
        
        <div className="container about_container mb-5">
        <div className="row ">
          <div className="col-12 text-center my-5">
            <h5>Get To Know About My</h5>
            <h2 className="text-info">Projects</h2>
          </div>
        </div>

        <div className="row my-5">
          <h2>
          Past Projects Experience
          </h2>
        </div>

        <div className="row g-4 ">
        {projectsData.map((e, index) => (
        <div key={index} className="col-12 col-md-6 col-lg-4">
          <div className="project  p-3 rounded" >
            <div className="card-heder d-flex px-2 justify-content-between">
              <h6>{e.name}</h6>
              <div className="icn">
                <a className='mx-2' href={e.gitHub}>
                  <VscGithubInverted/>
                </a>
                <a className='mx-2' href={e.demo?e.demo : e.gitHub}>
                  <FaLink/>
                </a>
              </div>
            </div>
            <div className="card-img rounded-1 position-relative">
              <div className="layer d-flex justify-content-center align-items-center">
                <span className='fw-bold'>Demo</span> <a href={e.demo?e.demo : e.gitHub}><BiLinkAlt/></a>
              </div>
              <img src={e.img} className='w-100' style={{ objectFit: "cover", height: "300px" }} alt="" />
            </div>
            <div className="card-text">
              
                <SeeMoreParagraph
                  text={e.text}
                  showFullText={showFullText[index]}
                  onToggleShowText={() => toggleShowText(index)}
                />
              
            </div>
          </div>
        </div>
      ))}
        </div>



        </div>
    
    </>
  )
}
