import styles from "./Buttons.module.css";

function Buttons() {
  return (
    <>
      <div className={styles.wrapper}>
        <button className={`${styles.btn} ${styles.primary_btn}`}>
          خرید اشتراک
        </button>
        <button className={styles.btn}>ورود یا ثبت نام</button>
      </div>
    </>
  );
}

export default Buttons;
