import s from './softwares.module.css'
import Image from 'next/image'
import creativeCloud from '@/../public/vectors/CC-logo.svg'
import AElogo from '@/../public/vectors/AE-logo.svg'
import PPlogo from '@/../public/vectors/PP-logo.svg'
import PSlogo from '@/../public/vectors/PS-logo.svg'
import AIlogo from '@/../public/vectors/AI-logo.svg'

export function Softwares(){
    return(
        <section className={s.softwares}>
            <div className={s.container}>
                <div className={s.creative_cloud}>
                    <Image className={s.cc_logo} src={creativeCloud} alt='creative cloud logo' ></Image>
                </div>

                <div className={s.content}>
                    <div className={s.text}>
                        <h2>Lorem Ipsum Dolor</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laboriosam enim dolorum aperiam? Fuga quaerat reprehenderit assumenda rem nostrum quas explicabo ipsum in qui, accusantium vitae pariatur, dignissimos eveniet magnam?</p>
                    </div>
                    <div className={s.logos}>
                      <Image className={s.logo} src={AElogo} alt='creative cloud logo' ></Image>
                      <Image className={s.logo} src={PPlogo} alt='creative cloud logo' ></Image>
                      <Image className={s.logo} src={PSlogo} alt='creative cloud logo' ></Image>
                      <Image className={s.logo} src={AIlogo} alt='creative cloud logo' ></Image>
                    </div>
                </div>
            </div>
        </section>
    )
}