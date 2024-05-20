import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AksesuarsGet } from "../../../redux/houseblog/index";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";

const HomePresentComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AksesuarsGet());
  }, [dispatch]);

  const aksesuars = useSelector((state) => state.aksesuars.aksesuarsGet);
  const aksesuarsData = aksesuars?.data;
  const aksesuarsLoading = aksesuars.loading;
  const aksesuarsError = aksesuars.error;

  if (aksesuarsLoading) {
    return <h1>Loading...</h1>;
  }

  if (aksesuarsError) {
    return <h1>Error</h1>;
  }

  if (!aksesuarsData || aksesuarsData.length === 0) {
    return <h1>No data available</h1>; // Ma'lumotlar mavjud emas deb xabar berish
  }

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <h1 className={styles.cards__h1}>Рекомендуемые объекты</h1>
        <p className={styles.cards__p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
          congue ligula in rutrum. Morbi ne lacus condimentum, hendrerit mi eu,
        </p>
      </div>
      <div className={styles.components}>
        {aksesuarsData.map((elem) => (
            <div key={elem.id} className={styles.card}>
              <img className={styles.images} src={elem.images} alt="image" />
              <div className={styles.bottom}>
                <h4 className={styles.cards__h4}>{elem.name}</h4>
                <p className={styles.cards__title}>{elem.title}</p>
                <strong className={styles.cards__price}>{elem.price}</strong>
                <div className={styles.bottom__item}>
                  <h5 className={styles.cards__area}>{elem.area}</h5>
                  <h5 className={styles.cards__area}>{elem.bedroom}</h5>
                </div>
                <h5 className={styles.cards__area}>{elem.terace}</h5>
              </div>
            </div>
        ))}
      </div>
      <div className={styles.card__bottom}>
        <button onClick={() => navigate('/buildings')}  className={styles.card__button}>Bесь Kаталог</button>
      </div>
      <hr className={styles.hr}/>
    </div>
  );
};

export default HomePresentComponent;
