import {NavLink}  from 'react-router-dom'
import {useState} from 'react'

import Logo from '../images/logo.png'
import userLogo from '../images/user-logo.png'
const Nav = () => {
    const [scrolled, setScrolled] = useState(false)
    window.onscroll = function() {
        if(window.scrollY>= 10){
                setScrolled(true)
        }else{
            setScrolled(false)
        }
    }
    
    return (
        <div className='Nav' style={scrolled ? {background:'black'} : {}}>
            <div className="logo">
                <NavLink to='/'><img src={Logo} alt="" srcset=""/> </NavLink>
                <div className="nav-options">
                    <NavLink to='/tv-shows' className='nav-item' activeClassName='active'>TV Shows</NavLink>
                    <NavLink to='/movies' className='nav-item' activeClassName='active'>Movies</NavLink>
                </div>
            </div>
            
            <div className="user-logo">
                <NavLink to='/'><img src={userLogo} alt="" srcset=""/></NavLink>
            </div>
        </div>
    )
}

export default Nav
