import s from './page.module.css'
import { Hero } from '@/components/Sections/Hero/Hero'
import { Skills } from '@/components/Sections/Skills/Skills'
import { SocialProof } from '@/components/Sections/SocialProof/SocialProof'
import { Cta } from '@/components/Sections/CTA/Cta'
import { Softwares } from '@/components/Sections/Softwares/Softwares'
import { Companies } from '@/components/Sections/Companies/Companies'

export default function Home() {
  return (
   <>
    <Hero></Hero>
    <Softwares/>
    <Skills/>
    <SocialProof/>
    <Companies/>
    <Cta/>
   </>
  )
}
