import React from 'react'
import styles from "./style.module.css"

const LandHero = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.cards}>
          <h1 className={styles.cards__h1} >Земельные участки</h1>
          <h2 className={styles.cards__h2} >РАССКАЖИТЕ НАМ, ЧТО ТАКОЕ ЖИЗНЬ ВАШЕЙ МЕЧТЫ,
И МЫ НАЙДЕМ ЕЕ ДЛЯ ВАС</h2>
        </div>
      </div>
    </div>
  )
}

export default LandHero