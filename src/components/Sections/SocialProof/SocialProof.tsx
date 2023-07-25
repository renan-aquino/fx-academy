import Image from 'next/image'
import s from './socialProof.module.css'

export function SocialProof(){
    return(
        <section className={s.social_proof}>
            <div className={s.section_a}>
                <div className={s.topics}>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <ul className={s.bullet_points}>
                        <li>Lorem impsum dolor sit amet</li>
                        <li>Lorem impsum dolor sit amet</li>
                        <li>Lorem impsum dolor sit amet</li>
                        <li>Lorem impsum dolor sit amet</li>
                        <li>Lorem impsum dolor sit amet</li>
                    </ul>
                </div>
                <div className={s.box}>
                    <p className={s.testimony}>
                        "I got my first job as a video editor thanks to FX Academy. I learned techniques that I use everyday, and I'm always progressing. The instructors are really cool, which keeps me motivated. Nowadays, I work as a motion designer, and I couldn't be happier!"
                    </p>
                    <div className={s.person}>
                        <div className={s.photo}></div>
                        <div className={s.credentials}>
                            <p>Samara Kerrigan</p>
                            <p>Motion Designer at WetaFX</p>
                        </div>
                    </div>
                </div>
            </div>
          
            <div className={s.section_b}>
                <h3>Companies that hire our students:</h3>
                <div className={s.companies}>
                    <div className={s.logo} style={{backgroundImage: "url('/vectors/DreamWorks2.svg')"}}></div>
                    <div className={s.logo} style={{backgroundImage: "url('/vectors/Weta3.svg')"}}></div>
                    <div className={s.logo} style={{backgroundImage: "url('/vectors/industrial-light-magic4.svg')"}}></div>
                    <div className={s.logo} style={{backgroundImage: "url('/vectors/Pixar5.svg')"}}></div>
                </div>
            </div>


        </section>
    )
}