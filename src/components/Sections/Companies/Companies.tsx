import s from './companies.module.css'
import dreamWorks from '@/../public/vectors/DreamWorks2.svg';
import weta from '@/../public/vectors/Weta3.svg';
import industrial from '@/../public/vectors/industrial-light-magic4.svg';
import pixar from '@/../public/vectors/Pixar5.svg';
import Image from 'next/image';

export function Companies(){
    return(
    <section className={s.companies}>    
        <div className={s.container}>
            <h3>Companies that hire our students:</h3>
            <div className={s.company_logos}>
                {/* <div className={s.logo} style={{backgroundImage: "url('/vectors/DreamWorks2.svg')"}}></div>
                <div className={s.logo} style={{backgroundImage: "url('/vectors/Weta3.svg')"}}></div>
                <div className={s.logo} style={{backgroundImage: "url('/vectors/industrial-light-magic4.svg')"}}></div>
                <div className={s.logo} style={{backgroundImage: "url('/vectors/Pixar5.svg')"}}></div> */}
                
                <Image className={s.logo} src={dreamWorks} alt='a'/>
                <Image className={s.logo} src={weta} alt='a'/>
                <Image className={s.logo} src={industrial} alt='a'/>
                <Image className={s.logo} src={pixar} alt='a'/>

            </div>
        </div>
    </section>     
    )
}