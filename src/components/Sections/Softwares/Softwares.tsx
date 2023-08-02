'use client'

import s from './softwares.module.css'
import Image from 'next/image'
import creativeCloud from '@/../public/vectors/CC-logo.svg'
import AElogo from '@/../public/vectors/AE-logo.svg'
import PPlogo from '@/../public/vectors/PP-logo.svg'
import PSlogo from '@/../public/vectors/PS-logo.svg'
import AIlogo from '@/../public/vectors/AI-logo.svg'
import { useEffect, useRef } from 'react'

export function Softwares(){

    const refContainer = useRef(null);
    const  delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        const handleScrollAnimation = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add(s.container_animation);          
                }
            },{threshold: .5})          

        };
    
        const observer = new IntersectionObserver(handleScrollAnimation);
        observer.observe(refContainer.current);
        return () =>  observer.disconnect();      

    }, []);


    useEffect(() => {
        
        const elements = document.querySelectorAll<HTMLElement>(`.${s.logo}`);

        const handleScrollAnimation = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(async (entry, index) => {
                if(entry.isIntersecting){
                await delay(200 * index);
                entry.target.classList.add(s.logo_animation);  
                }
            })
        };

        const observer = new IntersectionObserver(handleScrollAnimation);
        elements.forEach((el) => observer.observe(el));
        return () =>  observer.disconnect();
        
    }, []);


    return(
        <section className={s.softwares}>
        <div className={s.container} ref={refContainer}>
                <div className={s.creative_cloud}>
                    <Image className={s.cc_logo} src={creativeCloud} alt='creative cloud logo' ></Image>
                </div>

                <div className={s.content}>
                    <div className={s.text}>
                        <h2>Explore the best editing softwares</h2>
                        <p>The Adobe Creative Cloud provides reknown applications used by professionals worldwide. In our course, you'll master After Effects, Premiere Pro, Photoshop, Illustrator, and more.</p>
                    </div>
                    <div className={s.logos} >
                      <Image className={s.logo} src={AElogo} alt='after effects logo' ></Image>
                      <Image className={s.logo} src={PPlogo} alt='premiere pro logo' ></Image>
                      <Image className={s.logo} src={PSlogo} alt='photshop logo' ></Image>
                      <Image className={s.logo} src={AIlogo} alt='illustrator logo' ></Image>
                    </div>
                </div>
            </div>
        </section>
    )
}