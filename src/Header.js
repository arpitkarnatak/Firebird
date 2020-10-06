import React from 'react'
import './Header.css'
import x from './Logo.png'

function Header() {
    return (
        <div className='header'>
            <div className="left-div">Profile Button</div>
            
            <img className="middle-div" src={x} alt="_"/>
            
            <div className="right-div">Other Buttons</div>
        </div>
    )
}

export default Header
