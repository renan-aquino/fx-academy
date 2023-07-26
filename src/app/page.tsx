import Image from 'next/image'
import s from './page.module.css'
import { Hero } from '@/components/Sections/Hero/Hero'
import { Skills } from '@/components/Sections/Skills/Skills'
import { SocialProof } from '@/components/Sections/SocialProof/SocialProof'
import { Cta } from '@/components/Sections/CTA/Cta'
import { Featured } from '@/components/Sections/Featured/Featured'
import { Softwares } from '@/components/Sections/Softwares/Softwares'

export default function Home() {
  return (
   <main>
    <Hero></Hero>
    <Softwares/>
    <Skills/>
    <SocialProof/>
    <Cta/>
    
   </main>
  )
}
