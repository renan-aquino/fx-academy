import Image from 'next/image'
import s from './cta.module.css'
import timeline from '@/../public/images/timeline.jpg'


export function Cta(){
    return(
        <section className={s.cta}>
            <div className={s.box}>
                {/* <div className={s.image} style={{backgroundImage: "url('/images/timeline.jpg')"}}></div> */}
                <Image className={s.image} src={timeline} alt='a' />
                <div className={s.text}>
                    <h2>Join our leading video editing school!</h2>
                    <p>Master the art of video editing with our expert-led courses and launch your creative career today!</p>
                    <button className={s.btn}>Enroll Now</button>
                </div>
            </div>
        </section>
    )
}