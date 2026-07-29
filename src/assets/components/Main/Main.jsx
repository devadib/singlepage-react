import { useState } from "react";
import Buttons from "../Buttons/Buttons";
import Article from "../Articles/Article";
import styles from "./Main.module.css";

function Main() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      name: "ساخت اولین پروژه رزومه‌ای با پایتون: قدم‌به‌قدم تا موفقیت",
      caption:
        " در این مقاله، به‌صورت گام‌به‌گام یاد می‌گیرید چطور یک پروژه ساده اما حرفه‌ای با پایتون بسازید که رزومه برنامه‌نویسی‌تون رو تقویت کنه. از ایده‌پردازی تا کدنویسی و نکات کلیدی برای ارائه پروژه، همه‌چیز رو با زبانی ساده و مثال‌های عملی پوشش دادیم! ",
      author: "ادیب",
      price: 200_000,
      img: "/public/images/clay-banks-cReV-cbE2L4-unsplash.jpg",
    },
    {
      id: 2,
      name: "ساخت اولین پروژه رزومه‌ای با پایتون: قدم‌به‌قدم تا موفقیت",
      caption:
        " در این مقاله، به‌صورت گام‌به‌گام یاد می‌گیرید چطور یک پروژه ساده اما حرفه‌ای با پایتون بسازید که رزومه برنامه‌نویسی‌تون رو تقویت کنه. از ایده‌پردازی تا کدنویسی و نکات کلیدی برای ارائه پروژه، همه‌چیز رو با زبانی ساده و مثال‌های عملی پوشش دادیم! ",
      author: "ادیب حسنی",
      price: 400_000,
      img: "/public/images/snowy.jpg",
    },
    {
      id: 3,
      name: "ساخت اولین پروژه رزومه‌ای با پایتون: قدم‌به‌قدم تا موفقیت",
      caption:
        " در این مقاله، به‌صورت گام‌به‌گام یاد می‌گیرید چطور یک پروژه ساده اما حرفه‌ای با پایتون بسازید که رزومه برنامه‌نویسی‌تون رو تقویت کنه. از ایده‌پردازی تا کدنویسی و نکات کلیدی برای ارائه پروژه، همه‌چیز رو با زبانی ساده و مثال‌های عملی پوشش دادیم! ",
      author: "Adib",
      price: 600_000,
      img: "/public/images/clay-banks-cReV-cbE2L4-unsplash.jpg",
    },
    {
      id: 4,
      name: "ساخت اولین پروژه رزومه‌ای با پایتون: قدم‌به‌قدم تا موفقیت",
      caption:
        " در این مقاله، به‌صورت گام‌به‌گام یاد می‌گیرید چطور یک پروژه ساده اما حرفه‌ای با پایتون بسازید که رزومه برنامه‌نویسی‌تون رو تقویت کنه. از ایده‌پردازی تا کدنویسی و نکات کلیدی برای ارائه پروژه، همه‌چیز رو با زبانی ساده و مثال‌های عملی پوشش دادیم! ",
      author: "ادیب",
      price: 1000_000,
      img: "/public/images/snowy.jpg",
    },
    {
      id: 5,
      name: "ساخت اولین پروژه رزومه‌ای با پایتون: قدم‌به‌قدم تا موفقیت",
      caption:
        " در این مقاله، به‌صورت گام‌به‌گام یاد می‌گیرید چطور یک پروژه ساده اما حرفه‌ای با پایتون بسازید که رزومه برنامه‌نویسی‌تون رو تقویت کنه. از ایده‌پردازی تا کدنویسی و نکات کلیدی برای ارائه پروژه، همه‌چیز رو با زبانی ساده و مثال‌های عملی پوشش دادیم! ",
      author: "adib",
      price: 10_000_000,
      img: "/public/images/snowy.jpg",
    },
    {
      id: 6,
      name: "ساخت اولین پروژه رزومه‌ای با پایتون: قدم‌به‌قدم تا موفقیت",
      caption:
        " در این مقاله، به‌صورت گام‌به‌گام یاد می‌گیرید چطور یک پروژه ساده اما حرفه‌ای با پایتون بسازید که رزومه برنامه‌نویسی‌تون رو تقویت کنه. از ایده‌پردازی تا کدنویسی و نکات کلیدی برای ارائه پروژه، همه‌چیز رو با زبانی ساده و مثال‌های عملی پوشش دادیم! ",
      author: "ادیب حسنی",
      price: 200_000,
      img: "/public/images/clay-banks-cReV-cbE2L4-unsplash.jpg",
    },
    {
      id: 7,
      name: "ساخت اولین پروژه رزومه‌ای با پایتون: قدم‌به‌قدم تا موفقیت",
      caption:
        " در این مقاله، به‌صورت گام‌به‌گام یاد می‌گیرید چطور یک پروژه ساده اما حرفه‌ای با پایتون بسازید که رزومه برنامه‌نویسی‌تون رو تقویت کنه. از ایده‌پردازی تا کدنویسی و نکات کلیدی برای ارائه پروژه، همه‌چیز رو با زبانی ساده و مثال‌های عملی پوشش دادیم! ",
      author: "ادیب",
      price: 200_000,
      img: "/public/images/snowy.jpg",
    },
    {
      id: 8,
      name: "ساخت اولین پروژه رزومه‌ای با پایتون: قدم‌به‌قدم تا موفقیت",
      caption:
        " در این مقاله، به‌صورت گام‌به‌گام یاد می‌گیرید چطور یک پروژه ساده اما حرفه‌ای با پایتون بسازید که رزومه برنامه‌نویسی‌تون رو تقویت کنه. از ایده‌پردازی تا کدنویسی و نکات کلیدی برای ارائه پروژه، همه‌چیز رو با زبانی ساده و مثال‌های عملی پوشش دادیم! ",
      author: "ادیب",
      price: 200_000,
      img: "/public/images/clay-banks-cReV-cbE2L4-unsplash.jpg",
    },
  ]);

  function onClickHandler(id) {
    const newArticles = articles.filter((article) => article.id !== id);
    setArticles(newArticles);
  }

  return (
    <>
      <main className={styles.main}>
        {/* intro */}
        <section className={styles.intro}>
          <div className="container">
            <div className={styles.wrapper}>
              <div className={styles.description}>
                <h2 className={styles.title}>
                  سبزبلاگ؛ مرجع آموزش و پروژه‌های برنامه‌نویسی
                </h2>
                <p className={styles.caption}>
                  سبزبلاگ فضایی برای یادگیری برنامه‌نویسی و به‌اشتراک‌گذاری دانش
                  است. اینجا مقالات آموزشی، نکات کاربردی و پروژه‌های رزومه‌ای
                  برنامه‌نویسی با زبانی ساده و حرفه‌ای ارائه می‌شه. هدف ما کمک
                  به شماست تا مهارت‌هاتون رو تقویت کنید و رزومه‌ای قوی با
                  پروژه‌های جذاب بسازید!
                </p>
                <div className={styles.ButtonsContainer}></div>
                <Buttons
                  primary="تهیه اشتراک"
                  secondary="خواندن مقالات"
                ></Buttons>
              </div>
              <div className={styles.image_container}>
                <img src="/public/images/hero-illustrator.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* Articles */}
        <section>
          <div className="container">
            <div className={styles.header__article}>
              <h4 className={styles.articles__title}>مقالات اخیر</h4>
              <a className={styles.articles__link} href="#">
                بیشتر بخوانید
              </a>
            </div>
          </div>
          <div className="container">
            <div className={styles.wrapper__articles}>
              {articles.map((item) => (
                <Article
                  key={item.id}
                  {...item}
                  onRemove={onClickHandler}
                ></Article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
