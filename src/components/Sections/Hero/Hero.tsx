'use client'

import { useEffect } from 'react';
import s from './hero.module.css';
import { NumberAnimation } from '@/components/NumberAnimation/NumberAnimation';

export function Hero(){
    const  delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        const elements = document.querySelectorAll<HTMLElement>(`#${s.headline}`);

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
        <>
            <section className={s.hero}>
                <div className={s.container}>

                    <div className={s.headline}>
                        <h1 id={s.headline}>Unleash your creative vision.</h1>
                        <h4 id={s.headline} >A video editing school with hands-on projects.<span> Create stunning visual effects, improve your storytelling, and become a professional motion designer.</span></h4>
                        <button id={s.headline} className={s.btn}>Learn More</button>
                    </div>

                    <div className={s.data_numbers_box} id={s.headline}>
                        <div className={s.data_numbers_container}>
                            <div className={s.data_numbers}>
                                <NumberAnimation originalNumber={24000} sign={'+'}/>
                                <p className={s.data_numbers_description}>active students</p>
                            </div>
                            <div className={s.data_numbers_pipe}>|</div>
                            <div className={s.data_numbers}>
                                <NumberAnimation originalNumber={92} sign={'%'}/>
                                <p className={s.data_numbers_description}>employment rate</p>
                            </div>
                            <div className={s.data_numbers_pipe}>|</div>
                            <div className={s.data_numbers}>
                                <NumberAnimation originalNumber={100} sign={'+'}/>
                                <p className={s.data_numbers_description}>units worldwide</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}