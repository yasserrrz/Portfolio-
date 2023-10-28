import React, { useState } from 'react'
import './portfolio.css'
import {VscGithubInverted} from "react-icons/vsc"
import {FaLink} from "react-icons/fa"
import {BiLinkAlt} from "react-icons/bi"
import Img1 from '../../assets/me-header.png'
import Quiz from '../../assets/Quiz.png'
import Menu from "../../assets/menu-mobile.jpg"
import Ecomerce from "../../assets/Ecommerc.png"
import SeeMoreParagraph from './SeeMoreParagraph'
import orders  from "../../assets/orders.jpg"


export default function Portfolio() {
 
  const projectsData = [
    {
        name:"E-commerce",
        img: Ecomerce,
        gitHub:"https://github.com/yasserrrz/Ecommerce",
        showFullText: false,
        text:`E-commerce Website: A fully functional online store for buying and selling products, built using React.js.
        Features: User authentication, product catalog, shopping cart, secure payment processing, and order tracking.`
    }
    ,
    {
        name :"Quiz",
        img : Quiz,
        gitHub:"https://github.com/yasserrrz/Quizz",
        showFullText: false,
        text: "JavaScript Quiz or exam that allow the user or student to select the number of the question and the degree of difficulty (Easy , Medium , Hard) and show him if his answer correct or not after he choose his answer ant at the end showing him his degree "
    },
    {
        name:"Menu",
        img: Menu,
        gitHub:"https://github.com/yasserrrz/Menu",
        showFullText: false,
        text:"The menu application displays the categories and items for each category and the details of each item. It is also allowed if the user’s website matches the restaurant’s website. It allows him to request services from the restaurant such as calling a waiter and so on."
    }
    ,
    {
        name:"Menu Orders",
        img: orders,
        gitHub:"https://github.com/yasserrrz/Menu_orders",
        showFullText: false,
        text:"Displaying orders made by the user who was in the restaurant, where the calls are displayed, the time since the call was made, how long ago this call was made, and some other details. The calls are divided according to type and also according to time. It can also display orders if the order request was added by him.  The menu"
    
    }
    
    ,
    {
      name:"Todo(TASKIFY)",
      img: "",
      gitHub:"",
      showFullText: false,
      text:""
  }
  ,
  {
    name:"E-commerce",
    img: "",
    gitHub:"",
    showFullText: false,
    text:""
}
,
{
  name:"E-commerce",
  img: "",
  gitHub:"",
  showFullText: false,
  text:""
}

,
{
  name:"E-commerce",
  img: "",
  gitHub:"",
  showFullText: false,
  text:""
}

,
{
  name:"E-commerce",
  img: "",
  gitHub:"",
  showFullText: false,
  text:""
}

,
{
  name:"E-commerce",
  img: "",
  gitHub:"",
  showFullText: false,
  text:""
}

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
          <div className="project p-3 rounded">
            <div className="card-heder d-flex px-2 justify-content-between">
              <h6>{e.name}</h6>
              <div className="icn">
                <a className='mx-2' href={e.gitHub}>
                  <VscGithubInverted/>
                </a>
                <a className='mx-2' href={e.gitHub}>
                  <FaLink/>
                </a>
              </div>
            </div>
            <div className="card-img rounded-1 position-relative">
              <div className="layer d-flex justify-content-center align-items-center">
                <span className='fw-bold'>Demo</span> <a href={e.gitHub}><BiLinkAlt/></a>
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
