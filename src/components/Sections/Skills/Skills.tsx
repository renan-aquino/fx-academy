import { SkillGrid } from '@/components/SkillGrid/SkillGrid'
import s from './skills.module.css'

export function Skills(){
    return(
        <section className={s.skills}>
            <h2>Here you will learn:</h2>
            <p>Master essential and advanced techniques in our Motion Designer program.</p>
            <SkillGrid/>
        </section>
    )
}