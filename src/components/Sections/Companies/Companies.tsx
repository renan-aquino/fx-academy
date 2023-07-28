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
            <h2>Companies hiring our students</h2>
            <div className={s.company_logos}>
                <Image className={s.logo} src={dreamWorks} alt='dream works logo'/>
                <Image className={s.logo} src={weta} alt='weta fx logo'/>
                <Image className={s.logo} src={industrial} alt='industrial light and magic logo'/>
                <Image className={s.logo} src={pixar} id={s.pixar} alt='pixar logo'/>
            </div>
        </div>
    </section>     
    )
}