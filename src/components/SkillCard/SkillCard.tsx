import s from './skillCard.module.css'
import Image, { StaticImageData } from 'next/image'

interface skillCardProps {
    src: StaticImageData,
    description: string,
    alt: string
}

export function SkillCard(props: skillCardProps){
    return (
        <div className={s.card}>
             <Image src={props.src} className={s.image} alt={props.alt}></Image>
            <div className={s.description}>{props.description}</div>
        </div>
    )
}