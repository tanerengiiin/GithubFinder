import React from "react";
import "./App.css";
import Search from "./Search";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    
      <div className="con">
        <div className="navbar">
          <Link to={`/GithubFinder/`} style={{textDecoration:"none", color:"#26232A"}}>
          <div className="nav_left" >
            <div className="nav_logo">
              <i className="fa-brands fa-github" ></i>
            </div>
            <div className="nav_title" >Github Finder</div>
          </div>
          </Link>
          <div className="nav_right">
          <Search searchUser={props.searchUser} searchUser2={props.searchUser2}/>
          
          </div>
        </div>
      </div>
      
  );
}

export default Navbar;
