'use client'

import { SkillGrid } from '@/components/SkillGrid/SkillGrid'
import s from './skills.module.css'
import { useEffect, useRef } from 'react'

export function Skills(){
    const h2Ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add(s.title_animation);
                }
            })
        }, {threshold: .5});

        observer.observe(h2Ref.current);
        return () =>  observer.disconnect();

    }, []);

    return(
        <section className={s.skills}>
            <div className={s.container}>
                <h2 ref={h2Ref}>Everything you need, in one place</h2>
                <SkillGrid/>
            </div>
        </section>
    )
}