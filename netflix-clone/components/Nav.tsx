import Link  from 'next/link'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import Logo from '../images/logo.png'
import userLogo from '../images/user-logo.png'
import style from '../styles/Nav.module.scss';
import { FaCaretDown } from 'react-icons/fa'
const Nav = () => {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)
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
                <Link href='/'>
                    <a>
                        <Image quality={100} src={Logo}  height='40px' width='40px' /> 
                    </a>
                </Link>
            </div>
            <div className={style.navOptions} style={open ? {display:'flex'} : {}} onClick={()=>setOpen(false)}>
                <Link href='/browse' className={style.navItem} >Home</Link>
                <Link href='/tvShows' className={style.navItem} >TV Shows</Link>
                <Link href='/movies' className={style.navItem}>Movies</Link>
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
