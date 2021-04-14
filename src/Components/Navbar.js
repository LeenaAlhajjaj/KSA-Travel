import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';



function Navbar(){

  // inatial value is false
 const [click, setClick] = useState(false);
 const [button, setButton] = useState(true);


 // if the burgur icon preesed it get x set the value to true
 const handleClick = () => setClick(!click);
 const closeMobileMenu = () => setClick(false);

 const showButton = () => {
  if(window.innerWidth <= 960){
    setButton(false);
} else {
  setButton(true);
}

};

 window.addEventListener('resize', showButton) ;


  return(
   <>
   <nav className= 'navbar'>
      <div className= 'navbar-container'>
        <Link to='/' className= 'navbar-logo' onClick={closeMobileMenu}>
            KSA Trval <i className= 'fas fa-kaaba' />
           </Link>
           <div className= 'menu-icon' onClick = { handleClick }>
           <i className= {click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className= {click ? 'nav-menu active' : 'nav-menu'}>

          <li className= 'nav-item'>
            <Link to='/home' className= 'nav-links' onClick= {closeMobileMenu}>
            Home
            </Link>
            </li>

            <li className= 'nav-item'>
            <Link to='/places' className= 'nav-links' onClick= {closeMobileMenu}>
            Places
            </Link>
            </li>

            <li className= 'nav-item'>
            <Link to='/about' className= 'nav-links' onClick= {closeMobileMenu}>
            About
              </Link>
             </li>
            </ul>

      </div>
     </nav>
    </>

  );
}
export default Navbar
