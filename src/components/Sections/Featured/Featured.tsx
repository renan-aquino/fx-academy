import s from './featured.module.css'

export function Featured(){
    return(
        <section className={s.featured}>
            <div className={s.container}>
                <div className={s.box}>
                    <h2>FX Academy Workshop</h2>
                    <div className={s.headlines}>
                        <h4>The most awaited video editing event.</h4>
                        <h4>Meet professionals from all around the world.</h4>
                    </div>
                    <p>July, 24 - July, 25</p>
                    <button className={s.btn}>Learn more</button>
                </div>
            </div>
        </section>
    )
}