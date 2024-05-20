import React from 'react'
import styles from './style.module.css'
import Img from '../../../images/contact/img.svg'
import { useNavigate } from 'react-router-dom';

const MainContact = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cards}>
          <div className={styles.cards__right}>
            <div className={styles.cards__right__item}>
              <img className={styles.Img} src={Img} alt="" />
            </div>
          </div>
          <div className={styles.cards__left}>
            <h2 className={styles.cards__h2}>Екатерина Кузьмина</h2>
            <p className={styles.cards__p}>Основатель компании Spain House, эксперт по недвижимости</p>
            <p className={styles.cards__p}>Планируете ли вы переехать в Марбелью или купить дом для отдыха, мы в 3SA Estate внесем решающий вклад, поставив ваши уникальные потребности в центр внимания.</p>
            <h3 className={styles.cards__h3}>LanguageS: RUSSIAN, English, Spanish. </h3>
            <div className={styles.cards__botttom}>
              <button onClick={() => navigate('/contact')} className={styles.button}>контакты</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default MainContact