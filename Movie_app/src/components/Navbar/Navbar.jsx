import React from 'react'
import "./Navbar.css";
import Fire from '../../assets/fire.png'
import Star from '../../assets/glowing-star.png'
import Party from '../../assets/partying-face.png'



const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>Navbar content</h1>
            <div className="navbar_links">
                <a href="">Popular{" "} <img src={Fire} alt="fire emoji" className='navbar_emoji' /> </a>
                <a href="">Popular {" "} <img src={Star} alt="Star emoji" className='navbar_emoji' /> </a>
                <a href="">Popular {" "} <img src={Party} alt="Party emoji" className='navbar_emoji' /> </a>
            </div>
        </nav>
    )
}

export default Navbar
