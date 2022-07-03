import {NavLink}  from 'react-router-dom'
import {useState} from 'react'
import Logo from '../images/logo.png'
import userLogo from '../images/user-logo.png'
import style from '../styles/Nav.module.scss'
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
        <nav className={style.Nav} style={scrolled ? {background:'black'} : {}}>
            <div className={style.logo}>
                <NavLink to='/'><img src={Logo} alt="" /> </NavLink>
                <div className={style.navOptions}>
                    <NavLink exact to='/' className={style.navItem} activeClassName={style.active}>Home</NavLink>
                    <NavLink to='/tv-shows' className={style.navItem} activeClassName={style.active}>TV Shows</NavLink>
                    <NavLink to='/movies' className={style.navItem} activeClassName={style.active}>Movies</NavLink>
                </div>
            </div>
            <div className={style.userLogo}>
                <NavLink to='/'><img src={userLogo} alt=""/></NavLink>
            </div>
        </nav>
    )
}

export default Nav
