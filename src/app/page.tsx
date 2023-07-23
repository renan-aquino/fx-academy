import Image from 'next/image'
import s from './page.module.css'
import { Hero } from '@/components/Sections/Hero/Hero'
import { Skills } from '@/components/Sections/Skills/Skills'

export default function Home() {
  return (
   <main>
    <Hero></Hero>

    <section className={s.info}>
      <h2 className={s.title}>Headline Text Hero</h2>
      <div className={s.container}>
        <Image className={s.image} width='540' height='350' alt='ae pr' src='/images/dragons.jpg'/> 
        <div className={s.info_text}>
          <h2 className={s.title_mobile}>Headline Text Hero</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, nemo et! Iusto minus numquam placeat, ad at quas rem. Deleniti, molestias praesentium voluptate recusandae perferendis animi accusantium consequuntur placeat dignissimos.]</p>
        </div>
      </div>  
    </section>

    <Skills/>

   </main>
  )
}
