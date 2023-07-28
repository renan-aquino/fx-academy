import s from './skillGrid.module.css'
import { SkillCard } from "../SkillCard/SkillCard";
import biscuits from '@/../public/images/biscuits2.jpg'
import rigGirl from '@/../public/images/rig-girl2.jpg'
import transition from '@/../public/images/transition2.jpg'
import colorCorrection from '@/../public/images/color-correction2.jpg'
import fxGirl from '@/../public/images/fx-girl2.jpg'
import expressions from '@/../public/images/extend.png'

export function SkillGrid(){
    return (
        <div className={s.grid}>
            <SkillCard src={biscuits} description='3D Rendering' alt='3d rendered biscuits'/>
            <SkillCard src={rigGirl} description='Character Rig' alt='rig character girl'/>
            <SkillCard src={transition} description='Transitions' alt='transition icon'/>
            <SkillCard src={colorCorrection} description='Color Correction' alt='color correction photo'/>
            <SkillCard src={fxGirl} description='Video Effects' alt='visual effects photo'/>
            <SkillCard src={expressions} description='Expressions' alt='extend script expression'/>
        </div>
    )
}