import React from 'react'
import { Link } from 'react-router-dom'
import './AboutContentStyles.css'

const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Who Am I?</h1>
                <p>I'm a react frontend Developer.
                    I create responsive secure websites for
                    for my cilents.
                </p>
                <Link to='/contact'>
                    <button className='btn'>CONTACT</button>
                </Link>
            </div>
            <div className='right'>
                <div className='img‐container'>
                    <div className='img‐stack top'>
                        <img src="https://www.novelwebsolution.com/uploads/images/image_750x_61af36c030148.jpg" alt="pro1" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent
