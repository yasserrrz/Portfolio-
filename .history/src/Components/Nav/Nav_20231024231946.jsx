// import React from "react";
// import "./nav.css";
// import { AiOutlineHome ,AiOutlineUser } from "react-icons/ai";
// import {BiBook  ,BiMessageSquareDetail} from 'react-icons/bi'
// import {RiServiceLine } from 'react-icons/ri'
// import {MdWorkOutline } from 'react-icons/md'
// import { NavLink } from "react-router-dom";

// export default function Nav() {
//   return (
//     <>
//       <nav className="">
//       <NavLink className="nav-link" exact activeClassName="active" to={"/"}>
//           <OverlayTrigger
//             placement="top"
//             overlay={<Tooltip id="tooltip-home">Tooltip on top</Tooltip>}
//           >
//             <div className="icon-wrapper">
//               <AiOutlineHome />
//             </div>
//           </OverlayTrigger>
//         </NavLink>
//         <NavLink className=" " activeClassName="active" to={"/about"}>
//           <AiOutlineUser/>
//         </NavLink>
//         <NavLink className=" " activeClassName="active" to={"/experiance"}>
//           <BiBook/>
//         </NavLink>
//         <NavLink className=" " activeClassName="active" to={"/services"}>
//           <RiServiceLine />
//         </NavLink>
//         <NavLink className=" " activeClassName="active" to={"/contactUs"}>
//           <BiMessageSquareDetail />
//         </NavLink>
//         <NavLink className=" " activeClassName="active" to={"/portfolio"}>
//           <MdWorkOutline />
//         </NavLink>
//       </nav>
//     </>
//   );
// }




import React from "react";
import "./nav.css";
import { AiOutlineHome ,AiOutlineUser } from "react-icons/ai";
import {BiBook  ,BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine } from 'react-icons/ri'
import {MdWorkOutline } from 'react-icons/md'
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <NavLink className="nav-lin"  exact activeClassName="active"  to={"/"} data-tooltip="Home">
          <AiOutlineHome />
        </NavLink>
        <NavLink className="nav-lin" activeClassName="active" to={"/about"} data-tooltip="About">
          <AiOutlineUser/>
        </NavLink>
        {/* <NavLink className="nav-lin" activeClassName="active" to={"/experiance"} data-tooltip="Projects">
          <BiBook/>
        </NavLink> */}
        {/* <NavLink className="nav-lin" activeClassName="active" to={"/services"} data-tooltip="Services">
          <RiServiceLine />
        </NavLink> */}
        <NavLink className="nav-lin" activeClassName="active" to={"/portfolio"} data-tooltip="Projects">
          <MdWorkOutline />
        </NavLink>
        <NavLink className="nav-lin" activeClassName="active" to={"/contactUs"} data-tooltip="Contact me">
          <BiMessageSquareDetail />
        </NavLink>
      </nav>
    </>
  );
}

