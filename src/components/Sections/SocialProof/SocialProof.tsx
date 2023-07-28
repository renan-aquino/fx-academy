import Image from 'next/image'
import s from './socialProof.module.css'
import woman from '@/../public/images/girl-portrait.jpg'

export function SocialProof(){
    return(
        <section className={s.social_proof}>
            <div className={s.container}>
                <div className={s.topics}>
                    <h2>The perfect enviroment for you</h2>
                    <ul className={s.bullet_points}>
                        <li>From beginner to advanced levels</li>
                        <li>Direct support from instructors</li>
                        <li>Real life job experiences</li> 
                        <li>Lifetime access to exclusive assets</li>
                        <li>Presential or remote access to powerful computers</li>
                    </ul>
                </div>
                <div className={s.box}>
                    <p className={s.testimony}>
                        "I got my first job as a video editor thanks to FX Academy. I learned techniques that I use everyday, and I'm always progressing. The instructors are really cool, which keeps me motivated. Nowadays, I work as a motion designer, and I couldn't be happier!"
                    </p>
                    <div className={s.person}>
                        <Image  className={s.photo} src={woman} alt='woman portrait'/>
                        <div className={s.credentials}>
                            <p>Sarah Rodriguez</p>
                            <p>Motion Designer</p>
                        </div>
                    </div>
                </div>
            </div>
     </section>
    )
}