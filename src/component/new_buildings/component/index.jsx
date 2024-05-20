import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CitysGet } from "../../../redux/city/index";
import styles from "./style.module.css";

const NewBuildingisHero = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CitysGet());
  }, [dispatch]);

  const citys = useSelector((state) => state.citys.citysGet);
  const citysData = citys?.data;
  const citysLoading = citys.loading;
  const citysError = citys.error;

  if (citysLoading) {
    return <h1>Loading...</h1>;
  }

  if (citysError) {
    return <h1>Error</h1>;
  }

  if (!citysData || citysData.length === 0) {
    return <h1>No data available</h1>; 
  }

  return (
    <div className={styles.container}>
      <div className={styles.components}>
        {citysData.map((elem) => (
            <div key={elem.id} className={styles.card}>
              <img className={styles.images} src={elem.images} alt="image" />
              <div className={styles.bottom}>
                <h4 className={styles.cards__h4}>{elem.name}</h4>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default NewBuildingisHero;
