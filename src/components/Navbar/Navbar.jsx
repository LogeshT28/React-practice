import React from 'react'
import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode"
import Fire from '../../assets/fire.png'
import Star from '../../assets/glowing-star.png'
import Party from '../../assets/partying-face.png'



const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>Navbar content</h1>
            <div className="navbar_links">
                <DarkMode/>
                <a href="#popular">Popular{" "} <img src={Fire} alt="fire emoji" className='navbar_emoji' /> </a>
                <a href="#top_rated">Popular {" "} <img src={Star} alt="Star emoji" className='navbar_emoji' /> </a>
                <a href="#upcoming">Popular {" "} <img src={Party} alt="Party emoji" className='navbar_emoji' /> </a>
            </div>
        </nav>
    )
}

export default Navbar
