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
                            <Image className={s.social_icon} src={youtube} alt='youtube logo'/>
                            <Image className={s.social_icon} src={instagram} alt='instagram logo'/>
                            <Image className={s.social_icon} src={twitter} alt='twitter logo'/>
                            <Image className={s.social_icon} src={facebook} alt='facebook logo'/>
                        </div>
                    </div>
                    <div className={s.links}>
                        <ul>
                            <h4>About</h4>
                            <li><a>The institution</a></li>
                            <li><a>Our members</a></li>
                        </ul>
                        <ul>
                            <h4>Support</h4>
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
                    <p>This website was built for portfolio purposes and does not portray a real organization. Check the GitHub repository <a href="https://github.com/renan-aquino/fx-academy " target="_blank">here.</a></p>
                    <p>The photos used throughout the page were provided by <a href="https://www.freepik.com/" target="_blank">Freepik</a> and <a href="https://unsplash.com/" target="_blank">Unsplashed</a>.</p>
                </div>
            </div>
        </footer>
    )
}