'use client'

import s from './skillGrid.module.css'
import { SkillCard } from "../SkillCard/SkillCard";
import biscuits from '@/../public/images/biscuits.webp'
import rigGirl from '@/../public/images/rig-girl.webp'
import transition from '@/../public/images/transition.webp'
import colorCorrection from '@/../public/images/color-correction.webp'
import fxGirl from '@/../public/images/fx-girl.webp'
import expressions from '@/../public/images/extend-script.webp'
import { useEffect } from 'react';

export function SkillGrid(){
    
    useEffect(() => {
        
        const elements = document.querySelectorAll<HTMLElement>(`.${s.card}`);
        const  delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

        const handleScrollAnimation = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(async (entry, index) => {
                if(entry.isIntersecting){
                await delay(100 * index);
                entry.target.classList.add(s.card_animation);  
                }
            })
        };
    
        const observer = new IntersectionObserver(handleScrollAnimation);
        elements.forEach((el) => observer.observe(el));
        return () =>  observer.disconnect();
        
    }, []);


    return (
        <div className={s.grid}>
            <div className={s.card}>
                <SkillCard src={biscuits} description='3D Rendering' alt='3d rendered biscuits'/>
            </div>
            <div className={s.card}>
                <SkillCard src={rigGirl} description='Character Rig' alt='rig character girl'/>
            </div>
            <div className={s.card}>
                <SkillCard src={transition} description='Transitions' alt='transition icon'/>
            </div>
            <div className={s.card}>
                <SkillCard src={colorCorrection} description='Color Correction' alt='color correction photo'/>
            </div>
            <div className={s.card}>
                <SkillCard src={fxGirl} description='Video Effects' alt='visual effects photo'/>
            </div>
            <div className={s.card}>
                <SkillCard src={expressions} description='Expressions' alt='extend script expression'/>
            </div>
        </div>
    )
}