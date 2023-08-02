'use client'

import s from './companies.module.css'
import dreamWorks from '@/../public/vectors/DreamWorks2.svg';
import weta from '@/../public/vectors/Weta3.svg';
import industrial from '@/../public/vectors/industrial-light-magic4.svg';
import pixar from '@/../public/vectors/Pixar5.svg';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export function Companies(){
    const h2Ref = useRef();
    const  delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add(s.fade_animation);
                }
            })
        }, {threshold: .5});

        observer.observe(h2Ref.current);
        return () =>  observer.disconnect();
    }, []);

    useEffect(() => {
        const elements = document.querySelectorAll<HTMLElement>(`.${s.logo}`);


        const observer = new IntersectionObserver((entries) => {
            entries.forEach(async (entry, index) => {
                if(entry.isIntersecting){
                    await delay(100 * index);
                    entry.target.classList.add(s.fade_animation);
                }
            })
        }, {threshold: .5});

        elements.forEach((el) => observer.observe(el));
        return () =>  observer.disconnect();
        
    }, []);

    return(
    <section className={s.companies}>    
        <div className={s.container}>
            <h2 ref={h2Ref}>Companies hiring our students</h2>
            <div className={s.company_logos}>
                <Image className={s.logo} src={dreamWorks} alt='dream works logo'/>
                <Image className={s.logo} src={weta} alt='weta fx logo'/>
                <Image className={s.logo} src={industrial} alt='industrial light and magic logo'/>
                <Image className={s.logo} src={pixar} alt='pixar logo'/>
            </div>
        </div>
    </section>     
    )
}