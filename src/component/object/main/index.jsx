import React from 'react'
import styles from "./style.module.css"
import Img from "../../../images/contact/BBV 1.png"

const ObjectMain = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.cards__left}>
          <img className={styles.Img} src={Img} alt="img"  />
          <div className={styles.cards__item}>
            <img className={styles.images1} src={Img} alt="img"  />
            <img className={styles.images2} src={Img} alt="img"  />
            <img className={styles.images3} src={Img} alt="img"  />
            <img className={styles.images4} src={Img} alt="img"  />
            <img className={styles.images5} src={Img} alt="img"  />
          </div>
        </div>
        <div className={styles.cards__right}>
          <div className={styles.cards__right__item}>
            <h1 className={styles.cards__h1}>€ 4,192,000</h1>
          </div>
          <div className={styles.cards__right__bottom}>
            <h2 className={styles.cards__h2}>Артикул</h2>
            <p className={styles.cards__p}>R3304774</p>
          </div>
          <hr className={styles.cards__hr}/>
          <div className={styles.cards__right__bottom}>
            <h2 className={styles.cards__h2}>Спальни</h2>
            <p className={styles.cards__p}>2</p>
          </div>
          <hr className={styles.cards__hr}/>
          <div className={styles.cards__right__bottom}>
            <h2 className={styles.cards__h2}>Ванные</h2>
            <p className={styles.cards__p}>2</p>
          </div>
          <hr className={styles.cards__hr}/>
          <div className={styles.cards__right__bottom}>
            <h2 className={styles.cards__h2}>Aвтостоянка</h2>
            <p className={styles.cards__p}>Да</p>
          </div>
          <hr className={styles.cards__hr}/>
          <div className={styles.cards__right__bottom}>
            <h2 className={styles.cards__h2}>Сад</h2>
            <p className={styles.cards__p}>Да</p>
          </div>
          <hr className={styles.cards__hr}/>
          <div className={styles.cards__right__bottom}>
            <h2 className={styles.cards__h2}>Бассейн</h2>
            <p className={styles.cards__p}>Да</p>
          </div>
          <hr className={styles.cards__hr}/>
          <div className={styles.cards__right__bottom}>
            <h2 className={styles.cards__h2}>Площадь</h2>
            <p className={styles.cards__p}>75 m2</p>
          </div>
          <hr className={styles.cards__hr}/>
          <div className={styles.cards__right__bottom}>
            <h2 className={styles.cards__h2}>Терраса</h2>
            <p className={styles.cards__p}>25 m2</p>
          </div>
          <hr className={styles.cards__hr}/>
          <div className={styles.cards__right__bottom}>
            <h2 className={styles.cards__h2}>Участок</h2>
            <p className={styles.cards__p}>0 m2</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ObjectMain