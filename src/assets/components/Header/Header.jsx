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
                <li>خانه</li>
                <li>کامپوننت ها</li>
                <li>مقالات</li>
                <li>درباره ما</li>
              </ul>
            </div>
            {/* <div><Buttons /></div>
            <div>
              <button>hello</button>
            </div> */}

            <Buttons></Buttons>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
