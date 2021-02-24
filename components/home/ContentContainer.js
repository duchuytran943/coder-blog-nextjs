import styles from "styles/components/ContentContainer.module.scss";
import { FeedToggle } from "components/home";

const ContentContainer = () => {
  return (
    <div className={styles.contentContainer}>
      {/* <div className={styles.feedToggle}> */}
      <FeedToggle></FeedToggle>
      {/* </div> */}
      <div className={styles.articleList}>ArticleList</div>
    </div>
  );
};

export default ContentContainer;
