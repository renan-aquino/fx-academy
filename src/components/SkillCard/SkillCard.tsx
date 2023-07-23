
import s from './skillCard.module.css'
import Image from 'next/image'

interface skillCardProps {
    src: string,
    description: string
}

export function SkillCard(props: skillCardProps){
    return (
        <div className={s.card}>
            <Image src={props.src} className={s.image} alt='b' width='280' height='200'></Image>
            <div className={s.description}>{props.description}</div>
        </div>
    )
}