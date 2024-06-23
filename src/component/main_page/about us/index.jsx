import React from 'react'
import styles from './style.module.css'
import Img from '../../../images/about/IMG_4948 3.svg'

const MainAbout = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cards}>
          <div className={styles.cards__left}>
            <h2 className={styles.cards__h2}>О HAC</h2>
            <p className={styles.cards__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue
              ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue
              ligula in rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed tincidunt congue ligula  n rutrum. Morbi nec lacus condimentum,
              hendrerit mi eu, feugiat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed tincidunt congue ligula in rutrum.</p>
            <h3 className={styles.cards__h3}>будем рады помочь вам!</h3>
          </div>
          <div className={styles.cards__right}>
          <div className={styles.cards__right__item}>
            <img className={styles.Img} src={Img} alt="img" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default MainAbout