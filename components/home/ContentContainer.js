import styles from "styles/components/ContentContainer.module.scss";

const ContentContainer = () => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.feedToggle}>FeedToggle</div>
      <div className={styles.articleList}>ArticleList</div>
    </div>
  );
};

export default ContentContainer;
