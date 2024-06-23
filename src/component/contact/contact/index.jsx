import React from 'react';
import styles from "./style.module.css"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import { useDispatch } from "react-redux";
import { PostContact } from '../../../redux/contact';

const Contact = () => {
  const dispatch = useDispatch()
  const HandleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value
    }
    dispatch(PostContact(body))
    console.log(body);
  };
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.cards__border}>
          <h1 className={styles.cards__h1}>Заинтересовал объект?</h1>
          <p className={styles.cards__p}>
            Для получения дополнительной информации об этом объекте, пожалуйста,
            заполните форму ниже или позвоните нам.
          </p>
          <div className={styles.cards__item}>
            <div className={styles.card}>
              <WhatsAppIcon className={styles.IconWhatsap} />
              <strong className={styles.strong}>+79 951 120 365</strong>
            </div>
            <div className={styles.card}>
              <CallIcon className={styles.IconCall} />
              <strong className={styles.strong}>+34 951 120 365</strong>
            </div>
            <div className={styles.card}>
              <CallIcon className={styles.IconCall} />
              <strong className={styles.strong}>+79 951 120 365</strong>
            </div>
          </div>
          <div className={styles.cards__form} id='contact'>
            <h1 className={styles.cards__form__h1}>Fill in the table to contact us!</h1>
            <form onSubmit={HandleSubmit}>
              <input className={styles.input} id="outlined-basic" type='text' placeholder='Name' name='name' />
              <input className={styles.input} id="outlined-basic" type='email' placeholder='Email' name='email' />
              <input className={styles.input} id="outlined-basic" type='number' placeholder='Mobil phone' name='phone' />
              <div className={styles.cards__button}>
                <button className={styles.card__form__button} type='submit'>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
