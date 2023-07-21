import Image from 'next/image';
import s from './hero.module.css';

export function Hero(){
    return(
        <>
            <section className={s.hero}>
                <div className={s.container}>
                    <div className={s.headline}>
                        <h1>Unleash your creative vision.</h1>
                        <h3>A video editing school with hands-on projects to help you become a professional motion designer, capable of creating stunning visual effects, improve your storytelling, and more.</h3>
                        <button className={s.btn}>Learn More</button>
                    </div>

                    <div className={s.data_numbers_box}>
                        <div className={s.data_numbers_container}>
                            <div className={s.data_numbers}>
                                <p>24,000</p>
                                <p>active students</p>
                            </div>
                            <div className={s.data_numbers_pipe}>|</div>
                            <div className={s.data_numbers}>
                                <p>92%</p>
                                <p>employement rate</p>
                            </div>
                            <div className={s.data_numbers_pipe}>|</div>
                            <div className={s.data_numbers}>
                                <p>10</p>
                                <p>units worldwide</p>
                            </div>
                     
                        </div>

                    </div>
                    
                </div>
            </section>
        </>
    )
}