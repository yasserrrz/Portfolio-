import "./header.css";
import CTA from "./CTA.jsx";
import Me from "../../assets/yasserNo-bg.png";
import { Link } from "react-router-dom";
import HeaderSocials from "./HeaderSocials";
import 'animate.css/animate.min.css';
import Typewriter from "./Typewriter";
import { Helmet } from 'react-helmet-async';

export default function Header() {

  return (
    <>
      <Helmet>
        <title>Yasser Mohamed - Front-End Developer</title>
        <meta name="description" content="Welcome to Yasser Mohamed's portfolio. Front-End Developer specializing in React.js, Next.js, and modern web technologies." />
        <meta property="og:title" content="Home | Yasser Mohamed - Front-End Developer" />
        <meta property="og:description" content="Welcome to Yasser Mohamed's portfolio. Front-End Developer specializing in React.js, Next.js, and modern web technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yasserrsportfolio.vercel.app/" />
        <meta property="og:image" content="https://yasserrsportfolio.vercel.app/assets/yasserNo-bg-e8a15c6f.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | Yasser Mohamed - Front-End Developer" />
        <meta name="twitter:description" content="Welcome to Yasser Mohamed's portfolio. Front-End Developer specializing in React.js, Next.js, and modern web technologies." />
        <meta name="twitter:image" content="https://yasserrsportfolio.vercel.app/assets/yasserNo-bg-e8a15c6f.png" />
      </Helmet>
     
      <header >
        <div className=" container header_container text-center mb-5 h-100 position-relative">
          <h5>Hello I&apos;m</h5>
          <h1 className="animate__animated animate__bounceInLeft fade-left">Yasser Mohamed</h1>
          <h5 className="text-light"> <Typewriter ></Typewriter> </h5>
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
