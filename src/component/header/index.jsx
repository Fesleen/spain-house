import React from 'react'
import styles from './style.module.css'
import Logo from '../../images/header/logo.svg'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';


const Header = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box className={styles.Box}
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <div className={styles.cards_drawer}>
          <CloseIcon />
        </div>
        <h2 className={styles.cards__h2}>Добро пожаловать в Spain House</h2>
         <Link className={styles.link} to={"/"}>Главная</Link>
         <Divider className={styles.hr} />
         <Link className={styles.link} to={"/newbuildingis"}>новостройки</Link>
         <Divider className={styles.hr} />
         <Link className={styles.link} to={"/secondary"}>вторичная недвижимость</Link>
         <Divider className={styles.hr} />
         <Link className={styles.link} to={"/rent"}>аренда</Link>
         <Divider className={styles.hr} />
         <Link className={styles.link} to={"/land"}>земельные участки</Link>
         <Divider className={styles.hr} />
         <Link className={styles.link} to={"/contact"}>контакты</Link>
          <Divider className={styles.hr} />
          <Link className={styles.link} to={"/object"}>oбъект</Link>
          <div className={styles.cards_drawer__top}>
          <p className={styles.cards__p}>вторичная недвижимость</p>
          </div>
    </Box>
  );
  return (
    <>
      <div className={styles.container} >
        <div className={styles.cards} >
          <img className={styles.Logo} src={Logo} alt="" />
          <div className={styles.cards__item} >
            <div className={styles.card} >
              <WhatsAppIcon className={styles.IconWhatsap} />
              <strong className={styles.strong}>+79 951 120 365</strong>
            </div>
            <div className={styles.card} >
              <CallIcon className={styles.IconCall} />
              <strong className={styles.strong}>+34 951 120 365</strong>
            </div>
            <div className={styles.card} >
              <CallIcon className={styles.IconCall} />
              <strong className={styles.strong}>+79 951 120 365</strong>
            </div>
            <div className={styles.CardButton}>
              {['right'].map((anchor) => (
                <React.Fragment key={anchor} className={styles.CardButton}>
                  <div  className={styles.CardButton}>
                  <Button onClick={toggleDrawer(anchor, true)}>  <MenuIcon className={styles.MenuIcon} /></Button>
                  </div>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header