import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import  style  from '../styles/Nav.module.scss'
interface props{
    location:string,
    name:string
}
const NavLink:React.FC<props> = ({location, name}) =>{
    const { pathname } = useRouter()
    return(
        <Link href={`${location}`}>
            <a className={pathname === `${location}` ? `${style.navItem} ${style.navItem__active}` : style.navItem} >{name}</a>
        </Link>
    )
}

export default NavLink;