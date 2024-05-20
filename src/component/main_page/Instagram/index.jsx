import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InstaGet } from "../../../redux/instaBlog/index";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";

const MainInstagram = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(InstaGet());
  }, [dispatch]);

  const insta = useSelector((state) => state.insta.instaGet);
  const instaData = insta?.data;
  const instaLoading = insta.loading;
  const instaError = insta.error;

  if (instaLoading) {
    return <h1>Loading...</h1>;
  }

  if (instaError) {
    return <h1>Error</h1>;
  }

  if (!instaData || instaData.length === 0) {
    return <h1>No data available</h1>; // Ma'lumotlar mavjud emas deb xabar berish
  }

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <h1 className={styles.cards__h1}>Instagram</h1>
      </div>
      <div className={styles.components}>
        {instaData.map((elem) => (
            <div key={elem.id} className={styles.card}>
              <img className={styles.images} src={elem.instaImages} alt="image" />
            </div>
        ))}
      </div>
      <div className={styles.card__bottom}>
        <button onClick={() => navigate('/newbuildingis')}   className={styles.card__button}>смотреть больше</button>
      </div>
      <hr className={styles.hr}/>
    </div>
  );
};

export default MainInstagram;
