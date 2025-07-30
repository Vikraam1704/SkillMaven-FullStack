import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <ul className='list'>
                <li><Link className='Link' to='/'>Home</Link></li>
                <li><Link className='Link' to='/about'>About</Link></li>
                <li><Link className='Link' to='/skills'>Skill</Link></li>
                <li><Link className='Link' to='/contact'>Contact</Link></li>
                <li><Link className='Link' to='/hooks'>Hooks</Link></li>
                <li><Link className='Link' to='/todo'>Todo</Link></li>
                <li><Link className='Link' to='/login'>Login</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar