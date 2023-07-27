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
            {/* <SkillCard src='/images/biscuits2.jpg' description='3D Rendering'/>
            <SkillCard src='/images/rig-girl2.jpg' description='Character Rig'/>
            <SkillCard src='/images/transition2.jpg' description='Transitions'/>
            <SkillCard src='/images/color-correction2.jpg' description='Color Correction'/>
            <SkillCard src='/images/fx-girl2.jpg' description='Video Effects'/>
            <SkillCard src='/images/extend.png' description='Expressions'/> */}

            <SkillCard src={biscuits} description='3D Rendering'/>
            <SkillCard src={rigGirl} description='Character Rig'/>
            <SkillCard src={transition} description='Transitions'/>
            <SkillCard src={colorCorrection} description='Color Correction'/>
            <SkillCard src={fxGirl} description='Video Effects'/>
            <SkillCard src={expressions} description='Expressions'/>
        </div>
    )
}