import Image from 'next/image';
import s from './hero.module.css';

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
                                <h4 className={s.data_number_digits}>24,000</h4>
                                <p className={s.data_numbers_description}>active students</p>
                            </div>
                            <div className={s.data_numbers_pipe}>|</div>
                            <div className={s.data_numbers}>
                                <h4>92%</h4>
                                <p className={s.data_numbers_description}>employement rate</p>
                            </div>
                            <div className={s.data_numbers_pipe}>|</div>
                            <div className={s.data_numbers}>
                                <h4>10</h4>
                                <p className={s.data_numbers_description}>units worldwide</p>
                            </div>
                     
                        </div>

                    </div>
                    
                </div>
            </section>
        </>
    )
}