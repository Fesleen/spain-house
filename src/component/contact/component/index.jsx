import React from 'react'
import styles from './style.module.css'
import Img from '../../../images/about/IMG_4948 3.svg'

const ContactComponent = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cards}>
          <div className={styles.cards__left}>
            <p className={styles.cards__p}>Я решил переехать в Испанию еще в 2008 году. Пройдя через Барселону,
              Мадрид и Валенсию, я наконец откр ыл для себя жизнь мечты, которой можно
              наслаждаться в Марбелье в 2012 году, и с тех пор не переезжала!</p>
            <p className={styles.cards__p}>Имея опыт работы в секторе недвижимости в инвестиционно-банковской фирме,
              я понял, что моя обширная сеть контактов в этой области дает мне возможность
              добиться чего-то большего. Вступив в отрасль недвижимости в 2015 году, я получил
              шанс стать соучредителем компании Prime Realty Marbella в 2016 году, и с тех пор
              это безупречный успех!</p>
              <h2 className={styles.cards__h2}>LanguageS: RUSSIAN, English, Spanish. </h2>
          </div>
          <div className={styles.cards__right}>
            <div className={styles.cards__right__item}>
              <img className={styles.Img} src={Img} alt="images" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ContactComponent