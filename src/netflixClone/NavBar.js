import React, { useState } from 'react'
import logo from "./img/logo.png";
import emoji from "./img/emoji.jpg";
import "./navBar.css"

function NavBar() {

  const[isDark, setIsDark] = useState(false)

  window.onscroll = () => {
    setIsDark(window.scrollY > 150 ? true : false);
  }

    
  return (
    <header className={isDark ? "dark" : ""}>
          <div className='logo'>
              <img src={logo} alt='' />
          </div>

          <div className='emoji'>
            <img src={emoji} alt=''/>
          </div>

    </header>
  )
}

export default NavBar