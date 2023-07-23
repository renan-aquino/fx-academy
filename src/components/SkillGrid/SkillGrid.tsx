import s from './skillGrid.module.css'
import { SkillCard } from "../SkillCard/SkillCard";

export function SkillGrid(){
    return (
        <div className={s.grid}>
            <SkillCard src='/images/biscuits2.jpg' description='3D Rendering'/>
            <SkillCard src='/images/rig-girl2.jpg' description='Character Rig'/>
            <SkillCard src='/images/transition2.jpg' description='Transitions'/>
            <SkillCard src='/images/color-correction2.jpg' description='Color Correction'/>
            <SkillCard src='/images/fx-girl2.jpg' description='Video Effects'/>
            <SkillCard src='/images/extend.png' description='Expressions'/>
        </div>
    )
}