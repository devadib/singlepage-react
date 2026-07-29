import styles from "./Article.module.css";

function Article({ id, name, caption, author, price, img, onRemove }) {
  return (
    <>
      <div className={styles.article}>
        <div className={styles.box}>
          <img src={img} alt="picture" className={styles.image__box} />
        </div>
        <div className={styles.description}>
          <h4 className={styles.article__name} onClick={() => onRemove(id)}>
            {name}
          </h4>
          <p className={styles.article__caption}>{caption}</p>
        </div>
        <div className={styles.info}>
          <div className={styles.author}>
            <span>نویسنده : </span>
            <span className={styles.author__name}>{author}</span>
          </div>
          <div className={styles.date}>
            <span>{`${price} تومان`}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;
