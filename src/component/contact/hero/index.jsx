import React from 'react'
import styles from "./style.module.css"

const ContactHero = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.cards}>
          <h1 className={styles.cards__h1}>Ekaterina Kuzmina</h1>
          <h2 className={styles.cards__h2}>company owner</h2>
        </div>
      </div>
    </div>
  )
}

export default ContactHero