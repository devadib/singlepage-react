import styles from "./Footer.module.css";
import Buttons from "../Buttons/Buttons";
function Footer() {
  return (
    <>
      <div className={styles.Footer__wrapper}>
        <h4 className={styles.Footer__titel}>
          پروژه رزومه‌ای می‌خواهید؟ با سبزلرن حرفه‌ای بسازید!
        </h4>
        <p className={styles.Footer__caption}>
          سبزلرن همراه شماست تا با آموزش‌های کاربردی و پروژه‌های جذاب
          برنامه‌نویسی، رزومه‌ای قدرتمند بسازید. از یادگیری تا اجرای پروژه‌های
          واقعی، ما کنارتون هستیم تا مهارت‌هاتون رو به سطح بعدی ببرید!
        </p>
        <div className={styles.Footer__btn}>
          <Buttons primary="مشاهده پروژه‌ها" secondary="شروع یادگیری"></Buttons>
        </div>
      </div>
    </>
  );
}

export default Footer;
