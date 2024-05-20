import React, { useEffect } from 'react';
import styles  from "./style.module.css"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from "react-redux";
import { PostContact } from "../../../redux/contact/index";

const Contact = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PostContact());
  }, [dispatch]);

  const contact = useSelector((state) => state.contact.postContact);
  const contactData = contact?.Data;
  const contactLoading = contact?.Loading;
  const contactError = contact?.Error;

  if (contactLoading) {
    return <h1>Loading...</h1>;
  }

  if (contactError) {
    return <h1>Error</h1>;
  }

  if (!contactData || contactData.length === 0) {
    return <h1>No data available</h1>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
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
          <div className={styles.cards__form}>
            {contactData.map((elem) => (
              <form key={elem.id} onSubmit={handleSubmit}>
                <Box
                  className={styles.box}
                  sx={{
                    '& > :not(style)': { m: 1, width: '100ch' },
                  }}
                >
                  <TextField className={styles.input} id="outlined-basic" type='text' placeholder='Артикул: R3304693' name={elem.title} />
                  <TextField className={styles.input} id="outlined-basic" type='text' placeholder='Имя*' name={elem.name} />
                  <TextField className={styles.input} id="outlined-basic" type='email' placeholder='Email адрес*' name={elem.email} />
                  <TextField className={styles.input} id="outlined-basic" type='number' placeholder='Номер телефона' name={elem.number} />
                  <TextField className={styles.input} id="outlined-basic" type='text' placeholder='Сообщение*' name={elem.sent} />
                  <div className={styles.cards__button}>
                    <button className={styles.card__button} type='submit'>отправить</button>
                  </div>
                </Box>
              </form>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
