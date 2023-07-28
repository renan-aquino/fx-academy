import { SkillGrid } from '@/components/SkillGrid/SkillGrid'
import s from './skills.module.css'

export function Skills(){
    return(
        <section className={s.skills}>
            <div className={s.container}>
                <h2>Everything you need, in one place</h2>
                <SkillGrid/>
            </div>
        </section>
    )
}