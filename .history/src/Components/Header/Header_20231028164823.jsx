// import  { useCallback } from "react";
import "./header.css";
import CTA from "./CTA.jsx";
import Me from "../../assets/yasserNo-bg.png";
import { Link } from "react-router-dom";
import HeaderSocials from "./HeaderSocials";
import 'animate.css/animate.min.css';
import Typewriter from "./Typewriter";


export default function Header() {

  return (
    <>
     
      <header >
        <div className=" container header_container text-center mb-5 h-100 position-relative">
          <h5>Hello I'm</h5>
          <h1 className="animate__animated animate__bounceInLeft fade-left">Yasser Mohamed</h1>
          <h5 className="text-light"> <Typewriter words = { {}}></Typewriter> </h5>
          <CTA></CTA>
          <HeaderSocials />
          <div className="me  animate__animated animate__backInRight "  >
            <img src={Me} className="w-100" alt="me" />
          </div>
          <Link className="text-decoration-none" to={"/contactUs"}>
            Contact With Me
          </Link>
        </div>
      </header>
    </>
  );
}
