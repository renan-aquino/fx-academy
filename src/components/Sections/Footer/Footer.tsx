import s from './footer.module.css'
import youtube from '@/../public/vectors/youtube-logo3.svg'
import instagram from '@/../public/vectors/instagram-logo4.svg'
import twitter from '@/../public/vectors/twitter-logo2.svg'
import facebook from '@/../public/vectors/facebook-logo2.svg'
import Image from 'next/image'

export function Footer(){
    return(
        <footer className={s.footer_section}>
            <div className={s.container}>
                <div className={s.navigation}>
                    <div className={s.logos}>
                        <a className={s.brand_logo}>FX Academy</a>
                        <div className={s.socials}>
                            {/* <a className={s.social_icon} style={{backgroundImage: "url('/vectors/yoUtube-logo3.svg')"}}></a>
                            <a className={s.social_icon} style={{backgroundImage: "url('/vectors/instagram-logo4.svg')"}}></a>
                            <a className={s.social_icon} style={{backgroundImage: "url('/vectors/twitter-logo2.svg')"}}></a>
                            <a className={s.social_icon} style={{backgroundImage: "url('/vectors/facebook-logo2.svg')"}}></a> */}
                            
                            <Image className={s.social_icon} src={youtube} alt=''/>
                            <Image className={s.social_icon} src={instagram} alt=''/>
                            <Image className={s.social_icon} src={twitter} alt=''/>
                            <Image className={s.social_icon} src={facebook} alt=''/>
                            


                        </div>
                    </div>
                    <div className={s.links}>
                        <ul>
                            <h4>About</h4>
                            <li><a>The insitution</a></li>
                            <li><a>Our members</a></li>
                        </ul>
                        <ul>
                            <h4>Suporte</h4>
                            <li><a>Help desk</a></li>
                            <li><a>Resources</a></li>
                        </ul>
                        <ul>
                            <h4>Programs</h4>
                            <li><a>FX Partnership</a></li>
                            <li><a>FX Mentoring</a></li>
                        </ul>
                    </div>
                </div>
                           
                           <div className={s.disclaimer}>
                    <p>This website was built for portfolio purposes and does not portray a real organization.</p>
                    <p>Attribution</p>
                           </div>
            </div>


        </footer>
    )
}