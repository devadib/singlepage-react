import Buttons from "../Buttons/Buttons";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.navgation}>
            <div>
              <ul className={styles.menu}>
                <li>
                  <a className={styles.link} href="#">
                    خانه
                  </a>
                </li>
                <li>
                  {" "}
                  <a className={styles.link} href="#">
                    کامپوننت ها
                  </a>
                </li>
                <li>
                  <a className={styles.link} href="#">
                    مقالات
                  </a>
                </li>
                <li>
                  <a className={styles.link} href="#">
                    درباره ها
                  </a>
                </li>
              </ul>
            </div>
            {/* <div><Buttons /></div>
            <div>
              <button>hello</button>
            </div> */}

            <Buttons
              primary="ورود یا ثبت‌نام"
              secondary="خرید اشتراک"
            ></Buttons>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
