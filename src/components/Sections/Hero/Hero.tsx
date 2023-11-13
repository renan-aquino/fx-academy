'use client'

import { useState } from 'react';
import s from './hero.module.css';
import { NumberAnimation } from '@/components/NumberAnimation/NumberAnimation';

export function Hero(){
    return(
        <>
            <section className={s.hero}>
                <div className={s.container}>
                    <div className={s.headline}>
                        <h1>Unleash your creative vision.</h1>
                        <h4>A video editing school with hands-on projects.<span> Create stunning visual effects, improve your storytelling, and become a professional motion designer.</span></h4>
                        <button className={s.btn}>Learn More</button>
                    </div>

                    <div className={s.data_numbers_box}>
                        <div className={s.data_numbers_container}>
                            <div className={s.data_numbers}>
                                {/* {isAnimationEnabled ? <NumberAnimation originalNumber={24000} sign={'+'}/> : <h4>24,000+</h4>} */}
                                <NumberAnimation originalNumber={24000} sign={'+'}/>
                                <p className={s.data_numbers_description}>active students</p>
                            </div>
                            <div className={s.data_numbers_pipe}>|</div>
                            <div className={s.data_numbers}>
                                {/* {isAnimationEnabled ? <NumberAnimation originalNumber={92} sign={'%'}/> : <h4>92%</h4>} */}
                                <NumberAnimation originalNumber={92} sign={'%'}/>
                                <p className={s.data_numbers_description}>employment rate</p>
                            </div>
                            <div className={s.data_numbers_pipe}>|</div>
                            <div className={s.data_numbers}>
                                {/* {isAnimationEnabled ? <NumberAnimation originalNumber={100} sign={'+'}/> : <h4>100+</h4>} */}
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