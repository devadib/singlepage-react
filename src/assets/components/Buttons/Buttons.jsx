import styles from "./Buttons.module.css";

function Buttons({ primary, secondary }) {
  return (
    <>
      <div className={styles.wrapper}>
        <button className={`${styles.btn} ${styles.primary_btn}`}>
          {primary}
        </button>
        <button className={`${styles.btn} ${styles.secondary_btn}`}>
          {secondary}
        </button>
      </div>
    </>
  );
}

export default Buttons;
