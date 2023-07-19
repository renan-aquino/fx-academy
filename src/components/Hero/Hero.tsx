import Image from 'next/image';
import s from './hero.module.css';

export function Hero(){
    return(
        <>
            <section className={s.hero_section}>
                <div className={s.container}>
                    <div>
                        <h1>Headline text hero</h1>
                        <h3>Lorem ipaum dolor sit amet. Lorem ipsum dolor sit amet.</h3>
                        <button>Click me</button>
                    </div>
                    
                </div>
            </section>
        </>
    )
}