'use client'

import { useEffect, useRef, useState } from 'react'
import s from './header.module.css'
import { Globe } from '../../Icons/Globe/Globe';
import { BurgerMenu } from '../../Icons/BurgerMenu/BurgerMenu';
import { Close } from '../../Icons/Close/Close';

export function Header() {

    const refHeader = useRef(null);  
    const refNav = useRef(null);  
    const [isClosed, setClosed] = useState(true);


    useEffect(() => {
       
        const handleScroll = () => {
            if(window.scrollY != 0) {
                refHeader.current.classList.add(s.header_sticky);
            }
            else {
                refHeader.current.classList.remove(s.header_sticky);
                
            }
         
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
       };
       
     
    }, []);
    

    const handleNavigation = () => {
        setClosed(prev => !prev);
        refNav.current.classList.toggle(s.show);
    }

    useEffect(() => {

    }, []);


    return (
        <header className={s.header_box} ref={refHeader}>
            <nav className={s.container}>
                <a href="#" className={s.logo}>FX Acamdemy</a>
                <ul className={s.nav_list} ref={refNav}>
                    {!isClosed && <hr className={s.hr_line}/>}
                    <li className={s.nav_list_item}><a href="#">Pricing</a></li>
                    <li className={s.nav_list_item}><a href="#">About</a></li>
                    <li className={s.nav_list_item}><a href="#">Contact</a></li>
                    <li className={s.nav_list_item}><a href="#">Products</a></li>
                </ul>
                <div className={s.nav_buttons}>
                    <button>Enroll Now</button>
                    <p>|</p>
                    <div className={s.languages}>
                        <p>EN</p>
                        <Globe/>
                    </div>
                </div>
                <div className={s.nav_buttons_mobile} onClick={handleNavigation}>
                    {isClosed && <BurgerMenu/>}
                    {!isClosed && <Close/>}
                </div>
                
            </nav>
        </header>
    )
}