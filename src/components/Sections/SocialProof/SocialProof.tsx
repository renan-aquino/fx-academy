'use client'

import Image from 'next/image'
import s from './socialProof.module.css'
import woman from '@/../public/images/girl-portrait.webp'
import { useEffect, useRef } from 'react'

export function SocialProof(){
    
    const h2Ref = useRef();
    const boxRef = useRef();

    useEffect(() => {
        const elements = document.querySelectorAll<HTMLElement>('#listItem');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add(s.fade_animation);
                }
            })
        }, {threshold: .5});

        observer.observe(h2Ref.current);
        elements.forEach((el) => observer.observe(el));
        return () =>  observer.disconnect();

    }, []);

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add(s.fade_animation);
                }
            })
        }, {threshold: .5});

        observer.observe(boxRef.current);
        return () =>  observer.disconnect();

    }, []);

   

    return(
        <section className={s.social_proof}>
            <div className={s.container}>
                <div className={s.topics}>
                    <h2 ref={h2Ref}>The perfect enviroment for you</h2>
                    <ul className={s.bullet_points}>
                        <li id='listItem' style={{animationDelay: '.1s'}}>From beginner to advanced levels</li>
                        <li id='listItem' style={{animationDelay: '.2s'}}>Direct support from instructors</li>
                        <li id='listItem' style={{animationDelay: '.3s'}}>Real life job experiences</li> 
                        <li id='listItem' style={{animationDelay: '.4s'}}>Lifetime access to exclusive assets</li>
                        <li id='listItem' style={{animationDelay: '.5s'}}>Presential or remote access to powerful computers</li>
                    </ul>
                </div>
                <div className={s.box} ref={boxRef}>
                    <p className={s.testimony}>
                        "I got my first job as a video editor thanks to FX Academy. I learned techniques that I use everyday, and I'm always progressing. The instructors are really cool, which keeps me motivated. Nowadays, I work as a motion designer, and I couldn't be happier!"
                    </p>
                    <div className={s.person}>
                        <Image  className={s.photo} src={woman} alt='woman portrait'/>
                        <div className={s.credentials}>
                            <p>Sarah Rodriguez</p>
                            <p>Motion Designer</p>
                        </div>
                    </div>
                </div>
            </div>
     </section>
    )
}