import React from 'react';
import logo from '../../logo.png';
import {Link} from 'react-router-dom';
import {ImSearch} from 'react-icons/im';
//import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import { FaBell } from 'react-icons/fa';
//import Avatar from "@material-ui/core/Avatar/Avatar";
//import {BsPersonCheckFill} from 'react-icons/all';
import { HashLink } from 'react-router-hash-link';
import { FaUserPlus } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
const Header = () => {
    //console.log(logo)
  return (
    
    <nav className="header nav-expand{-sm|-md|-lg|xl}">
       <img src={logo} alt="netflix"></img>
       <div>
        {/*<Link to="/tvshows">Tv shows</Link>*/}
        <Link to="" class="links">Home</Link>
        <HashLink smooth to="/main/#tv shows"  class="links">Tv shows</HashLink>
        <HashLink smooth to="/main/#movies"  class="links">Movies</HashLink>
        <HashLink smooth to="/main/#top"  class="links">New and Popular</HashLink>
        <Link to=""  class="links">My list</Link>
       </div>
       <div className='right'>
       <ImSearch></ImSearch>
       {/*<FaBell></FaBell>*/}
       {/*<BsPersonCheckFill></BsPersonCheckFill>*/}
       <FaUserPlus></FaUserPlus>
       <span><Link to ="/" id="logout">Log out</Link></span>
        {/*<span><Link to="/">Logout</Link></span>*/}
       </div>
    </nav>
  )
}

export default Header