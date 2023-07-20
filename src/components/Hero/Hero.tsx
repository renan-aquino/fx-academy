import Image from 'next/image';
import s from './hero.module.css';

export function Hero(){
    return(
        <>
            <section className={s.hero}>
                <div className={s.container}>
                    <div className={s.headline}>
                        <h1>Unleash your creative vision.</h1>
                        <h3>A video editing school with hands-on projects to help you become a professional motion designer, capable of creating stunning visual effects, add great storytelling, and more.</h3>
                        <button className={s.btn}>Learn more</button>
                    </div>
                    
                </div>
            </section>
        </>
    )
}