import Link  from 'next/link'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import Logo from '../images/logo.png'
import userLogo from '../images/user-logo.png'
import style from '../styles/Nav.module.scss';
import { FaCaretDown } from 'react-icons/fa'
import { useRouter } from 'next/router'
import NavLink from './NavLink'
const Nav = () => {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)
    const router = useRouter()
    useEffect(()=>{
        window.onscroll = function() {
            if(window.scrollY>= 10){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }
        
    },[])
    return (
        <nav className={style.Nav} style={scrolled ? {background:'black'} : {}}>
            <div className={style.logo}>
                <Link href='/browse'>
                    <a>
                        <Image  src={Logo} /> 
                    </a>
                </Link>
            </div>
            <div className={style.navOptions} style={open ? {display:'flex'} : {}} onClick={()=>setOpen(false)}>
                <NavLink location='/browse' name='Home' />
                <NavLink location='/tvShows' name='Tv Shows' />
                <NavLink location='/movies' name='Movies' />
            </div>
            <div className={style.navOptionsDropDown} onClick={()=>setOpen(!open)}>
                <span>Discover</span>
                <FaCaretDown />
            </div>
            <div className={style.userLogo}>
                <Link href='/'>
                    <a>
                        <Image src={userLogo} height='40px' width='40px' />
                    </a>
                </Link>
            </div>
        </nav>
    )
}

export default Nav
