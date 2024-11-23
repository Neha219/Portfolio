import { Link } from "react-router-dom";
import "./HeroImgStyles.css";

import React from 'react'

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="image" src= "https://img.freepik.com/premium-photo/person-typing-laptop-wooden-table_161362-7115.jpg" ></img>
             </div>
            <div className="content">
                <p>HI, I'M A FREELANCER</p>
                <h1>React Developer</h1>
                <div>
                    <Link to="/project" className="btn">Project</Link>
                    <Link to="/contact" className="btn btn‐light">Contact</Link>
                </div>

            </div>
    </div>
  )
}

export default HeroImg

