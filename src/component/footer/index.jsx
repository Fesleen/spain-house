import React from 'react'
import styles from "./style.module.css"
import Logo from "../../images/footer/logo.svg"
import Insta from "../../images/footer/insta.svg"
import Facebook from "../../images/footer/facebook.svg"

const Footer = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.cards}>
          <img className={styles.img} src={Logo} alt="" />
          <div className={styles.cards__item}>
          <img className={styles.images} src={Insta} alt="" />
          <img className={styles.images} src={Facebook} alt="" />
          </div>
          <h2 className={styles.cards__h2}>© Все права защищены. Агентство недвижимости Spain House </h2>
        </div>
      </div>
    </div>
  )
}

export default Footer