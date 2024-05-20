import React from 'react'
import styles from "./style.module.css"

const RentHero = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.cards}>
          <h1 className={styles.cards__h1} >Аренда</h1>
          <h2 className={styles.cards__h2} >РАССКАЖИТЕ НАМ, ЧТО ТАКОЕ ЖИЗНЬ ВАШЕЙ МЕЧТЫ,
И МЫ НАЙДЕМ ЕЕ ДЛЯ ВАС</h2>
        </div>
      </div>
    </div>
  )
}

export default RentHero