import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HouseGet } from "../../../redux/house";
import styles from "./style.module.css";

const LandComponents = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(HouseGet());
  }, [dispatch]);

  const house = useSelector((state) => state.house.houseGet);
  const houseData = house?.data;
  const houseLoading = house.loading;
  const houseError = house.error;

  if (houseLoading) {
    return <h1>Loading...</h1>;
  }

  if (houseError) {
    return <h1>Error</h1>;
  }

  if (!houseData || houseData.length === 0) {
    return <h1>No data available</h1>; 
  }

  return (
    <div className={styles.container}>
      <div className={styles.components}>
        {houseData.map((elem) => (
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
    </div>
  );
};

export default LandComponents;
